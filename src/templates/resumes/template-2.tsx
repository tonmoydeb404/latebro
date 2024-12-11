/* eslint-disable jsx-a11y/alt-text */
import {
  getSkillPercentage,
  isValidImageUrl,
  splitByLineBreaks,
} from "@/helpers/resume";
import { registerOpenSans } from "@/lib/react-pdf/fonts";
import { Resume } from "@/types/resume";
import {
  Document,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import moment from "moment";

// Register fonts
registerOpenSans();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontFamily: "Open Sans",
  },
  sidebar: {
    width: "33%",
    flexShrink: 0,
    backgroundColor: "#1B4D3E",
    padding: 20,
    color: "white",
  },
  main: {
    flex: 1,
    padding: 20,
    color: "black",
  },

  // Section ----------------------------------------------------------------------
  section_title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
    marginTop: 20,
  },
  section_text: {
    fontSize: 12,
    marginBottom: 3,
  },

  // Profile ----------------------------------------------------------------------
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 2,
    color: "white",
    textAlign: "center",
  },
  profession: {
    fontSize: 14,
    color: "#E0E0E0",
    marginBottom: 20,
    textAlign: "center",
  },
  bio: {
    color: "#444444",
  },

  // Contact ----------------------------------------------------------------------
  contact_label: {
    fontSize: 12,
    color: "#a0a0a0",
    marginBottom: 2,
    fontWeight: 500,
  },
  contact_text: {
    fontSize: 12,
    color: "white",
    marginBottom: 10,
    textDecoration: "none",
  },

  // Social ----------------------------------------------------------------------
  social_link: {
    fontSize: 12,
    color: "white",
    marginBottom: 10,
    textDecoration: "none",
  },

  // Skill ----------------------------------------------------------------------
  skill_label: {
    fontSize: 12,
    color: "white",
    marginBottom: 7,
  },
  skill_bar: {
    height: 4,
    backgroundColor: "#a0a0a0",
    marginBottom: 10,
  },
  skill_fill: {
    height: "100%",
    backgroundColor: "white",
  },

  // Item ----------------------------------------------------------------------
  item: {},
  item_title: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 3,
  },
  item_subtitle: {
    fontSize: 12,
    marginBottom: 2,
    color: "#666666",
  },
  item_details: {
    fontSize: 12,
    marginBottom: 5,
    color: "#666666",
  },
  item_tags: {
    fontSize: 10,
    marginBottom: 10,
  },
  bullet_point: {
    paddingLeft: 5,
  },
  item_actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 5,
    marginBottom: 6,
  },
  item_action: {
    fontSize: 11,
    color: "#1B4D3E",
    textDecoration: "none",
    borderRadius: 2,
  },
  item_action_divider: {
    fontSize: 11,
  },
});

type Props = { data: Resume };
const Template2 = (props: Props) => {
  const { data } = props;
  const {
    contact,
    educations,
    experiences,
    languages,
    profile,
    projects,
    skills,
    socials,
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          {isValidImageUrl(profile.avatar) && (
            <Image src={profile.avatar} style={styles.avatar} />
          )}
          <Text style={styles.name}>{profile?.name}</Text>
          <Text style={styles.profession}>{profile?.profession}</Text>

          <View>
            <Text style={styles.section_title}>Contacts</Text>

            {contact.address && (
              <View>
                <Text style={styles.contact_label}>Address</Text>
                {contact.address_link ? (
                  <Link style={styles.contact_text} href={contact.address_link}>
                    {contact?.address}
                  </Link>
                ) : (
                  <Text style={styles.contact_text}>{contact?.address}</Text>
                )}
              </View>
            )}

            {contact.phone && (
              <View>
                <Text style={styles.contact_label}>Phone</Text>
                <Link style={styles.contact_text} href={`tel:${contact.phone}`}>
                  {contact.phone}
                </Link>
              </View>
            )}

            {contact.email && (
              <View>
                <Text style={styles.contact_label}>Email</Text>
                <Link
                  style={styles.contact_text}
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </Link>
              </View>
            )}

            {contact.website && (
              <View>
                <Text style={styles.contact_label}>Website</Text>
                <Link style={styles.contact_text} href={contact.website}>
                  {contact.website}
                </Link>
              </View>
            )}
          </View>

          <View>
            <Text style={styles.section_title}>Socials</Text>
            {socials.map((item) => (
              <Link key={item._id} style={styles.social_link} href={item.url}>
                {item.title}
              </Link>
            ))}
          </View>

          <View>
            <Text style={styles.section_title}>Skills</Text>
            {skills.map((item) => (
              <View key={item._id}>
                <Text style={styles.skill_label}>{item.title}</Text>
                <View style={styles.skill_bar}>
                  <View
                    style={[
                      styles.skill_fill,
                      { width: getSkillPercentage(item.experience) },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.main}>
          <View>
            <Text style={styles.section_title}>Profile</Text>
            <Text style={[styles.section_text, styles.bio]}>
              {profile?.bio}
            </Text>
          </View>
          actions
          <View>
            <Text style={styles.section_title}>Projects</Text>
            <View style={{ rowGap: 15 }}>
              {projects.map((item) => (
                <View key={item._id}>
                  <Text style={styles.item_title}>{item.name}</Text>
                  <View style={styles.item_actions}>
                    {item.caseStudyUrl && (
                      <>
                        <Link
                          style={styles.item_action}
                          href={item.caseStudyUrl}
                        >
                          Learn More
                        </Link>
                        <Text style={styles.item_action_divider}>|</Text>
                      </>
                    )}
                    {item.previewUrl && (
                      <>
                        <Link style={styles.item_action} href={item.previewUrl}>
                          Preview
                        </Link>
                        <Text style={styles.item_action_divider}>|</Text>
                      </>
                    )}
                    {item.sourceUrl && (
                      <Link style={styles.item_action} href={item.sourceUrl}>
                        Source
                      </Link>
                    )}
                  </View>
                  <Text style={styles.item_details}>{item.description}</Text>
                  <Text style={styles.item_tags}>
                    Tools: {item.tools.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.section_title}>Experience</Text>
            <View style={{ rowGap: 15 }}>
              {experiences.map((item) => (
                <View style={styles.item} key={item._id}>
                  <Text style={styles.item_title}>{item.companyName}</Text>
                  <Text style={styles.item_subtitle}>{item.position}</Text>
                  <Text style={styles.item_details}>
                    {moment(item.startedAt).format("MMM YYYY")} -{" "}
                    {item.endedAt
                      ? moment(item.endedAt).format("MMM YYYY")
                      : "Present"}
                  </Text>
                  {splitByLineBreaks(item.description).map((item, index) => (
                    <Text
                      key={index}
                      style={[styles.section_text, styles.bullet_point]}
                    >
                      •{"  "}
                      {item}
                    </Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.section_title}>Education</Text>
            <View style={{ rowGap: 5 }}>
              {educations.map((item) => (
                <View key={item._id}>
                  <Text style={styles.item_title}>{item.instituteName}</Text>
                  <Text style={styles.item_details}>
                    {item.subject}, {moment(item.startedAt).format("MMM YYYY")}{" "}
                    -{" "}
                    {item.endedAt
                      ? moment(item.endedAt).format("MMM YYYY")
                      : "Present"}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.section_title}>Languages</Text>
            <View style={{ rowGap: 5 }}>
              {languages.map((item) => (
                <Text
                  key={item._id}
                  style={[styles.section_text, styles.bullet_point]}
                >
                  •{"  "}
                  {item.title}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template2;
