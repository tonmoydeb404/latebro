import { getSkillPercentage } from "@/helpers/resume";
import { registerOpenSans } from "@/lib/react-pdf/fonts";
import type { Resume, Resume as Template } from "@/types/resume";
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import moment from "moment";

registerOpenSans();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 30,
    fontSize: 12,
    fontFamily: "Open Sans",
    lineHeight: 1.6,
  },
  leftColumn: {
    width: "35%",
  },
  rightColumn: {
    paddingLeft: 25,
    width: "70%",
  },
  header: {
    fontSize: 24,
    fontWeight: 800,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 12,
    color: "#000",
    textDecoration: "none",
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 600,
  },
  subtle: {
    fontSize: 10,
    opacity: 0.8,
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
  skillBar: {
    height: 5,
    backgroundColor: "#000",
    marginBottom: 10,
    borderRadius: 2,
  },
});

const Template = ({ data }: { data: Resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <Text style={[styles.header, { marginBottom: 15 }]}>
          {data.profile?.name}
        </Text>
        <Text style={[styles.text, { marginBottom: 15 }]}>
          {data.profile?.profession}
        </Text>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>DETAILS</Text>
          {data.contact?.address && (
            <View>
              <Text style={[styles.textTitle]}>Address:</Text>
              {data.contact?.address_link ? (
                <Link style={styles.text} href={data.contact.address_link}>
                  {data.contact?.address}
                </Link>
              ) : (
                <Text style={styles.text}>{data.contact?.address}</Text>
              )}
            </View>
          )}

          {data.contact?.phone && (
            <View style={{ marginTop: 6 }}>
              <Text style={[styles.textTitle]}>Phone:</Text>
              <Link style={styles.text} href={`tel:${data.contact.phone}`}>
                {data.contact.phone}
              </Link>
            </View>
          )}

          {data.contact?.email && (
            <View style={{ marginTop: 6 }}>
              <Text style={[styles.textTitle]}>Email:</Text>
              <Link style={styles.text} href={`mailto:${data.contact.email}`}>
                {data.contact.email}
              </Link>
            </View>
          )}
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>LINKS</Text>
          {data.socials?.map((item) => (
            <Link
              key={item._id}
              style={[styles.link, { marginBottom: 4 }]}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>SKILLS</Text>

          {data.skills?.map((item) => (
            <View key={item._id}>
              <Text style={[styles.text, { marginBottom: 2 }]}>
                {item.title}
              </Text>
              <View
                style={[
                  styles.skillBar,
                  { width: `${getSkillPercentage(item.experience)}%` },
                ]}
              ></View>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.sectionTitle}>LANGUAGES</Text>
          {data.languages?.map((item) => (
            <Text style={[styles.text, { marginBottom: 4 }]} key={item._id}>
              {item.title} -{" "}
              <Text style={{ opacity: 0.7 }}>{item.experience}</Text>
            </Text>
          ))}
        </View>
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>PROFILE</Text>
          <Text style={styles.text}>{data.profile?.bio}</Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>

          <View style={{ gap: 10 }}>
            {data.experiences?.map((item) => (
              <View key={item._id}>
                <Text style={[styles.textTitle]}>{item.companyName}</Text>
                <Text style={styles.subtle}>
                  {item.position} | {moment(item.startedAt).format("MMMM YYYY")}{" "}
                  -{" "}
                  {item.endedAt
                    ? moment(item.endedAt).format("MMMM YYYY")
                    : "Present"}
                </Text>
                <Text style={[styles.text]}>{item.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>

          <View style={{ gap: 10 }}>
            {data.projects?.map((item) => (
              <View key={item._id}>
                <Text style={[styles.textTitle]}>{item.name}</Text>
                <Text style={[styles.text]}>
                  {item.sourceUrl ? (
                    <Text>
                      <Link style={styles.link} href={item.sourceUrl}>
                        Source
                      </Link>{" "}
                    </Text>
                  ) : null}
                  {item.previewUrl ? (
                    <Text>
                      |{" "}
                      <Link style={styles.link} href={item.previewUrl}>
                        Preview
                      </Link>{" "}
                    </Text>
                  ) : null}
                  {item.caseStudyUrl ? (
                    <Text>
                      |{" "}
                      <Link style={styles.link} href={item.caseStudyUrl}>
                        Case Study
                      </Link>
                    </Text>
                  ) : null}
                </Text>
                <Text style={[styles.text, { marginBottom: 5, marginTop: 5 }]}>
                  {item.description}
                </Text>
                <Text style={styles.subtle}>{item.tools.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{}}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>

          <View style={{ gap: 10 }}>
            {data.educations?.map((item) => (
              <View key={item._id}>
                <Text style={styles.textTitle}>{item.instituteName}</Text>
                <Text style={styles.subtle}>
                  {item.subject} | {moment(item.startedAt).format("MMMM YYYY")}{" "}
                  -{" "}
                  {item.endedAt
                    ? moment(item.endedAt).format("MMMM YYYY")
                    : "Present"}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template;
