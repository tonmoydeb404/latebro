import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/roboto/400.ttf", fontWeight: 400 },
    { src: "/fonts/roboto/500.ttf", fontWeight: 500 },
    { src: "/fonts/roboto/700.ttf", fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Roboto",
    backgroundColor: "#ffffff",
  },
  container: {
    borderRadius: 8,
    padding: 20,
  },
  title: {
    color: "#1C1F4F",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6C63FF",
    marginBottom: 12,
  },
  section: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1C1F4F",
    marginBottom: 12,
  },
  detailsGroup: {
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C1F4F",
  },
  paragraph: {
    fontSize: 12,
    color: "#6C6C6C",
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 12,
    color: "#6C6C6C",
    marginBottom: 4,
  },
  skillsLinks: {
    flexDirection: "column",
    marginTop: 16,
  },
  link: {
    fontSize: 12,
    color: "#6C63FF",
    marginBottom: 8,
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.title}>Rick Tang</Text>
            <Text style={styles.subtitle}>Product Designer</Text>
            <Text style={styles.paragraph}>
              UX/UI specialist focused on designing clean and functional
              projects across all platforms and devices in response to specific
              briefs and problems, while always maintaining a unique look and
              feel.
            </Text>
          </View>
          <View>
            <Text style={styles.detailsTitle}>Details</Text>
            <View style={styles.detailsGroup}>
              <Text style={styles.paragraph}>Address</Text>
              <Text style={styles.paragraph}>San Francisco, California</Text>
            </View>
            <View style={styles.detailsGroup}>
              <Text style={styles.paragraph}>Phone</Text>
              <Text style={styles.paragraph}>(315) 802-8179</Text>
            </View>
            <View style={styles.detailsGroup}>
              <Text style={styles.paragraph}>Email</Text>
              <Text style={{ ...styles.paragraph, color: "#6C63FF" }}>
                ricktang@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.detailsTitle}>Uber</Text>
            <Text style={styles.paragraph}>Product Designer</Text>
            <Text style={styles.paragraph}>Mar 2015 - Present</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Designed safety-focused experiences for Riders and Drivers
              </Text>
              <Text style={styles.listItem}>
                Physical space problem solving and its interaction with the
                digital
              </Text>
              <Text style={styles.listItem}>
                Navigated organization to achieve operational improvements
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.detailsTitle}>IFTTT</Text>
            <Text style={styles.paragraph}>Product Designer</Text>
            <Text style={styles.paragraph}>Dec 2013 - Mar 2015</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Product and system design for a complex product
              </Text>
              <Text style={styles.listItem}>
                Designed both consumer and developer products for IFTTT
              </Text>
              <Text style={styles.listItem}>
                Responsible for maintaining design across iOS, Android, and web
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.detailsTitle}>Facebook</Text>
            <Text style={styles.paragraph}>Product Designer</Text>
            <Text style={styles.paragraph}>June 2013 - Sep 2013</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                Designed and prototyped internal tools
              </Text>
              <Text style={styles.listItem}>
                Worked with Privacy team to build assets and features
              </Text>
              <Text style={styles.listItem}>
                Redesigned Newsfeed curation experience for mobile
              </Text>
            </View>
          </View>
        </View>

        {/* Skills & Links */}
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsLinks}>
              <Text style={styles.listItem}>Figma</Text>
              <Text style={styles.listItem}>Sketch</Text>
              <Text style={styles.listItem}>Adobe Photoshop</Text>
              <Text style={styles.listItem}>Adobe Illustrator</Text>
              <Text style={styles.listItem}>Principle</Text>
              <Text style={styles.listItem}>Adobe XD</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Links</Text>
            <View style={styles.skillsLinks}>
              <Link style={styles.link}>LinkedIn</Link>
              <Link style={styles.link}>Dribbble</Link>
              <Link style={styles.link}>Behance</Link>
            </View>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View>
            <Text style={styles.detailsTitle}>Brown University</Text>
            <Text style={styles.paragraph}>
              Interdisciplinary studies, Sep 2010 - May 2013
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;
