import type { Resume, Resume as Template } from "@/types/resume";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import moment from "moment";

// Register a font if needed
Font.register({
  family: "Open Sans",
  fonts: [
    { src: "/fonts/open-sans/400.ttf", fontWeight: 400 },
    { src: "/fonts/open-sans/500.ttf", fontWeight: 500 },
    { src: "/fonts/open-sans/600.ttf", fontWeight: 600 },
    { src: "/fonts/open-sans/700.ttf", fontWeight: 700 },
    { src: "/fonts/open-sans/800.ttf", fontWeight: 800 },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 20,
    fontSize: 12,
    fontFamily: "Open Sans",
    lineHeight: 1.6,
  },
  leftColumn: {
    width: "30%",
  },
  rightColumn: {
    paddingLeft: 25,
    width: "70%",
  },
  header: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  text: {
    marginBottom: 4,
    fontSize: 12,
  },
  subtle: {
    marginBottom: 2,
    fontSize: 10,
    opacity: 0.8,
  },
  link: {
    color: "blue",
    textDecoration: "none",
    marginBottom: 8,
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
        <Text style={styles.header}>{data.profile?.name}</Text>
        <Text style={styles.text}>{data.profile?.profession}</Text>

        <View style={{ marginBottom: 15, marginTop: 10 }}>
          <Text style={styles.sectionTitle}>DETAILS</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 600 }}>Address:</Text>{" "}
            {data.contact?.address}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 600 }}>Phone:</Text>{" "}
            {data.contact?.phone}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 600 }}>Email:</Text>{" "}
            {data.contact?.email}
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>LINKS</Text>
          {data.socials?.map((item) => (
            <Link key={item._id} style={styles.link} href={item.url}>
              {item.title}
            </Link>
          ))}
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>SKILLS</Text>

          {data.skills?.map((item) => (
            <View key={item._id}>
              <Text style={styles.text}>{item.title}</Text>
              <View style={styles.skillBar}></View>
            </View>
          ))}
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.sectionTitle}>LANGUAGES</Text>
          {data.languages?.map((item) => (
            <Text style={styles.text} key={item._id}>
              {item.title} - {item.experience}
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

          {data.experiences?.map((item) => (
            <View key={item._id}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: 600 }}>{item.companyName}</Text> |{" "}
                {item.position} |{moment(item.startedAt).format("MMMM YYYY")} -{" "}
                {item.endedAt
                  ? moment(item.endedAt).format("MMMM YYYY")
                  : "Present"}
              </Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>

          {data.projects?.map((item) => (
            <View key={item._id}>
              <Text style={[styles.text, { marginBottom: 0 }]}>
                <Text style={{ fontWeight: 600 }}>{item.name}</Text>{" "}
                {item.sourceUrl ? (
                  <Text>
                    |{" "}
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
              <Text style={styles.text}>{item.description}</Text>
              <Text style={styles.subtle}>{item.tools.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={{}}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {data.educations?.map((item) => (
            <View key={item._id}>
              <Text style={styles.text}>
                {item.instituteName} | {item.subject}
              </Text>
              <Text style={styles.subtle}>
                {moment(item.startedAt).format("MMMM YYYY")} -{" "}
                {item.endedAt
                  ? moment(item.endedAt).format("MMMM YYYY")
                  : "Present"}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Template;
