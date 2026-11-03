(() => {
  const sectionId = 'cairo-profile-updates';
  const styleId = 'cairo-profile-updates-style';

  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #${sectionId}{background:linear-gradient(135deg,#f0f8ff 0%,#fff 52%,#eefcf9 100%);padding:clamp(3rem,7vw,6rem) 1rem;color:#092545;border-top:1px solid #dbeafe}
      #${sectionId} .cpu-wrap{max-width:1120px;margin:auto}.cpu-kicker,.cpu-label{color:#0879b8;font-size:.72rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.cpu-kicker{margin-bottom:.7rem}
      #${sectionId} h2{font-size:clamp(2rem,4vw,3.2rem);line-height:1.05;margin:.2rem 0 1rem;font-weight:900;letter-spacing:-.04em}#${sectionId} h3{font-size:1.15rem;line-height:1.2;margin:.35rem 0 .55rem;font-weight:850}#${sectionId} p{color:#38516b;line-height:1.65;margin:0;font-size:.92rem}.cpu-intro{max-width:760px;margin-bottom:2rem!important}.cpu-grid{display:grid;gap:1rem}.cpu-team-grid{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin:1.25rem 0}.cpu-card{background:rgba(255,255,255,.86);border:1px solid #dbe8f2;border-radius:1.2rem;padding:1.1rem;box-shadow:0 12px 30px rgba(9,37,69,.07)}.cpu-person{display:flex;gap:1rem;align-items:center}.cpu-person img{width:106px;height:132px;object-fit:cover;object-position:center;border-radius:.9rem;background:#e2f1fa;flex:none}.cpu-role{font-weight:800!important;color:#0b5d8d!important;font-size:.82rem!important;margin-bottom:.35rem!important}.cpu-feature-grid{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));margin-bottom:1rem}.cpu-feature{display:flex;gap:.9rem}.cpu-icon{display:grid;place-items:center;min-width:42px;height:42px;border-radius:12px;background:#dff5f2;color:#007b78;font-size:1.35rem;font-weight:900}.cpu-tourism{display:grid;grid-template-columns:1.15fr .85fr;gap:1.5rem;align-items:center;background:#06284a;color:#fff;border-radius:1.3rem;padding:1.4rem;margin-top:1rem}.cpu-tourism h3,.cpu-tourism p{color:#fff}.cpu-tourism p{color:#c9e5f3}.cpu-destinations{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:flex-end}.cpu-destinations span,.cpu-badges span{border:1px solid rgba(2,132,199,.25);background:#eaf7ff;color:#075985;padding:.45rem .65rem;border-radius:999px;font-size:.75rem;font-weight:800}.cpu-destinations span{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.22);color:#dff5ff}.cpu-recognition{margin-top:1rem;display:grid;grid-template-columns:.8fr 1.2fr;gap:1rem;align-items:center;padding:1.2rem;border:1px solid #cde7e3;border-radius:1.2rem;background:#f7fffd}.cpu-badges{display:flex;flex-wrap:wrap;gap:.45rem}@media(max-width:680px){.cpu-tourism,.cpu-recognition{grid-template-columns:1fr}.cpu-destinations{justify-content:flex-start}}
    `;
    document.head.appendChild(style);
  }

  const mount = () => {
    if (document.getElementById(sectionId)) return true;
    const contact = document.querySelector('#contact');
    if (!contact || !contact.parentNode) return false;

    const section = document.createElement('section');
    section.id = sectionId;
    section.setAttribute('aria-labelledby', 'profile-updates-title');
    section.innerHTML = `
      <div class="cpu-wrap">
        <div class="cpu-kicker">Hospital Profile · Listed Services</div>
        <h2 id="profile-updates-title">Expanded Multispecialty Care</h2>
        <p class="cpu-intro">Cairo Hospital began in Abuja as an outpatient orthopedics and physiotherapy centre, supported by a fully equipped laboratory and digital X-ray. Its current profile also lists an inpatient department, surgery room, pharmacy, outpatient clinics, and expanded specialties.</p>

        <div class="cpu-grid cpu-team-grid">
          <article class="cpu-card cpu-person">
            <img src="/images/team/dr-wael-khalil.jpg" alt="Dr Wael Khalil, Bariatric Surgeon" loading="lazy" decoding="async">
            <div><span class="cpu-label">Surgical Team</span><h3>Dr. Wael Khalil</h3><p class="cpu-role">Bariatric Surgeon</p><p>Clinical scope listed in the profile: laparoscopic, bariatric, and oncology surgeries.</p></div>
          </article>
          <article class="cpu-card cpu-person">
            <img src="/images/team/dr-bassam-physical-therapy.jpg" alt="Dr Bassam providing physical therapy" loading="lazy" decoding="async">
            <div><span class="cpu-label">Physical Therapy</span><h3>Dr. Bassam</h3><p class="cpu-role">Physical Therapy</p><p>Myofascial therapy, cupping, acupuncture, and physical therapy for neurological and musculoskeletal disorders.</p></div>
          </article>
        </div>

        <div class="cpu-grid cpu-feature-grid">
          <article class="cpu-card cpu-feature"><div class="cpu-icon" aria-hidden="true">✦</div><div><span class="cpu-label">Orthobiologics</span><h3>Regenerative therapy options</h3><p>The profile lists stem-cell regenerative therapy, prolotherapy, PRP, BMAC, and BEMER therapy, including orthobiologic applications in the orthopedic service scope.</p></div></article>
          <article class="cpu-card cpu-feature"><div class="cpu-icon" aria-hidden="true">✚</div><div><span class="cpu-label">Hospital Services</span><h3>Diagnostics, surgery & support</h3><p>Emergency Department and ambulance service, general surgery, urosurgery, diabetic foot clinic, laboratory, X-ray, ultrasound, and pharmacy are listed in the profile.</p></div></article>
          <article class="cpu-card cpu-feature"><div class="cpu-icon" aria-hidden="true">⌖</div><div><span class="cpu-label">Specialist Clinics</span><h3>Outpatient specialist access</h3><p>Cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine are among the listed clinic services.</p></div></article>
        </div>

        <div class="cpu-tourism">
          <div><span class="cpu-label">Medical Tourism</span><h3>Coordinated care and follow-up</h3><p>The listed support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return.</p></div>
          <div class="cpu-destinations"><span>Dubai</span><span>United Kingdom</span><span>Nigeria</span><span>Egypt</span><span>United States</span><span>Turkey</span></div>
        </div>

        <div class="cpu-recognition"><div><span class="cpu-label">Accreditation & Enrolment</span><h3>Organisations listed in the profile</h3></div><div class="cpu-badges"><span>Accreditation · NHIS</span><span>Accreditation · FCDA Health Department</span><span>Accreditation · African Union</span><span>Enrolled · Alamida</span><span>Enrolled · Zenith Medica</span><span>Enrolled · Cleopatra</span><span>Enrolled · NNPH</span><span>Enrolled · Push Africa NGO</span><span>Enrolled · ASRIC</span></div></div>
      </div>`;
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
