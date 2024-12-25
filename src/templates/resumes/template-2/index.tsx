/* eslint-disable jsx-a11y/alt-text */
import {
  getSkillPercentage,
  isValidImageUrl,
  splitByLineBreaks,
} from "@/helpers/resume";
import { TemplateProps } from "@/types/template";
import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import moment from "moment";
import { createStyles } from "./theme";

const Template2 = (props: TemplateProps) => {
  const { data, colors, fontFamily, fontSizes } = props;
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
  const styles = createStyles(colors, fontSizes, fontFamily);

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
