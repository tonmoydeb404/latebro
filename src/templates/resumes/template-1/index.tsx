import { getDateRange } from "@/helpers/resume";
import { registerOpenSans } from "@/lib/react-pdf/fonts";
import type { Resume as Template } from "@/types/resume";
import { TemplateProps } from "@/types/template";
import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { createStyles } from "./theme";

registerOpenSans();

const Template = (props: TemplateProps) => {
  const { data, colors } = props;
  const { contact, profile } = data;
  const styles = createStyles(colors ?? undefined);

  const renderContacts = contact && (
    <View style={styles.section}>
      <Text style={styles.section_title}>DETAILS</Text>
      {contact?.address && (
        <View>
          <Text style={styles.contact_label}>Address:</Text>
          {contact?.address_link ? (
            <Link style={styles.contact_text} href={contact.address_link}>
              {contact?.address}
            </Link>
          ) : (
            <Text style={styles.contact_text}>{contact?.address}</Text>
          )}
        </View>
      )}

      {contact?.phone && (
        <View style={{ marginTop: 6 }}>
          <Text style={[styles.contact_label]}>Phone:</Text>
          <Link style={styles.contact_text} href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
        </View>
      )}

      {contact?.email && (
        <View style={{ marginTop: 6 }}>
          <Text style={[styles.contact_label]}>Email:</Text>
          <Link style={styles.contact_text} href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
        </View>
      )}
    </View>
  );

  const renderLinks = data.socials.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>LINKS</Text>
      <View style={styles.socials}>
        {data.socials?.map((item) => (
          <Link key={item._id} style={styles.socials_item} href={item.url}>
            {item.title}
          </Link>
        ))}
      </View>
    </View>
  );

  const renderSkills = data.skills.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>SKILLS</Text>

      <View style={styles.skills}>
        {data.skills?.map((item) => (
          <View style={styles.skills_item} key={item._id}>
            <Text style={styles.skills_label}>{item.title}</Text>
            <Text>-</Text>
            <Text style={styles.skills_exp}>{item.experience}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderLanguages = data.languages.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>LANGUAGES</Text>
      <View style={styles.languages}>
        {data.languages?.map((item) => (
          <View style={styles.languages_item} key={item._id}>
            <Text style={styles.languages_label}>{item.title}</Text>
            <Text>-</Text>
            <Text style={styles.languages_exp}>{item.experience}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderExperiences = data.experiences.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>EXPERIENCE</Text>

      <View style={styles.exps}>
        {data.experiences?.map((item) => (
          <View key={item._id}>
            <Text style={styles.exp_label}>{item.companyName}</Text>
            <View style={styles.exp_header}>
              <Text style={styles.exp_position}>{item.position}</Text>
              <Text style={styles.exp_divider}>|</Text>
              <Text style={styles.exp_period}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </View>
            <Text style={styles.exp_desc}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderProjects = data.projects.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>PROJECTS</Text>

      <View style={styles.projects}>
        {data.projects?.map((item) => (
          <View key={item._id}>
            <Text style={styles.projects_label}>{item.name}</Text>
            <View style={styles.projects_header}>
              {item.sourceUrl ? (
                <Link style={styles.projects_link} href={item.sourceUrl}>
                  Source
                </Link>
              ) : null}
              <Text style={styles.projects_divider}>|</Text>
              {item.previewUrl ? (
                <Link style={styles.projects_link} href={item.previewUrl}>
                  Preview
                </Link>
              ) : null}
              <Text style={styles.projects_divider}>|</Text>
              {item.caseStudyUrl ? (
                <Link style={styles.projects_link} href={item.caseStudyUrl}>
                  Case Study
                </Link>
              ) : null}
            </View>
            <Text style={styles.projects_desc}>{item.description}</Text>
            <Text style={styles.projects_tools}>{item.tools.join(", ")}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderEducations = data.educations.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>EDUCATION</Text>

      <View style={styles.edus}>
        {data.educations?.map((item) => (
          <View key={item._id}>
            <Text style={styles.edus_label}>{item.instituteName}</Text>
            <View style={styles.edus_header}>
              <Text style={styles.edus_subject}>{item.subject}</Text>
              <Text style={styles.edus_divider}>|</Text>
              <Text style={styles.edus_period}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.left_col}>
          <Text style={styles.heading}>{profile?.name}</Text>
          <Text style={styles.profession}>{profile?.profession}</Text>

          {renderContacts}
          {renderLinks}
          {renderSkills}
          {renderLanguages}
        </View>

        {/* Right Column */}
        <View style={styles.right_col}>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.section_title}>PROFILE</Text>
            <Text style={styles.contact_text}>{data.profile?.bio}</Text>
          </View>

          {renderExperiences}
          {renderProjects}
          {renderEducations}
        </View>
      </Page>
    </Document>
  );
};

export default Template;
