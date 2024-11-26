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
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 30,
    color: "#000",
  },
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: 20,
    textAlign: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 4,
  },
  listItem: {
    flexDirection: "column",
    marginBottom: 5,
  },
  links: {
    marginBottom: 20,
  },
  skillBar: {
    height: 4,
    borderRadius: 2,
    marginTop: 2,
    width: "100%",
    backgroundColor: "#ddd",
  },
  skillProgress: (percentage) => ({
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: "#536DFE",
  }),
});

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          src="https://tools-api.webcrumbs.org/image-placeholder/96/96/avatars/1"
        />
        <Text style={styles.title}>Rick Tang</Text>
        <Text style={styles.subtitle}>Product Designer</Text>
        <View style={styles.contact}>
          <Text>San Francisco, California</Text>
          <Text>|</Text>
          <Text>ricktang@gmail.com</Text>
          <Text>|</Text>
          <Text>(315) 802-8179</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        {[
          {
            company: "Uber",
            role: "Product Designer",
            date: "Mar 2015 - Present",
            tasks: [
              "Designed safety-focused experiences for Riders and Drivers",
              "Physical space problem solving and its interaction with the digital",
              "Navigated organization to achieve operational improvements",
            ],
          },
          {
            company: "IFTTT",
            role: "Product Designer",
            date: "Dec 2013 - Mar 2015",
            tasks: [
              "Product and system design for a complex product",
              "Designed both consumer and developer products for IFTTT",
              "Responsible for maintaining design across iOS, Android, and web",
            ],
          },
          {
            company: "Facebook",
            role: "Product Designer",
            date: "June 2013 - Sep 2013",
            tasks: [
              "Designed and prototyped internal tools",
              "Worked with Privacy team to build assets and features",
              "Redesigned Newsfeed curation experience for mobile",
            ],
          },
          {
            company: "Google Maps",
            role: "UX/UI Design Intern",
            date: "June 2012 - Sep 2013",
            tasks: [
              "Contributed to Maps on iOS wireframe as a user experience",
              "Designed and prototyped onboarding experience",
              "Asset and feature design for Maps on Android",
            ],
          },
        ].map(({ company, role, date, tasks }) => (
          <View key={company} style={styles.listItem}>
            <Text style={{ fontWeight: "bold" }}>{company}</Text>
            <Text>{role}</Text>
            <Text style={{ fontSize: 9 }}>{date}</Text>
            {tasks.map((task, index) => (
              <Text key={index} style={styles.text}>
                • {task}
              </Text>
            ))}
          </View>
        ))}
      </View>
      <View>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <Text style={styles.text}>
          Rhode Island School of Design - BFA Industrial Design, Class of 2013
        </Text>
        <Text style={styles.text}>
          Brown University - Interdisciplinary Studies, Sep 2010 - May 2013
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LINKS</Text>
        <View style={styles.links}>
          <Text>LinkedIn</Text>
          <Text>Dribbble</Text>
          <Text>Behance</Text>
        </View>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        {[
          { label: "Figma", percentage: 80 },
          { label: "Sketch", percentage: 70 },
          { label: "Adobe Photoshop", percentage: 60 },
          { label: "Adobe Illustrator", percentage: 50 },
          { label: "Principle", percentage: 40 },
          { label: "Adobe XD", percentage: 30 },
        ].map(({ label, percentage }) => (
          <View key={label} style={{ marginBottom: 10 }}>
            <Text style={styles.text}>
              {label}: {percentage}%
            </Text>
            <View style={styles.skillBar}>
              <View style={styles.skillProgress(percentage)}></View>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>LANGUAGES</Text>
        <Text style={styles.text}>English</Text>
        <Text style={styles.text}>Italian</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
