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
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#1B4D3E",
    padding: 20,
    color: "white",
  },
  main: {
    width: "70%",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
  },
  jobTitle: {
    fontSize: 14,
    color: "#E0E0E0",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
    marginTop: 20,
  },
  sectionTitleSidebar: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10,
    marginTop: 20,
    color: "white",
  },
  detailLabel: {
    fontSize: 12,
    color: "#E0E0E0",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 12,
    color: "white",
    marginBottom: 10,
  },
  skillBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    marginBottom: 10,
  },
  skillFill: {
    height: "100%",
    backgroundColor: "white",
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 5,
  },
  jobDetails: {
    fontSize: 12,
    marginBottom: 5,
    color: "#666666",
  },
  bulletPoint: {
    fontSize: 12,
    marginBottom: 3,
    paddingLeft: 10,
  },
});

const Template2 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          src="https://media.graphassets.com/Fn8oPxB9Sja74IDWxqtO"
          style={styles.profileImage}
        />
        <Text style={styles.name}>Rick Tang</Text>
        <Text style={styles.jobTitle}>Product Designer</Text>

        <Text style={styles.sectionTitleSidebar}>Details</Text>
        <Text style={styles.detailLabel}>Address</Text>
        <Text style={styles.detailText}>San Francisco, California</Text>

        <Text style={styles.detailLabel}>Phone</Text>
        <Text style={styles.detailText}>(315) 802-8179</Text>

        <Text style={styles.detailLabel}>Email</Text>
        <Text style={styles.detailText}>ricktang@gmail.com</Text>

        <Text style={styles.sectionTitleSidebar}>Links</Text>
        <Text style={styles.detailText}>LinkedIn</Text>
        <Text style={styles.detailText}>Dribbble</Text>
        <Text style={styles.detailText}>Behance</Text>

        <Text style={styles.sectionTitleSidebar}>Skills</Text>
        <Text style={styles.detailText}>Figma</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "90%" }]} />
        </View>

        <Text style={styles.detailText}>Sketch</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "85%" }]} />
        </View>

        <Text style={styles.detailText}>Adobe Photoshop</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "80%" }]} />
        </View>

        <Text style={styles.detailText}>Adobe Illustrator</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "75%" }]} />
        </View>

        <Text style={styles.detailText}>Principle</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "70%" }]} />
        </View>

        <Text style={styles.detailText}>Adobe XD</Text>
        <View style={styles.skillBar}>
          <View style={[styles.skillFill, { width: "65%" }]} />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <View>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.bulletPoint}>
            I&apos;m a product designer focused on ensuring great user
            experience and meeting business needs of designed products. I&apos;m
            also experienced in implementing marketing strategy and developing
            both on and offline campaigns. My philosophy is to make products
            understandable, useful and long lasting at the same time recognizing
            they&apos;re never finished and constantly changing. I&apos;m always
            excited to face new challenges and problems.
          </Text>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Experience</Text>

          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Uber</Text>
            <Text style={styles.jobDetails}>Product Designer</Text>
            <Text style={styles.jobDetails}>Mar 2015 - Present</Text>
            <Text style={styles.bulletPoint}>
              • Designed safety-focused experiences for Riders and Drivers
            </Text>
            <Text style={styles.bulletPoint}>
              • Physical space problem solving and it&apos;s interaction with
              the digital
            </Text>
            <Text style={styles.bulletPoint}>
              • Integrated organization to achieve operational improvements
            </Text>
          </View>

          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>IFTTT</Text>
            <Text style={styles.jobDetails}>Product Designer</Text>
            <Text style={styles.jobDetails}>Dec 2013 - Mar 2015</Text>
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
            <Text style={styles.jobDetails}>Product Designer</Text>
            <Text style={styles.jobDetails}>June 2013 - Sep 2013</Text>
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
            <Text style={styles.jobDetails}>UX/UI Design Intern</Text>
            <Text style={styles.jobDetails}>June 2012 - Sep 2013</Text>
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

        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.companyName}>Brown University</Text>
          <Text style={styles.jobDetails}>
            Interdisciplinary Studies, Sep 2010 - May 2013
          </Text>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.bulletPoint}>English</Text>
          <Text style={styles.bulletPoint}>Italian</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template2;
