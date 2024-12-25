/* eslint-disable jsx-a11y/alt-text */
import {
  formatUrl,
  getDateRange,
  getSkillPercentage,
  isValidImageUrl,
  splitByLineBreaks,
} from "@/helpers/resume";
import { TemplateProps } from "@/types/template";
import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import { createStyles } from "./theme";

const Template = (props: TemplateProps) => {
  const { data, colors, fontFamily, fontSizes } = props;
  const {
    skills,
    contact,
    educations,
    experiences,
    languages,
    profile,
    projects,
    socials,
  } = data;
  const styles = createStyles(colors, fontSizes, fontFamily);

  const renderProjects = projects.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Projects</Text>

      <View style={styles.projects}>
        {projects.map((item) => (
          <View key={item._id}>
            <View style={styles.project_header}>
              <Text style={styles.project_title}>{item.name}</Text>
              <View style={styles.project_links}>
                {item.caseStudyUrl && (
                  <>
                    <Link style={styles.project_link} href={item.caseStudyUrl}>
                      Learn More
                    </Link>
                    <Text style={styles.project_divider}>|</Text>
                  </>
                )}
                {item.previewUrl && (
                  <>
                    <Link style={styles.project_link} href={item.previewUrl}>
                      Preview
                    </Link>
                    <Text style={styles.project_divider}>|</Text>
                  </>
                )}
                {item.sourceUrl && (
                  <Link style={styles.project_link} href={item.sourceUrl}>
                    Source
                  </Link>
                )}
              </View>
            </View>
            <Text style={styles.project_desc}>{item.description}</Text>
            <Text style={styles.project_tools}>
              Tools: {item.tools.join(", ")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderExperiences = experiences.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Experience</Text>

      <View style={styles.exps}>
        {experiences.map((item) => (
          <View key={item._id}>
            <View style={styles.exp_header}>
              <View>
                <Text style={styles.exp_company}>{item.companyName}</Text>
                <Text style={styles.exp_position}>{item.position}</Text>
              </View>
              <Text style={styles.exp_date}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </View>
            {splitByLineBreaks(item.description).map((line, index) => (
              <Text style={styles.exp_desc_point} key={index}>
                • {line}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );

  const renderEducations = educations.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Education</Text>
      <View style={styles.educations}>
        {educations.map((item) => (
          <View key={item._id}>
            <Text style={styles.educations_institute}>
              {item.instituteName}
            </Text>
            <View style={styles.educations_body}>
              <Text style={styles.educations_subject}>{item.subject}</Text>

              <Text style={styles.educations_date}>
                {getDateRange(item.startedAt, item.endedAt)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderContacts = contact && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Contacts</Text>

      {contact.address && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Address</Text>
          {contact.address_link ? (
            <Link style={styles.contact_text} href={contact.address_link}>
              {contact?.address}
            </Link>
          ) : (
            <Text style={styles.contact_text}>{contact?.address}</Text>
          )}
        </View>
      )}

      {contact.phone && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Phone</Text>
          <Link style={styles.contact_text} href={`tel:${contact.phone}`}>
            {contact.phone}
          </Link>
        </View>
      )}

      {contact.email && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Email</Text>
          <Link style={styles.contact_text} href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
        </View>
      )}

      {contact.website && (
        <View style={styles.contact_item}>
          <Text style={styles.contact_label}>Website</Text>
          <Link style={styles.contact_text} href={contact.website}>
            {formatUrl(contact.website)}
          </Link>
        </View>
      )}
    </View>
  );

  const renderSocials = socials.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Socials</Text>

      <View style={styles.socials}>
        {socials.map((item) => (
          <Link key={item._id} href={item.url} style={styles.socials_item}>
            {item.title}
          </Link>
        ))}
      </View>
    </View>
  );

  const renderLanguages = languages.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Languages</Text>

      <View style={styles.languages}>
        {languages.map((item) => (
          <View key={item._id} style={styles.language_item}>
            <Text style={styles.language_title}>{item.title}</Text>
            <Text style={styles.language_experience}>-</Text>
            <Text style={styles.language_experience}>{item.experience}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderSkills = skills.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.section_title}>Skills</Text>

      <View style={styles.skills}>
        {skills.map((item) => (
          <View key={item._id}>
            <Text style={styles.skill_title}>{item.title}</Text>
            <View style={styles.skill_bar}>
              <View
                style={[
                  styles.skill_progress,
                  {
                    width: `${getSkillPercentage(item.experience)}%`,
                  },
                ]}
              />
            </View>
          </View>
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
            <Image src={profile.avatar} style={styles.avatar} />
          )}
          <View style={styles.header_content}>
            <Text style={styles.title}>{profile.name}</Text>
            <Text style={styles.subtitle}>{profile.profession}</Text>
          </View>
        </View>

        <View style={styles.main}>
          {/* Left Column */}
          <View style={styles.left_column}>
            <View style={styles.section}>
              <Text style={styles.section_title}>Profile</Text>
              <Text style={styles.paragraph}>{profile.bio}</Text>
            </View>

            {renderProjects}
            {renderExperiences}
            {renderEducations}
          </View>

          {/* Right Column */}
          <View style={styles.right_column}>
            {renderContacts}
            {renderSocials}
            {renderLanguages}
            {renderSkills}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Template;
