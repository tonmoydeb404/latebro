import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2",
      fontWeight: 600,
    },
  ],
});

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
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    fontSize: 10,
    color: "#666666",
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
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
  sectionTitle: {
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
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          src="/placeholder.svg?height=80&width=80"
          style={styles.profileImage}
        /> */}
        <Text style={styles.name}>Rick Tang</Text>
        <Text style={styles.title}>Product Designer</Text>
      </View>

      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          {/* <Image
            src="/placeholder.svg?height=12&width=12"
            style={styles.icon}
          /> */}
          <Text>San Francisco, California</Text>
        </View>
        <View style={styles.contactItem}>
          {/* <Image
            src="/placeholder.svg?height=12&width=12"
            style={styles.icon}
          /> */}
          <Text>ricktang@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          {/* <Image
            src="/placeholder.svg?height=12&width=12"
            style={styles.icon}
          /> */}
          <Text>(315) 802-8179</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Profile */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>01</Text>
          <Text>PROFILE</Text>
        </View>
        <Text style={styles.sectionContent}>
          UX/UI specialist focused on designing clean and functional projects
          across all platforms and devices in response to specific briefs and
          problems, while always maintaining a unique look and feel.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>02</Text>
          <Text>EXPERIENCE</Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.companyName}>Uber</Text>
          <Text style={styles.jobTitle}>Product Designer</Text>
          <Text style={styles.dateRange}>Mar 2015 - Present</Text>
          <Text style={styles.bulletPoint}>
            • Designed safety-focused experiences for Riders and Drivers
          </Text>
          <Text style={styles.bulletPoint}>
            • Physical space problem solving and it&apos;s interaction with the
            digital
          </Text>
          <Text style={styles.bulletPoint}>
            • Navigated organization to achieve operational improvements
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.companyName}>IFTTT</Text>
          <Text style={styles.jobTitle}>Product Designer</Text>
          <Text style={styles.dateRange}>Dec 2013 - Mar 2015</Text>
          <Text style={styles.bulletPoint}>
            • Product and system design for a complex product
          </Text>
          <Text style={styles.bulletPoint}>
            • Designed both consumer and developer products for IFTTT
          </Text>
          <Text style={styles.bulletPoint}>
            • Responsible for maintaining design across iOS, Android, and web
          </Text>
        </View>

        <View style={styles.experienceItem}>
          <Text style={styles.companyName}>Facebook</Text>
          <Text style={styles.jobTitle}>Product Designer</Text>
          <Text style={styles.dateRange}>June 2013 - Sep 2013</Text>
          <Text style={styles.bulletPoint}>
            • Designer and prototyped internal tools
          </Text>
          <Text style={styles.bulletPoint}>
            • Worked with Privacy team to build assets and features
          </Text>
          <Text style={styles.bulletPoint}>
            • Redesigned NewsFeed curation experience for mobile
          </Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>03</Text>
          <Text>EDUCATION</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.companyName}>Brown University</Text>
          <Text style={styles.dateRange}>
            Interdisciplinary Studies, Sep 2010 - May 2013
          </Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>04</Text>
          <Text>SKILLS</Text>
        </View>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillPill}>Figma</Text>
          <Text style={styles.skillPill}>Sketch</Text>
          <Text style={styles.skillPill}>Photoshop</Text>
          <Text style={styles.skillPill}>Illustrator</Text>
          <Text style={styles.skillPill}>Adobe XD</Text>
          <Text style={styles.skillPill}>Principle</Text>
        </View>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>05</Text>
          <Text>LANGUAGES</Text>
        </View>
        <View style={styles.languageItem}>
          <Text>English</Text>
          <Text style={styles.languageLevel}>C2</Text>
        </View>
        <View style={styles.languageItem}>
          <Text>Italian</Text>
          <Text style={styles.languageLevel}>B2</Text>
        </View>
      </View>

      {/* Links */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionNumber}>06</Text>
          <Text>LINKS</Text>
        </View>
        <View style={styles.linksContainer}>
          <Text>Behance</Text>
          <Text style={styles.linkSeparator}>|</Text>
          <Text>LinkedIn</Text>
          <Text style={styles.linkSeparator}>|</Text>
          <Text>Twitter</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
