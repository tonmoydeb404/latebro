/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Font,
  Image,
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
    backgroundImage: "linear-gradient(to bottom right, white 60%, #E3F2FF)",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: "#666666",
  },
  mainContent: {
    flexDirection: "row",
    gap: 40,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
  },
  paragraph: {
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
    marginBottom: 2,
  },
  dateRange: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 4,
  },
  bulletPoint: {
    fontSize: 12,
    marginBottom: 2,
    paddingLeft: 10,
  },
  detailItem: {
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 2,
  },
  detailText: {
    fontSize: 12,
  },
  skillBar: {
    height: 2,
    backgroundColor: "#E0E0E0",
    marginTop: 4,
    marginBottom: 8,
  },
  link: {
    fontSize: 12,
    color: "#333333",
    marginBottom: 6,
    textDecoration: "none",
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          src="/placeholder.svg?height=60&width=60"
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>Rick Tang</Text>
          <Text style={styles.title}>Product Designer</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text style={styles.paragraph}>
              I&apos;m a product designer focused on ensuring great user
              experience and meeting business needs of designed products.
              I&apos;m also experienced in implementing marketing strategies and
              developing both on and offline campaigns. My philosophy is to make
              products understandable, useful and long-lasting at the same time
              recognizing they&apos;re never finished and constantly changing.
              I&apos;m always excited to face new challenges and problems.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>

            <View style={styles.experienceItem}>
              <Text style={styles.companyName}>Uber</Text>
              <Text style={styles.jobTitle}>Product Designer</Text>
              <Text style={styles.dateRange}>Mar 2015 - Present</Text>
              <Text style={styles.bulletPoint}>
                • Designed safety-focused experiences for Riders and Drivers
              </Text>
              <Text style={styles.bulletPoint}>
                • Physical space problem solving and it&apos;s interaction with
                the digital
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
                • Responsible for maintaining design across iOS, Android, and
                web
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

            <View style={styles.experienceItem}>
              <Text style={styles.companyName}>Google Maps</Text>
              <Text style={styles.jobTitle}>UX/UI Design Intern</Text>
              <Text style={styles.dateRange}>June 2012 - Sep 2013</Text>
              <Text style={styles.bulletPoint}>
                • Contributed to Maps on iOS wireframe and user experience
              </Text>
              <Text style={styles.bulletPoint}>
                • Designed and prototyped onboarding experience
              </Text>
              <Text style={styles.bulletPoint}>
                • Asset and feature design for Maps on Android
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.experienceItem}>
              <Text style={styles.companyName}>Brown University</Text>
              <Text style={styles.dateRange}>
                Interdisciplinary Studies, Sep 2010 - May 2013
              </Text>
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Address</Text>
              <Text style={styles.detailText}>San Francisco, California</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Phone</Text>
              <Text style={styles.detailText}>(315) 802-8179</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Email</Text>
              <Text style={styles.detailText}>ricktang@gmail.com</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Links</Text>
            <Text style={styles.link}>LinkedIn</Text>
            <Text style={styles.link}>Dribbble</Text>
            <Text style={styles.link}>Behance</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Figma</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "90%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Sketch</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "85%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Adobe Photoshop</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "80%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Adobe Illustrator</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "75%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Principle</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "70%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailText}>Adobe XD</Text>
              <View style={styles.skillBar}>
                <View
                  style={[
                    styles.skillBar,
                    { width: "65%", backgroundColor: "#333" },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
