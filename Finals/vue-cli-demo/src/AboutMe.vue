<!--
  Name: Pamintuan, Eljan Joel Y.
  Section: WD-302
-->
<template>
  <div id="resume">
    <div class="container">
      <div class="flex-layout">
        <!-- Profile Section (Left) -->
        <div class="profile-section section-box">
          <img src="./assets/profile_pic.jpg" alt="Profile Picture" class="profile-img"/>
          <h1>{{ fullName }}</h1>
          <p class="contact"><strong>Contact:</strong> {{ contactNumber }} <br> </p>
          <p><strong>Email:</strong> <a :href="`mailto:${email}`">{{ email }}</a></p>
          <p class="address"><strong>Address:</strong> {{ address }}</p>
          <p class="github"><strong>GitHub:</strong> <a :href="github" target="_blank">{{ github }}</a></p>
        </div>

        <!-- Right side content -->
        <div class="right-content">
          <!-- Expertise Section -->
          <div class="section-box expertise-section">
            <h2>Expertise</h2>
            <ul>
              <li v-for="expertise in expertiseList" :key="expertise">{{ expertise }}</li>
            </ul>
          </div>

          <!-- Languages Section -->
          <div class="section-box languages-section">
            <h2>My Languages</h2>
            <ul>
              <li v-for="language in languagesList" :key="language">{{ language }}</li>
            </ul>
          </div>

          <!-- Education Section -->
          <div class="section-box education-section">
            <h2>Education</h2>
            <p>
              <li v-for="education in education" :key="education">{{ education }}</li>
            </p>
          </div>

          <!-- Skills Section -->
          <div class="section-box skills-section">
            <h2>Skills</h2>
            <div class="skills">
              <div class="skill-group">
                <h3>Technical Skills</h3>
                <ul>
                  <li v-for="skill in technicalSkills" :key="skill">{{ skill }}</li>
                </ul>
              </div>
              <div class="skill-group">
                <h3>Personal Skills</h3>
                <ul>
                  <li v-for="skill in personalSkills" :key="skill">{{ skill }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Personal and School Projects -->
          <div class="section-box projects-section">
            <h2>Personal and School Projects</h2>
            <div class="project">
              <h3>Developed a Beauty Products Website - ShopOhBeauty</h3>
              <p>Front-end | Dec 2022 - Jan 2023</p>
              <p>
                Built a responsive e-commerce website for beauty products using HTML, SASS, and JavaScript, without a database. The website includes product listings, a search bar, an 'Add to Cart' feature, and a dynamic shopping cart. Ensured seamless performance and user-friendly design across desktop and mobile views.
              </p>
            </div>

            <div class="project">
              <h3>Developed a Cat Café Website - CAFE WHISKERS</h3>
              <p>Front-end, Back-end | Dec 2023 - Mar 2024</p>
              <p>
                Collaborated on a group project to build a fully functional cat café website using PHP, HTML, CSS, JavaScript, and a database (MySQL). The website features customer reservations, product listings, and interactive elements to enhance user experience. Ensured efficient database integration for managing bookings and inventory, while maintaining a responsive design for both desktop and mobile platforms.
              </p>
            </div>

            <div class="project">
              <h3>Developed a Beauty and Accessories Website - StarLush</h3>
              <p>UI Designer, Front-end, Back-end | Sept 2024 - Present</p>
              <p>
                Collaborated on a group project to build a beauty and accessories website using HTML, SCSS, JavaScript, Node.js, and MongoDB. The site features product listings, shopping cart functionality, and a fully integrated database for managing user data and orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      fullName: 'Eljan Joel Y. Pamintuan',
      contactNumber: '0961 754 5113',
      email: 'eypamintuan.work@gmail.com',
      github: 'https://github.com/eljan123',
      address: 'Angeles City, Pampanga',
      expertiseList: ['Front-end', 'Back-end', 'UI-UX'],
      languagesList: ['Node.js', 'Sass', 'CSS', 'JavaScript', 'HTML'],
      education: [
        'Bachelor of Science in Information Technology, Holy Angel University', 
        'Graduate Senior High School With High Honors [Grade 11 and 12]', 
        'Graduate Junior High School', 'Graduate Elementary'
      ],
      technicalSkills: ['Web Development', 'API Integration', 'Database Management'],
      personalSkills: ['Problem Solving', 'Team Collaboration', 'Adaptability']
    }
  }
}
</script>

<style scoped>
/* Container Styling */
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Flexbox layout */
.flex-layout {
  display: flex;
  gap: 30px;
}

/* Profile Section on the left */
.profile-section {
  flex: 1;
  max-width: 300px;
  max-height: 500px;
  text-align: center;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #0073e6;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
  font-weight: 700;
}

.contact, .github {
  font-size: 1.2rem;
}

.contact a, .github a {
  color: #0073e6;
  font-weight: bold;
  text-decoration: none;
}

.contact a:hover, .github a:hover {
  text-decoration: underline;
}

/* Right-side content */
.right-content {
  flex: 2;
}

/* Box style for sections */
.section-box {
  background-color: white;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.section-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

/* Section Headers */
h2 {
  color: #0073e6;
  font-size: 1.8rem;
  margin-bottom: 15px;
  border-bottom: 2px solid #0073e6;
  padding-bottom: 10px;
}

/* List Styling */
ul {
  padding: 0;
}

li {
  font-size: 1.2rem;
  margin: 8px 0;
  color: #555;
}

/* Skills Section */
.skills {
  display: flex;
  justify-content: space-between;
}

.skill-group {
  width: 45%;
}

h3 {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: bold;
}

/* Projects Section */
.project {
  margin-bottom: 20px;
}

.project h3 {
  font-size: 1.5rem;
  color: #0073e6;
  margin-bottom: 5px;
}

.project p {
  margin: 5px 0;
  color: #555;
}

/* Add subtle transitions */
a, li, h1, h2, h3, p {
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
}

a:hover, li:hover {
  color: #005bb5;
}
</style>
