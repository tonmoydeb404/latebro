/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: "#333333",
  },
  subtitle: {
    fontSize: 10,
    color: "#555555",
    lineHeight: 1.6,
  },
  section: {
    marginTop: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#0078D4",
    fontWeight: 700,
    marginBottom: 8,
  },
  jobTitle: {
    fontWeight: 700,
    marginBottom: 4,
  },
  time: {
    color: "#666666",
    marginBottom: 4,
  },
  list: {
    marginLeft: 16,
    paddingLeft: 4,
    marginBottom: 4,
  },
  footer: {
    marginTop: 16,
    fontSize: 10,
    lineHeight: 1.6,
  },
  text: {
    color: "#333333",
    marginBottom: 4,
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          src="https://tools-api.webcrumbs.org/image-placeholder/150/150/avatars/1"
        />
        <View style={styles.headerText}>
          <Text style={styles.subtitle}>
            San Francisco, California {"\n"}
            (315) 802-8179 · ricktang@gmail.com
          </Text>
          <Text style={styles.name}>Rick Tang, Product Designer</Text>
          <Text style={{ marginTop: 8 }}>
            UX/UI specialist focused on designing clean and functional projects
            across all platforms and devices in response to specific briefs and
            problems, while always maintaining a unique look and feel.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        <View>
          <Text style={styles.jobTitle}>Product Designer, Uber</Text>
          <Text style={styles.time}>Mar 2015 – Present</Text>
          <View>
            <Text style={styles.list}>
              • Designed safety-focused experiences for Riders and Drivers
            </Text>
            <Text style={styles.list}>
              • Physical space problem solving and its interaction with the
              digital
            </Text>
            <Text style={styles.list}>
              • Navigated organization to achieve operational improvements
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.jobTitle}>Product Designer, IFTTT</Text>
          <Text style={styles.time}>Dec 2013 – Mar 2015</Text>
          <View>
            <Text style={styles.list}>
              • Product and system design for a complex product
            </Text>
            <Text style={styles.list}>
              • Designed both consumer and developer products for IFTTT
            </Text>
            <Text style={styles.list}>
              • Responsible for maintaining design across iOS, Android, and web
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Rhode Island School of Design</Text>
        <Text style={styles.time}>BFA Industrial Design, Class of 2013</Text>

        <Text style={[styles.jobTitle, { marginTop: 8 }]}>
          Brown University
        </Text>
        <Text style={styles.time}>
          Interdisciplinary studies, Sep 2010 – May 2013
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text>English: C2 | Italian: B2</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>
          Figma | Sketch | Photoshop | Illustrator | Adobe XD | Principle
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Links</Text>
        <Text>LinkedIn | Dribbble | Behance</Text>
      </View>
    </Page>
  </Document>
);

export default Resume;
