/* eslint-disable jsx-a11y/alt-text */
import {
  getDateRange,
  isValidImageUrl,
  splitByLineBreaks,
} from "@/helpers/resume";
import { registerInter } from "@/lib/react-pdf/fonts";
import { TemplateProps } from "@/types/template";
import {
  Document,
  Image,
  Link,
  Page,
  Path,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";

// Register fonts
registerInter();

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#FFFFFF",
    fontFamily: "Inter",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 20,
  },

  icon: {
    width: 12,
    height: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  section_title: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionNumber: {
    marginRight: 5,
    color: "#666666",
  },
  sectionContent: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "#333333",
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyName: {
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 2,
  },
  dateRange: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 12,
    marginBottom: 2,
    color: "#333333",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillPill: {
    backgroundColor: "#F3F3F3",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    fontSize: 10,
    color: "#000",
    textDecoration: "none",
  },
  languageItem: {
    flexDirection: "row",
    fontSize: 12,
    marginBottom: 2,
  },
  languageLevel: {
    color: "#666666",
    marginLeft: 4,
  },
  linksContainer: {
    flexDirection: "row",
    gap: 8,
    fontSize: 12,
  },
  linkSeparator: {
    color: "#666666",
  },

  // Contacts ----------------------------------------------------------------------
  contacts: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  contact_item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  contact_link: {
    fontSize: 10,
    color: "#666666",
    textDecoration: "none",
  },
});

const Template = (props: TemplateProps) => {
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

  const renderProfile = (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>01</Text>
        <Text>PROFILE</Text>
      </View>
      <Text style={styles.sectionContent}>{profile.bio}</Text>
    </View>
  );

  const renderContacts = (
    <View style={styles.contacts}>
      {contact.address && (
        <View style={styles.contact_item}>
          <AddressIcon />
          {contact.address_link ? (
            <Link style={styles.contact_link} href={contact.address_link}>
              {contact?.address}
            </Link>
          ) : (
            <Text style={styles.contact_link}>{contact?.address}</Text>
          )}
        </View>
      )}
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}
      >
        {contact.phone && (
          <View style={styles.contact_item}>
            <PhoneIcon />
            <Link style={styles.contact_link} href={`tel:${contact.phone}`}>
              {contact.phone}
            </Link>
          </View>
        )}

        {contact.email && (
          <View style={styles.contact_item}>
            <EmailIcon />
            <Link style={styles.contact_link} href={`mailto:${contact.email}`}>
              {contact.email}
            </Link>
          </View>
        )}
      </View>
    </View>
  );

  const renderExperiences = experiences.length > 0 && (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>02</Text>
        <Text>EXPERIENCE</Text>
      </View>

      {experiences.map((item, index) => (
        <View style={styles.experienceItem} key={item._id}>
          <Text style={styles.companyName}>{item.companyName}</Text>
          <Text style={styles.jobTitle}>{item.position}</Text>
          <Text style={styles.dateRange}>
            {getDateRange(item.startedAt, item.endedAt)}
          </Text>
          {splitByLineBreaks(item.description).map((line, i) => (
            <Text key={i} style={styles.bulletPoint}>
              • {line}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );

  const renderEducations = educations.length > 0 && (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>03</Text>
        <Text>EDUCATION</Text>
      </View>
      {educations.map((item, index) => (
        <View style={styles.experienceItem} key={item._id}>
          <Text style={styles.companyName}>{item.instituteName}</Text>
          <Text style={styles.dateRange}>
            {item.subject}, {getDateRange(item.startedAt, item.endedAt)}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderSkills = skills.length > 0 && (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>04</Text>
        <Text>SKILLS</Text>
      </View>
      <View style={styles.skillsContainer}>
        {skills.map((item) => (
          <Text style={styles.skillPill} key={item._id}>
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );

  const renderLanguages = languages.length > 0 && (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>05</Text>
        <Text>LANGUAGES</Text>
      </View>
      <View style={styles.skillsContainer}>
        {languages.map((item) => (
          <Text style={styles.skillPill} key={item._id}>
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );

  const renderSocials = socials.length > 0 && (
    <View style={styles.section}>
      <View style={styles.section_title}>
        <Text style={styles.sectionNumber}>06</Text>
        <Text>LINKS</Text>
      </View>
      <View style={styles.skillsContainer}>
        {socials.map((item) => (
          <Link style={styles.skillPill} href={item.url} key={item._id}>
            {item.title}
          </Link>
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
            <Image src={profile.avatar} style={styles.profileImage} />
          )}
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.profession}</Text>
        </View>

        {renderContacts}

        <View style={styles.divider} />

        {renderProfile}
        {renderExperiences}
        {renderEducations}
        {renderSkills}
        {renderLanguages}
        {renderSocials}
      </Page>
    </Document>
  );
};

export default Template;

// ----------------------------------------------------------------------

const AddressIcon = () => {
  return (
    <Svg width={12} viewBox="0 0 24 24">
      <Path
        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmailIcon = () => {
  return (
    <Svg width={12} viewBox="0 0 24 24">
      <Path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PhoneIcon = () => {
  return (
    <Svg width={11} viewBox="0 0 24 24">
      <Path
        d="M5.11596 12.7268L8.15456 9.08666C8.46255 8.69067 8.61655 8.49267 8.69726 8.27061C8.76867 8.07411 8.79821 7.86486 8.784 7.65628C8.76793 7.42055 8.67477 7.18766 8.48846 6.72187L7.77776 4.94513C7.50204 4.25581 7.36417 3.91116 7.12635 3.68525C6.91678 3.48618 6.65417 3.3519 6.37009 3.29856C6.0477 3.23803 5.68758 3.32806 4.96733 3.50812L3 4.00002C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3122 20.7617 17.952 20.7012 17.6297C20.6478 17.3456 20.5136 17.083 20.3145 16.8734C20.0886 16.6356 19.7439 16.4977 19.0546 16.222L17.4691 15.5878C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4002C15.4877 15.512 15.2854 15.7144 14.8807 16.1191L11.7943 19.1569"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
