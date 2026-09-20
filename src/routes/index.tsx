import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Dr. Somani's Homoeopathy" },
      { name: "description", content: "Read verified Google reviews from patients treated by Dr. Antim and Dr. Kushal Somani." },
      { property: "og:title", content: "Real Healing Stories | Dr. Somani's Homoeopathy" },
      { property: "og:description", content: "Verified experiences shared by patients of Dr. Somani's Homoeopathy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

type Review = { name: string; meta: string; time: string; text: string };

const reviews: Review[] = [
  { name: `Jayesh Mal`, meta: `Local Guide · 8 reviews · 4 photos`, time: `2 weeks ago`, text: `I had been suffering from a cough for almost a month. I contacted Dr. Kushal Somani online from Pune, while I am from Mumbai. He understood my issue ,guided me properly and sent me the medicines. Within 8 days, my cough was completely gone. Thank you Dr Kushal` },
  { name: `Ankit Purohit`, meta: `11 reviews · 1 photo`, time: `2 months ago`, text: `We are incredibly grateful to Dr. Kushal Somani for the wonderful treatment and care he provided for our son. Before starting his homeopathy treatment, our son was facing several severe challenges: Sleep Issues, Speech Delays, Social Anxiety. After undergoing treatment with Dr. Kushal Somani, we have seen a remarkable transformation. All of these problems have been resolved. Our son is now sleeping peacefully, communicating well, and socializing happily with others.` },
  { name: `Kanhaiya Tela`, meta: `5 reviews · 1 photo`, time: `3 weeks ago`, text: `I would sincerely like to thank Dr. Kushal Somani for helping me with my piles problem. I was quite परेशान and uncomfortable because of the issue, but after taking the homeopathic treatment and medicines prescribed by Dr. Kushal Somani, I gradually started feeling much better and have now recovered. What I really appreciated was the doctor's patient approach, understanding, and personal attention throughout the treatment.` },
  { name: `Siddhi Jain`, meta: `Local Guide · 10 reviews · 23 photos`, time: `6 months ago`, text: `I am extremely grateful to Dr. Kushal Somani for the incredible care and support throughout my treatment. I had been struggling with my illness for a long time, and nothing seemed to give me lasting relief. After starting homeopathic treatment with Dr. Kushal, I began noticing steady improvement in my health. He carefully listened to all my symptoms, explained the treatment clearly, and gave me confidence and hope.` },
  { name: `Radhika Joshi`, meta: `Local Guide · 29 reviews · 27 photos`, time: `6 months ago`, text: `I consulted Dr Kushal Somani for my skin issue & the experience has been very positive. He patiently listened to my concerns and explained the treatment in a very clear and reassuring way. The medicines prescribed have been gentle and I have started noticing improvement in my skin. What I really appreciated was the doctor’s holistic approach and the time taken to understand the root cause.` },
  { name: `Namrata Mahamunkar`, meta: `2 reviews`, time: `4 weeks ago`, text: `I am very thankful to Dr. Kushal for his kind care and treatment. I was suffering from leg pain and shoulder pain related to low calcium density, and after taking his homeopathic treatment, I experienced significant relief. He listens patiently, explains everything clearly, and provides very caring treatment. I truly appreciate his dedication.` },
  { name: `Dhanendra kumar Bhurtiya`, meta: `1 review`, time: `11 months ago`, text: `I had been suffering from Allergic Rhinitis for almost 6 to 7 years. Frequent sneezing, runny nose and constant discomfort had become a part of my daily life. I tried many treatments earlier but nothing gave me lasting relief. Then I started Homeopathic treatment with Dr. Somani and within a few months, I began noticing real improvement. After 6 months of regular treatment I am now completely free from my allergic rhinitis symptoms.` },
  { name: `Seema Dhage`, meta: `3 reviews`, time: `3 weeks ago`, text: `I was suffering from severe hairfall and I was concerned about the quality and growth of my hair. Then I came across Dr. Somani's Homeopathy through a friend's reference. I have seen a significant difference in my hairfall it is now much better. Also, my daughter has started taking homeopathy to improve her immunity.` },
  { name: `Chaitali Bihani`, meta: `2 reviews`, time: `10 months ago`, text: `I would like to express my sincere appreciation to Dr. Kushal Somani for the exceptional care. I have been struggling with chronic cold, cough, and asthma for the past 15 years. Despite consulting multiple doctors and using regular medications and asthma inhalers, I saw very little improvement. However, everything changed after I met Dr. Somani six months ago. My symptoms have reduced drastically, and use of pumps and inhalers has been completely reduced.` },
  { name: `Mukund Chandak`, meta: `Local Guide · 7 reviews · 1 photo`, time: `1 month ago`, text: `I was facing digestion and vomiting issues since long time, whenever i was having a food after 2 or 3 chapatis i used to feel like I will vomit and i couldn't have enough food after that. I have consulted this with Dr. Kushal Somani and I am now cured with that issue. The homeopathy medicine really worked for me.` },
  { name: `Tanuj Kabra`, meta: `3 reviews`, time: `10 months ago`, text: `I truly thankful to Dr. Somani's Homoeopathy. For a long time I had stomach problems and frequent sneezing in morning but now I feel much better. My digestive issue which I had been having for years was resolved in four to six months with homeopathy medicines. I no longer frequently fall sick.` },
  { name: `Prashant Sulkshane`, meta: `Local Guide · 16 reviews`, time: `6 months ago`, text: `I had a truly wonderful experience at this homeopathy clinic. The doctor is extremely knowledgeable, patient, and takes the time to understand the root cause of the problem rather than just treating the symptoms. The consultation was detailed and personalized. The medicines prescribed were very effective.` },
  { name: `Dr. Suyog Somani`, meta: `Local Guide · 32 reviews · 36 photos`, time: `10 months ago`, text: `Dr. Kushal is an enthusiastic listener, energetically involved in understanding patients problem n addresses them patiently. His diagnosis is perfect n which helped solve many chronic diseases for many of my patients in n around Baner..! Keep up the good work n All the best for future aspirations..!` },
  { name: `Vedika Raskar`, meta: `6 reviews`, time: `6 months ago`, text: `I was facing issues with delayed periods, bloating, and weight fluctuations for almost a year, which was really stressful for me. I consulted Dr. Kushal Somani, and his homeopathic treatment has helped me a lot. Since the last three months, my menstrual cycle has been regular and on time, and I feel much better and healthier now.` },
  { name: `Dilip Malpani`, meta: `2 reviews`, time: `10 months ago`, text: `For the past 4 to 5 years I was having frequent sneezing and allergic issues especially in the mornings. I had to depend on cetirizine tablets 2 to 3 times every week. Few months ago, I started treatment at Dr. Somani’s Homoeopathy and within 2 to 3 months of regular medicines, the sneezing has completely stopped. I haven’t taken cetirizine for months now.` },
  { name: `Nutan Zawar`, meta: `1 review`, time: `7 months ago`, text: `I was having problem of recurrent mouth ulcers even eating normal food was difficult there was overall indigestion since many years. Now after homoeopathy medicine by Dr. Somani sir I can happily enjoy my food and motions are clear daily that is a huge relief. I now suggest his clinic to all friends and family.` },
  { name: `Rushikesh Suryawanshi`, meta: `3 reviews`, time: `10 months ago`, text: `Dr. Kushal Somani is one of the best homeopathy doctors I have come across. He listens to the patient very patiently and understands the root cause of the problem before starting the treatment. I have experienced a noticeable improvement in my health after taking his medicines.` },
  { name: `Akshay Soni`, meta: `Local Guide · 6 reviews`, time: `10 months ago`, text: `Dr. Kushal is really a great Doctor and provides effective homeopathic treatment. I had been suffering from hairfall since last many years. Been taking the treatment from Kushal since last 8 months and my hairfall has drastically reduced and hair health has improved as well. Homeopathy has really shown me good results.` },
  { name: `Jagruti Bari`, meta: `3 reviews`, time: `9 months ago`, text: `I have been associated with this homeopathy clinic since my childhood, for the past 25 years. Earlier, I was under the treatment of the doctor’s father, and for the last 5 years, I have been consulting Dr. Kushal Somani. I have always received excellent treatment for health issues like fever, tonsils, flu, and COVID recovery.` },
  { name: `Mayur Gavali`, meta: `1 review · 2 photos`, time: `7 months ago`, text: `I took my mother for homeopathy treatment for her indigestion issue which was there since 6-7 years. She lost around 10kg in a year all investigation were normal. After starting Sir's medicine now she is eating and sleeping well we are very happy with the treatment now.` },
  { name: `Madhuri Mundada`, meta: `3 reviews`, time: `10 months ago`, text: `We have seen great improvement in my daughter Avika’s health with the homeopathic treatment. Earlier she used to get frequent viral infections and needed antibiotics often but after starting Dr. Kushal’s homeopathy medicines, her immunity has improved and antibiotic use has reduced a lot.` },
  { name: `Mo alim Salmani`, meta: `3 reviews`, time: `8 months ago`, text: `My name is Aalim. I had 3 alopecia areata spots: 2 on head and 1 on beard. The local application did not help in hair regrowth. I had belief in homeopathy since childhood so I took it again for alopecia and the patches are now covered with natural hair growth.` },
  { name: `Hassan Bhai`, meta: `1 review`, time: `4 months ago`, text: `In the 1st consultation with Dr Kushal itself i realised his way of homeopathy is unique he explained me the details and assured me that I will be alright. And today after 11 months of his treatment i can surely say I am alright and happy. ☺️🙏` }
];

const accents = ["ink-coral", "ink-violet", "ink-green", "ink-blue", "ink-gold"];
const rotations = ["tilt-left", "tilt-right", "tilt-soft-left", "tilt-soft-right"];

const doctorReplies: Record<string, string> = {
  "Jayesh Mal": "Jayesh, Thank you for trusting Dr Somani's Homoeopathy for your health concerns. Always wishing you the best of health.",
  "Ankit Purohit": "Ankit, Thank you for trusting Dr. Somani’s Homoeopathy for your son’s treatment. We're glad to know that homoeopathy helped him.",
  "Kanhaiya Tela": "Kanhaiya, Thank you for your detailed feedback. We are happy to know that homoeopathic medicines helped you with your complaints. Always wishing you the best of health.",
  "Siddhi Jain": "Siddhi, Thank you for trusting Dr Somani's Homoeopathy! Always here to support your healthy journey.",
  "Radhika Joshi": "Radhika, Thank you for sharing your experience with Dr Somani’s Homoeopathy! We’re glad to know that homoeopathy helped you for your skin ailments.",
  "Namrata Mahamunkar": "Namrata, Thank you for your kind words. We are glad that your leg pain and shoulder pain is now better with homoeopathy.",
  "Dhanendra kumar Bhurtiya": "Dhanendra, Thank you for choosing Dr. Somani’s Homoeopathy. Your recovery from Allergic Rhinitis makes us really happy!",
  "Seema Dhage": "Seema, Thank you for sharing your experience with Dr Somani’s Homoeopathy. We’re glad to know that you had a positive experience with your hair fall treatment.",
  "Chaitali Bihani": "Chaitali, Thank you for trusting Dr. Somani’s Homoeopathy for your treatment. We're glad to know that the use of inhalers has reduced now.",
  "Mukund Chandak": "Mukund, We are glad to know that homeopathic medicines helped you for your digestion issues.",
  "Tanuj Kabra": "Tanuj, Thank you for your valuable feedback.",
  "Prashant Sulkshane": "Prashant, Thanks for your valuable feedback.",
  "Dr. Suyog Somani": "Dr Suyog, Thank you for your kind words!",
  "Vedika Raskar": "Vedika, Thank you for sharing your experience with Dr Somani's Homoeopathy.",
  "Dilip Malpani": "Dilip, We are glad to know that homeopathic medicines gave you long lasting relief from your allergies.",
  "Nutan Zawar": "Nutan, Thank you for trusting Dr Somani’s Homoeopathy for your mouth ulcers treatment.",
  "Rushikesh Suryawanshi": "Rushikesh, Thanks for your kind words.",
  "Akshay Soni": "Akshay, Thank you for choosing Dr. Somani’s Homoeopathy for your hairfall treatment.",
  "Jagruti Bari": "Jagruti, Thank you for consistently trusting Dr Somani's Homoeopathy.",
  "Mayur Gavali": "Mayur, Thank you for trusting Dr Somani's Homeopathy for your mother's recovery.",
  "Madhuri Mundada": "Madhuri, We really appreciate your feedback and trust in Dr. Somani’s Homoeopathy.",
  "Mo alim Salmani": "Alim, Thank you for your kind words! We’re delighted that your Alopecia patches improved with Homoeopathy.",
  "Hassan Bhai": "Hassan, Thank you for your valuable feedback and trust in Dr Somani's Homoeopathy.",
};

function GoogleMark() {
  return <span className="google-mark" aria-label="Google">G</span>;
}

function ReviewCard({ review, index, duplicate = false }: { review: Review; index: number; duplicate?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const reply = doctorReplies[review.name];

  return (
    <article
      className={`review-card ${rotations[index % rotations.length]}${expanded ? " is-expanded" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      <header className="review-card__header">
        <span className={`review-card__avatar ${accents[index % accents.length]}`} aria-hidden="true">{review.name.charAt(0)}</span>
        <div className="review-card__account">
          <strong>{review.name}</strong>
          <small>{review.meta}</small>
        </div>
        <GoogleMark />
      </header>
      <div className="review-card__rating">
        <span className="review-card__stars" aria-label="5 out of 5 stars">★★★★★</span>
        <span>{review.time}</span>
      </div>
      <div className="review-card__body">
        <blockquote>{review.text}</blockquote>
        {expanded && reply ? (
          <div className="doctor-reply">
            <strong>Response from Dr. Somani</strong>
            <p>{reply}</p>
          </div>
        ) : null}
      </div>
      <Button
        type="button"
        variant="link"
        size="sm"
        className="review-card__toggle"
        onClick={() => setExpanded((current) => !current)}
        tabIndex={duplicate ? -1 : undefined}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </article>
  );
}

function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <span className="doodle doodle-heart">♡</span>
      <span className="doodle doodle-spark">✦</span>
      <span className="doodle doodle-loop">↝</span>
      <span className="doodle doodle-plus">＋</span>
      <span className="doodle doodle-small-heart">♥</span>
    </div>
  );
}

function ReviewsPage() {
  return (
    <main className="review-page">
      <Doodles />
      <section className="review-intro">
        <span className="eyebrow">Patient reviews</span>
        <h1>Verified Experiences. <em>Real<br />Healing Stories.</em></h1>
        <p>Authentic Google reviews from patients treated by Dr. Antim &amp; Dr. Kushal Somani.</p>
      </section>

      <section className="review-loop" aria-label="Patient reviews">
        <div className="review-track">
          {reviews.map((review, index) => <ReviewCard key={`first-${review.name}`} review={review} index={index} />)}
          {reviews.map((review, index) => <ReviewCard key={`second-${review.name}`} review={review} index={index} duplicate />)}
        </div>
      </section>

      <p className="loop-note"><span aria-hidden="true">←</span> Hover to pause &amp; read every note <span aria-hidden="true">→</span></p>
      <div className="review-footer" aria-label="Review highlights">
        <span>23 patient stories</span><i aria-hidden="true" />
        <span>5-star experiences</span><i aria-hidden="true" />
        <span>Thoughtful care</span>
      </div>
    </main>
  );
}
