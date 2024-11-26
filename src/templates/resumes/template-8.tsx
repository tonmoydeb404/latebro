import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    padding: 40,
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subSectionHeading: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  contactInfo: {
    textAlign: "right",
  },
  skillList: {
    marginBottom: 20,
    lineHeight: 1.5,
  },
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sidebar: {
    width: "30%",
  },
  content: {
    width: "65%",
  },
  jobTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  jobDates: {
    marginBottom: 4,
    fontSize: 10,
    fontStyle: "italic",
  },
  listItem: {
    marginBottom: 4,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>LinkedIn | Dribbble | Behance</Text>
        <View style={styles.contactInfo}>
          <Text>San Francisco, California</Text>
          <Text>ricktang@gmail.com</Text>
          <Text>(315) 802-8179</Text>
        </View>
      </View>
      <Text style={styles.fullName}>RICK TANG</Text>
      <View style={styles.mainContent}>
        <View style={styles.sidebar}>
          <View>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.skillList}>
              <Text>Figma</Text>
              <Text>Sketch</Text>
              <Text>Photoshop</Text>
              <Text>Illustrator</Text>
              <Text>Adobe XD</Text>
              <Text>Principle</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <Text>English: C2</Text>
            <Text>Italian: B2</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.sectionTitle}>PRODUCT DESIGNER</Text>
            <Text>
              UX/UI specialist focused on designing clean and functional
              projects across all platforms and devices in response to specific
              briefs and problems, while always maintaining a unique look and
              feel.
            </Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>EMPLOYMENT HISTORY</Text>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.jobTitle}>Product Designer, Uber</Text>
              <Text style={styles.jobDates}>Mar 2015 - Present</Text>
              <Text style={styles.listItem}>
                • Designed safety-focused experiences for Riders and Drivers
              </Text>
              <Text style={styles.listItem}>
                • Physical space problem solving and its interaction with the
                digital
              </Text>
              <Text style={styles.listItem}>
                • Navigated organization to achieve operational improvements
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.jobTitle}>Product Designer, IFTTT</Text>
              <Text style={styles.jobDates}>Dec 2013 - Mar 2015</Text>
              <Text style={styles.listItem}>
                • Product and system design for a complex product
              </Text>
              <Text style={styles.listItem}>
                • Designed both consumer and developer products for IFTTT
              </Text>
              <Text style={styles.listItem}>
                • Responsible for maintaining design across iOS, Android, and
                web
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.jobTitle}>Product Designer, Facebook</Text>
              <Text style={styles.jobDates}>June 2013 - Sep 2013</Text>
              <Text style={styles.listItem}>
                • Designed and prototyped internal tools
              </Text>
              <Text style={styles.listItem}>
                • Worked with Privacy team to build assets and features
              </Text>
              <Text style={styles.listItem}>
                • Redesigned Newsfeed curation experience for mobile
              </Text>
            </View>
            <View>
              <Text style={styles.jobTitle}>
                UX/UI Design Intern, Google Maps
              </Text>
              <Text style={styles.jobDates}>June 2012 - Sep 2012</Text>
              <Text style={styles.listItem}>
                • Contributed to Maps on iOS wireframe as user experiences
              </Text>
              <Text style={styles.listItem}>
                • Designed and prototyped onboarding experience
              </Text>
              <Text style={styles.listItem}>
                • Asset and feature design for Maps on Android
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View>
              <Text style={styles.subSectionHeading}>
                Rhode Island School of Design
              </Text>
              <Text>BFA Industrial Design, Class of 2013</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.subSectionHeading}>Brown University</Text>
              <Text>Interdisciplinary studies, Sep 2010 - May 2013</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
