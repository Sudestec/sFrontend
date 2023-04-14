import { lazy } from 'solid-js';
const Header = lazy(() => import('./Header'));

function Main() {

  return (
    <main class='container'>
      <article>
        <Header/>
        <p>At Sudestec, we take great pride in providing authentic and reliable computer repair services and solutions to our clients. We are committed to delivering the highest level of quality and professionalism in all of our services.</p>
        <p>Our team of expert technicians is highly trained and experienced in handling various computer-related issues, from hardware repairs to software troubleshooting. We use only genuine parts and software, ensuring that your devices are always in top condition and free from counterfeit components.</p>
        <p>Moreover, we take copyright laws seriously and respect the intellectual property rights of others. We guarantee that all software and solutions we provide are legitimate and licensed, ensuring that you are not exposed to any legal issues that may arise from using pirated or unauthorized software.</p>
        <p>At Sudestec, we stand behind the quality of our services and solutions. We are confident that you will be satisfied with the work we do and the products we provide. We are committed to maintaining our reputation as a trusted and reliable provider of computer repair services and solutions.</p>
      </article>
    </main>
  );
}

export default Main;