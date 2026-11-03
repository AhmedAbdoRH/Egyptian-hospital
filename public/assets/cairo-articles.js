(() => {
  const articles = [
    {
      title: 'Orthopedics & Arthroplasty',
      subtitle: 'Surgical care for bones and joints',
      intro: 'The hospital profile lists orthopedic services and a range of surgical procedures for musculoskeletal conditions.',
      bullets: ['Arthroplasty', 'Hand surgeries', 'Foot and ankle surgeries', 'External fixation and deformities'],
      note: 'The treating team confirms whether a procedure is suitable after an individual assessment.',
    },
    {
      title: 'Orthobiologics',
      subtitle: 'Regenerative options listed in the profile',
      intro: 'Cairo Hospital lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under its orthobiologics services.',
      bullets: ['Stem-cell regenerative therapy', 'Prolotherapy', 'Platelet-rich plasma (PRP)', 'Bone marrow aspirate concentrate (BMAC)'],
      note: 'These are clinical options, not guaranteed outcomes. Discuss suitability, evidence, alternatives, and risks with a qualified clinician.',
    },
    {
      title: 'BEMER Therapy',
      subtitle: 'Bio Electro Magnetic Energy Resonance',
      intro: 'BEMER therapy is listed in the hospital profile as Bio Electro Magnetic Energy Resonance Therapy.',
      bullets: ['Listed within the hospital’s orthobiologics services', 'Use and suitability should be discussed with the treating clinician'],
      note: 'This service should not replace an assessment or treatment recommended by a qualified medical professional.',
    },
    {
      title: 'Diabetic Foot Clinic',
      subtitle: 'Specialist assessment and foot care',
      intro: 'A Diabetic Foot Clinic is included in the hospital’s list of services.',
      bullets: ['Foot assessment', 'Clinical review of diabetic-foot concerns', 'Care plan and follow-up based on assessment'],
      note: 'New wounds, infection signs, or rapidly worsening symptoms need prompt medical attention.',
    },
    {
      title: 'Physical Therapy & Rehabilitation',
      subtitle: 'Care for neurological and musculoskeletal disorders',
      intro: 'The profile lists physical therapy with Dr. Bassam, including myofascial therapy, cupping, and acupuncture.',
      bullets: ['Physical therapy', 'Myofascial therapy', 'Cupping', 'Acupuncture'],
      note: 'The clinical team assesses the patient and confirms which approaches are appropriate.',
    },
    {
      title: 'Obstetrics & Gynaecology',
      subtitle: 'Women’s health consultations',
      intro: 'Obstetrics and Gynaecology are listed among Cairo Hospital’s clinical services.',
      bullets: ['Obstetrics', 'Gynaecology', 'Appointment and clinic availability confirmed by the hospital'],
      note: 'Contact the hospital to arrange an appointment and confirm the clinician’s schedule.',
    },
    {
      title: 'Infertility Services',
      subtitle: 'Consultation and assessment',
      intro: 'Infertility is listed in the hospital profile under its clinical services.',
      bullets: ['Initial consultation', 'Clinical assessment', 'Next steps discussed with the care team'],
      note: 'The appropriate work-up and treatment plan depend on each patient’s circumstances.',
    },
    {
      title: 'General Surgery',
      subtitle: 'Surgical consultation and care',
      intro: 'General Surgery is listed as a hospital service, with an equipped surgery room included in the hospital profile.',
      bullets: ['General surgical consultation', 'Case review', 'Procedure availability confirmed by the clinical team'],
      note: 'A consultation is required to determine the appropriate care plan.',
    },
    {
      title: 'Urosurgery',
      subtitle: 'A listed surgical service',
      intro: 'Urosurgery appears in the hospital’s current service list.',
      bullets: ['Consultation and assessment', 'Clinical care planning', 'Availability confirmed when booking'],
      note: 'Contact the hospital to confirm the clinician and procedures available for your case.',
    },
    {
      title: 'Bariatric, Laparoscopic & Oncology Surgeries',
      subtitle: 'Dr. Wael Khalil · Bariatric Surgeon',
      intro: 'The current profile lists laparoscopic, bariatric, and oncology surgeries within Dr. Wael Khalil’s clinical scope.',
      bullets: ['Bariatric surgeries', 'Laparoscopic surgeries', 'Oncology surgeries'],
      note: 'The hospital can confirm consultation availability and case-specific services.',
    },
    {
      title: 'Family Medicine',
      subtitle: 'Primary care consultations',
      intro: 'Family Medicine is listed among the hospital’s services.',
      bullets: ['Consultation', 'Clinical assessment', 'Follow-up arranged with the clinic'],
      note: 'Contact the hospital to confirm availability and appointment times.',
    },
    {
      title: 'Tropical Medicine',
      subtitle: 'A listed outpatient specialty',
      intro: 'Tropical Medicine is listed among the hospital’s services.',
      bullets: ['Specialist consultation', 'Clinical assessment', 'Follow-up as advised by the clinician'],
      note: 'The hospital confirms clinic availability when you book.',
    },
    {
      title: 'Specialist Outpatient Clinics',
      subtitle: 'Cardiology, neurology, nephrology and more',
      intro: 'The profile lists outpatient clinics for Cardiology, Neurology, Nephrology, Gastroenterology, and Endocrinology.',
      bullets: ['Cardiology', 'Neurology', 'Nephrology', 'Gastroenterology', 'Endocrinology'],
      note: 'Consultant schedules and appointment availability should be confirmed with the hospital.',
    },
    {
      title: 'Emergency Department & Ambulance Service',
      subtitle: 'Services listed in the hospital profile',
      intro: 'The hospital profile includes an Emergency Department and Ambulance Service.',
      bullets: ['Emergency Department', 'Ambulance Service', 'Call the hospital to confirm current access and availability'],
      note: 'For a life-threatening emergency, do not wait for a website or WhatsApp reply; call the hospital directly or contact local emergency services.',
    },
    {
      title: 'Laboratory, X-Ray & Ultrasound',
      subtitle: 'Diagnostic services at Cairo Hospital',
      intro: 'The profile lists a fully equipped laboratory, X-ray, and ultrasound services.',
      bullets: ['Laboratory', 'X-ray', 'Ultrasound'],
      note: 'Ask the hospital about the specific investigation, preparation, and reporting arrangements you need.',
    },
    {
      title: 'Hospital Pharmacy Department',
      subtitle: 'Pharmacy service listed in the profile',
      intro: 'The hospital profile includes a pharmacy department as part of its expanded hospital services.',
      bullets: ['Pharmacy department listed in the profile', 'Opening hours and product availability confirmed by inquiry'],
      note: 'Use medicines only as directed by a qualified healthcare professional.',
    },
    {
      title: 'Medical Tourism',
      subtitle: 'Coordination and follow-up across destinations',
      intro: 'The profile lists Dubai, the UK, Nigeria, Egypt, the USA, and Turkey as medical-tourism destinations.',
      bullets: ['Visa provision', 'Tickets, accommodation, and transport', 'Medical plan', 'Representative follow-up until return to Nigeria, with follow-up at Cairo Hospital after return'],
      note: 'Travel arrangements and approvals are subject to the relevant authorities and service providers.',
    },
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);

  const styleId = 'cairo-articles-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #cairo-articles{padding:clamp(3rem,7vw,6rem) 1rem;background:#fff;color:#092545;border-top:1px solid #e2edf5}
      #cairo-articles .ca-wrap{max-width:1120px;margin:auto}.ca-kicker,.ca-tag{font-size:.7rem;font-weight:850;letter-spacing:.13em;text-transform:uppercase;color:#0879b8}.ca-kicker{margin-bottom:.6rem}
      #cairo-articles h2{font-size:clamp(2rem,4vw,3.1rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;margin:.2rem 0 .8rem}.ca-lead{max-width:720px;color:#47627c;line-height:1.65;margin:0 0 1.5rem}
      .ca-hours{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:1rem 1.15rem;border-radius:1rem;background:#06284a;color:white;margin-bottom:1.5rem}.ca-hours div{display:flex;gap:.35rem;flex-wrap:wrap;align-items:center}.ca-hours b{width:100%;font-size:1rem}.ca-hours span{font-size:.76rem;color:#d5edf7;padding-right:.8rem;border-right:1px solid #4c718c}.ca-hours strong{max-width:330px;color:#fcd34d;font-size:.8rem;line-height:1.5;text-align:right}
      .ca-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}.ca-card{border:1px solid #dce9f2;border-radius:1rem;background:linear-gradient(180deg,#fff,#f8fcff);box-shadow:0 10px 24px rgba(9,37,69,.06);overflow:hidden;display:flex;flex-direction:column}.ca-card-top{padding:1.1rem 1.1rem .85rem}.ca-card h3{font-size:1.18rem;line-height:1.15;margin:.3rem 0 .4rem;font-weight:900}.ca-card h4{font-size:.86rem;line-height:1.35;margin:0 0 .7rem;color:#0b5d8d;font-weight:800}.ca-card p{font-size:.86rem;line-height:1.6;color:#47627c;margin:0}.ca-card details{margin-top:auto;border-top:1px solid #e5eef4}.ca-card summary{cursor:pointer;list-style:none;padding:.75rem 1.1rem;color:#075985;font-weight:850;font-size:.82rem}.ca-card summary::-webkit-details-marker{display:none}.ca-card summary:after{content:'+';float:right;font-size:1.1rem}.ca-card details[open] summary:after{content:'−'}.ca-card details ul{margin:0;padding:0 1.2rem 0 2.25rem;color:#38516b;font-size:.8rem;line-height:1.65}.ca-card details li{margin:.25rem 0}.ca-note{padding:.7rem 1.1rem 0;font-size:.78rem!important;color:#5b7184!important}.ca-cta{display:inline-block;margin:1rem 1.1rem 1.1rem;color:#0879b8;font-size:.8rem;font-weight:850;text-decoration:none}.ca-cta:hover{text-decoration:underline}
      @media(max-width:680px){.ca-hours{display:block}.ca-hours strong{display:block;margin-top:.8rem;text-align:left}.ca-hours span{border:0;padding:0;width:100%}}
    `;
    document.head.appendChild(style);
  }

  const mount = () => {
    if (document.getElementById('cairo-articles')) return true;
    const contact = document.querySelector('#contact');
    if (!contact || !contact.parentNode) return false;

    const section = document.createElement('section');
    section.id = 'cairo-articles';
    section.setAttribute('aria-labelledby', 'cairo-articles-title');
    section.innerHTML = `
      <div class="ca-wrap">
        <div class="ca-kicker">Knowledge Centre · Cairo Hospital</div>
        <h2 id="cairo-articles-title">Services & Care Guides</h2>
        <p class="ca-lead">A patient-friendly overview of the clinical services listed in Cairo Hospital’s current profile. Contact the hospital to confirm consultant schedules and service availability.</p>
        <div class="ca-hours">
          <div><b>Appointments & Service Availability</b><span>Outpatient clinic schedules: call to confirm</span><span>Pharmacy opening hours: call to confirm</span><span>Laboratory and diagnostics: call to confirm availability</span></div>
          <strong>Emergency Department & ambulance service are listed; call +234 912 979 9999 to confirm current access and availability.</strong>
        </div>
        <div class="ca-grid"></div>
      </div>`;

    const grid = section.querySelector('.ca-grid');
    articles.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'ca-card';
      const bullets = item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('');
      card.innerHTML = `
        <div class="ca-card-top"><span class="ca-tag">Cairo Hospital</span><h3>${escapeHtml(item.title)}</h3><h4>${escapeHtml(item.subtitle)}</h4><p>${escapeHtml(item.intro)}</p></div>
        <details><summary>More details</summary><ul>${bullets}</ul><p class="ca-note">${escapeHtml(item.note)}</p><a href="#contact" class="ca-cta">Contact & appointments</a></details>`;
      grid.appendChild(card);
    });
    contact.parentNode.insertBefore(section, contact);
    return true;
  };

  if (!mount()) {
    const observer = new MutationObserver(() => {
      if (mount()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
