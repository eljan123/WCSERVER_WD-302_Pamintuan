<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <div class="contact-info">
      <img src="./images/profile_pic.jpg" alt="Eljan Joel Y. Pamintuan" class="profile-pic">
      <div class="details">
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Email:</strong> <a href="mailto:eypamintuan.work@gmail.com">eypamintuan.work@gmail.com</a></p>
        <p><strong>Phone:</strong> {{ phoneNumber }}</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/eypamintuan" target="_blank">https://github.com/eljan123</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact us?',
      name: 'Eljan Joel Y. Pamintuan',
      phoneNumber: '0961 754 5113'
    }
  }
}
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #e0f7fa, #57c7db);
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  margin: 30px auto;
  max-width: 600px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-pic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #42b983;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.details {
  font-size: 1.2rem;
  color: #555;
  text-align: left;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

strong {
  color: #42b983;
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #333;
}

@media (max-width: 768px) {
  .contact {
    padding: 20px;
    margin: 20px auto;
  }

  .details {
    padding: 15px;
  }
}
</style>
