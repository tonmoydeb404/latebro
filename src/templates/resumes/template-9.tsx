import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
// Font.register({
//   family: 'MaterialIcons',
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/fonts/MaterialIcons-Regular.ttf',
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 24,
    fontSize: 12,
  },
  aside: {
    width: "35%",
    paddingRight: 16,
    marginRight: 16,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  main: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  text: {
    marginTop: 4,
  },
  link: {
    color: "#0073b1",
    marginLeft: 4,
  },
  list: {
    marginLeft: 12,
  },
  listItem: {
    marginBottom: 4,
  },
});

// Create Document Component
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.aside}>
        {/* Name and Details */}
        <Text style={styles.header}>Jack William</Text>
        <Text style={styles.subHeader}>UNIVERSITY ACADEMIC</Text>
        <Text style={styles.text}>📞 (123) 456-7890</Text>
        <Text style={styles.text}>✉️ jackwilliam@email.com</Text>
        <Text style={styles.text}>📍 Seattle, WA</Text>
        <Text style={styles.text}>
          LinkedIn: <Text style={styles.link}>@Jackwilliam</Text>
        </Text>

        {/* Education */}
        <Text style={styles.sectionHeader}>EDUCATION</Text>
        <Text style={styles.text}>NAME | Year 20XX</Text>
        <Text style={styles.text}>Name of College or High School</Text>
        <Text style={styles.text}>City, State</Text>
        <Text style={styles.text}>NAME | Year 20XX</Text>
        <Text style={styles.text}>Name of College or High School</Text>
        <Text style={styles.text}>City, State</Text>

        {/* Skills */}
        <Text style={styles.sectionHeader}>SKILLS</Text>
        <View style={styles.list}>
          {[
            "Communication",
            "Problem Solving",
            "Leadership",
            "Time Management",
            "Decision Making",
            "Creativity",
            "Analytical",
            "Research",
            "Team Oriented",
            "Negotiation",
            "Public Speaking",
          ].map((skill, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {skill}
            </Text>
          ))}
        </View>

        {/* Awards */}
        <Text style={styles.sectionHeader}>AWARDS</Text>
        <Text style={styles.text}>MONTH 20XX</Text>
        <Text style={styles.text}>School | Location</Text>
        <Text style={styles.text}>Enter name of your award earned</Text>
        <Text style={styles.text}>MONTH 20XX</Text>
        <Text style={styles.text}>School | Location</Text>
        <Text style={styles.text}>Enter name of your award earned</Text>
      </View>

      <View style={styles.main}>
        {/* Career Objective */}
        <Text style={styles.sectionHeader}>CAREER OBJECTIVE</Text>
        <Text style={styles.text}>
          Your resume objective is a focused 2-3-sentence statement that
          demonstrates your interest and candidacy for the position you hope to
          land. As a student or entry-level candidate, you should consider
          writing an objective, tailoring it to each position you apply for.
          Take the time to write a compelling, custom objective.
        </Text>

        {/* Experience */}
        <Text style={styles.sectionHeader}>EXPERIENCE</Text>
        <Text style={styles.text}>Research Assistant</Text>
        <Text style={styles.text}>MONTH 20XX – PRESENT</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Focus on your contributions, not your responsibilities.
          </Text>
          <Text style={styles.listItem}>
            • Start your job description bullet points with active verbs.
          </Text>
        </View>
        <Text style={{ ...styles.text, marginTop: 12 }}>LAB Engineer</Text>
        <Text style={styles.text}>MONTH 20XX – MONTH 20XX</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Keep your bullet points descriptions at three lines or under.
          </Text>
          <Text style={styles.listItem}>
            • Write your job descriptions in the past tense, though you can
            write current experience in the present tense if you wish.
          </Text>
        </View>

        {/* Projects */}
        <Text style={styles.sectionHeader}>PROJECTS</Text>
        <Text style={styles.text}>Project Name</Text>
        <Text style={styles.text}>MONTH 20XX – PRESENT</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Focus on your contributions, not your responsibilities.
          </Text>
          <Text style={styles.listItem}>
            • Start your job description bullet points with active verbs.
          </Text>
          <Text style={styles.listItem}>
            • Designed and implemented work ticketing system.
          </Text>
        </View>
        <Text style={{ ...styles.text, marginTop: 12 }}>Project Name</Text>
        <Text style={styles.text}>MONTH 20XX – MONTH 20XX</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Keep your bullet points descriptions at three lines or under.
          </Text>
          <Text style={styles.listItem}>
            • Created nutrition and personal training plans for 30+ clients.
          </Text>
          <Text style={styles.listItem}>
            • Write your current experience in the present tense if you wish.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
