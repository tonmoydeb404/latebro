/* eslint-disable jsx-a11y/alt-text */
import {
  formatUrl,
  getDateRange,
  getSkillPercentage,
  isValidImageUrl,
  splitByLineBreaks,
} from "@/helpers/resume";
import { registerInter } from "@/lib/react-pdf/fonts";
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

// Register fonts
registerInter();

const FONT_SIZE = {
  xs: 10.5,
  sm: 11,
  md: 12,
  lg: 14,
  xl: 24,
};

const COLORS = {
  foreground: "#333333",
  secondary: "#666666",
  background: "#FFFFFF",
  muted: "#E0E0E0",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: COLORS.background,
    fontFamily: "Inter",
    fontWeight: "normal",
  },
  main: {
    flexDirection: "row",
    gap: 40,
  },
  left_column: {
    flex: 2,
  },
  right_column: {
    flex: 1,
  },
  // Header ----------------------------------------------------------------------
  header: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  header_content: {
    flex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 600,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.secondary,
  },
  // Section ----------------------------------------------------------------------
  section: {
    marginBottom: 20,
  },
  section_title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: FONT_SIZE.md,
    lineHeight: 1.5,
    color: COLORS.foreground,
  },

  // Project ----------------------------------------------------------------------
  projects: {
    rowGap: 15,
  },
  project_header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  project_title: {
    fontWeight: "medium",
    fontSize: FONT_SIZE.lg,
  },
  project_links: { marginLeft: "auto", flexDirection: "row" },
  project_link: { fontSize: FONT_SIZE.sm, textDecoration: "none" },
  project_divider: {
    fontSize: FONT_SIZE.sm,
    marginLeft: 5,
    marginRight: 5,
  },
  project_desc: { fontSize: FONT_SIZE.md, marginBottom: 8 },
  project_tools: {
    color: COLORS.secondary,
    fontSize: FONT_SIZE.xs,
    textTransform: "uppercase",
  },
  // Experience ----------------------------------------------------------------------
  exps: {
    rowGap: 15,
  },
  exp_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  exp_company: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 2,
  },
  exp_position: {
    fontSize: FONT_SIZE.md,
    marginBottom: 2,
  },
  exp_date: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.secondary,
  },
  exp_desc_point: {
    fontSize: FONT_SIZE.md,
    marginBottom: 2,
    paddingLeft: 10,
  },
  // Educations ----------------------------------------------------------------------
  educations: {
    rowGap: 15,
  },
  educations_institute: {
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 4,
  },
  educations_subject: {
    fontSize: FONT_SIZE.md,
  },
  educations_date: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.secondary,
  },
  // Contacts ----------------------------------------------------------------------
  contact_item: {
    marginBottom: 8,
  },
  contact_label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.secondary,
    marginBottom: 3,
  },
  contact_text: {
    fontSize: FONT_SIZE.md,
    color: "#000",
    textDecoration: "none",
  },

  // Socials ----------------------------------------------------------------------
  socials: {
    rowGap: 6,
  },
  socials_item: {
    fontSize: FONT_SIZE.md,
    color: COLORS.foreground,
    textDecoration: "none",
  },

  // Languages ----------------------------------------------------------------------
  languages: {
    rowGap: 8,
  },
  language_item: {
    flexDirection: "row",
    columnGap: 3,
    alignItems: "center",
  },
  language_title: {
    fontSize: FONT_SIZE.md,
  },
  language_experience: {
    fontSize: FONT_SIZE.sm,
    textTransform: "uppercase",
    color: COLORS.secondary,
  },

  // Skills ----------------------------------------------------------------------
  skills: {
    rowGap: 15,
  },
  skill_title: {
    fontSize: FONT_SIZE.sm,
    marginBottom: 4,
  },
  skill_bar: {
    backgroundColor: COLORS.muted,
    borderRadius: 2,
    overflow: "hidden",
  },
  skill_progress: {
    height: 3,
    backgroundColor: COLORS.foreground,
  },
});

type Props = { data: Resume };

const Template = (props: Props) => {
  const { data } = props;
  const {
    skills,
    contact,
    educations,
    experiences,
    languages,
    profile,
    projects,
    socials,
    title,
  } = data;

  const renderProjects = projects.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Projects</Text>

      <View style={styles.projects}>
        {projects.map((item) => (
          <View key={item._id}>
            <View style={styles.project_header}>
              <Text style={styles.project_title}>{item.name}</Text>
              <View style={styles.project_links}>
                {item.caseStudyUrl && (
                  <>
                    <Link style={styles.project_link} href={item.caseStudyUrl}>
                      Learn More
                    </Link>
                    <Text style={styles.project_divider}>|</Text>
                  </>
                )}
                {item.previewUrl && (
                  <>
                    <Link style={styles.project_link} href={item.previewUrl}>
                      Preview
                    </Link>
                    <Text style={styles.project_divider}>|</Text>
                  </>
                )}
                {item.sourceUrl && (
                  <Link style={styles.project_link} href={item.sourceUrl}>
                    Source
                  </Link>
                )}
              </View>
            </View>
            <Text style={styles.project_desc}>{item.description}</Text>
            <Text style={styles.project_tools}>
              Tools: {item.tools.join(", ")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderExperiences = experiences.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Experience</Text>

      <View style={styles.exps}>
        {experiences.map((item) => (
          <View key={item._id}>
            <View style={styles.exp_header}>
              <View>
                <Text style={styles.exp_company}>{item.companyName}</Text>
                <Text style={styles.exp_position}>{item.position}</Text>
              </View>
              <Text style={styles.exp_date}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </View>
            {splitByLineBreaks(item.description).map((line, index) => (
              <Text style={styles.exp_desc_point} key={index}>
                • {line}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );

  const renderEducations = educations.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Education</Text>
      <View style={styles.educations}>
        {educations.map((item) => (
          <View key={item._id}>
            <Text style={styles.educations_institute}>
              {item.instituteName}
            </Text>
            <Text style={styles.educations_subject}>
              {item.subject}
              {", "}
              <Text style={styles.educations_date}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderContacts = contact && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Contacts</Text>

      {contact.address && (
        <View style={styles.contact_item}>
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
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Phone</Text>
          <Link style={styles.contact_text} href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
        </View>
      )}

      {contact.email && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Email</Text>
          <Link style={styles.contact_text} href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
        </View>
      )}

      {contact.website && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Website</Text>
          <Link style={styles.contact_text} href={contact.website}>
            {formatUrl(contact.website)}
          </Link>
        </View>
      )}
    </View>
  );

  const renderSocials = socials.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Socials</Text>

      <View style={styles.socials}>
        {socials.map((item) => (
          <Link key={item._id} href={item.url} style={styles.socials_item}>
            {item.title}
          </Link>
        ))}
      </View>
    </View>
  );

  const renderLanguages = languages.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Languages</Text>

      <View style={styles.languages}>
        {languages.map((item) => (
          <View key={item._id} style={styles.language_item}>
            <Text style={styles.language_title}>{item.title}</Text>
            <Text style={styles.language_experience}>-</Text>
            <Text style={styles.language_experience}>{item.experience}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderSkills = skills.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Skills</Text>

      <View style={styles.skills}>
        {skills.map((item) => (
          <View key={item._id}>
            <Text style={styles.skill_title}>{item.title}</Text>
            <View style={styles.skill_bar}>
              <View
                style={[
                  styles.skill_progress,
                  {
                    width: `${getSkillPercentage(item.experience)}%`,
                  },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {isValidImageUrl(profile.avatar) && (
            <Image src={profile.avatar} style={styles.avatar} />
          )}
          <View style={styles.header_content}>
            <Text style={styles.title}>{profile.name}</Text>
            <Text style={styles.subtitle}>{profile.profession}</Text>
          </View>
        </View>

        <View style={styles.main}>
          {/* Left Column */}
          <View style={styles.left_column}>
            <View style={styles.section}>
              <Text style={styles.section_title}>Profile</Text>
              <Text style={styles.paragraph}>{profile.bio}</Text>
            </View>

            {renderProjects}
            {renderExperiences}
            {renderEducations}
          </View>

          {/* Right Column */}
          <View style={styles.right_column}>
            {renderContacts}
            {renderSocials}
            {renderLanguages}
            {renderSkills}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template;
