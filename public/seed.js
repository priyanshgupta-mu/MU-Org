// Masters' Union org chart - bundled roster snapshot, used by admin.html to import/sync Firestore.
window.__MU_SEED = {
    departments: [
      { id: "vert", name: "Programme verticals", short: "Vertical", color: "#F7D344" },
      { id: "d1", name: "Director’s Office", short: "Director’s Office", color: "#F7D344" },
      { id: "d2", name: "Placements", short: "Placements", color: "#2A8BA6" },
      { id: "d3", name: "Admissions", short: "Admissions", color: "#E38330" },
      { id: "d4", name: "Academics & Curriculum", short: "Academics", color: "#39B6D8" },
      { id: "d5", name: "Outclass", short: "Outclass", color: "#D4B02E" },
      { id: "d6", name: "New Initiatives (Bharat)", short: "Bharat", color: "#B8641F" },
      { id: "d7", name: "Student Experience", short: "Student Exp.", color: "#B7C975" },
      { id: "d8", name: "Alumni Relations", short: "Alumni", color: "#6E8C3A" },
      { id: "d9", name: "Partnerships", short: "Partnerships", color: "#86198F" },
      { id: "c1", name: "Academics (Central)", short: "Academics C.", color: "#7C5CBF" },
      { id: "c2", name: "Product", short: "Product", color: "#2F6FED" },
      { id: "c3", name: "Finance", short: "Finance", color: "#1F9D55" },
      { id: "c4", name: "Marketing", short: "Marketing", color: "#E0447C" },
      { id: "c5", name: "Operations", short: "Operations", color: "#A8763E" },
      { id: "c6", name: "Master Relations", short: "Master Rel.", color: "#12A594" },
      { id: "c7", name: "HR", short: "HR", color: "#D97706" },
      { id: "c8", name: "Design", short: "Design", color: "#6366F1" },
      { id: "c9", name: "Legal", short: "Legal", color: "#64748B" },
      { id: "c10", name: "Founder's Office", short: "Founder's Off.", color: "#B91C1C" },
      { id: "c11", name: "New Initiatives (Central)", short: "New Init. C.", color: "#65A30D" }
    ],
    people: [
      { id: "x1", code: "—", name: "Pratham Mittal", title: "Founder", dept: "d1", bu: "PG Programme", subDept: "Leadership", managerId: null, empType: "Full-time", kras: [] },
      { id: "vug", code: "—", name: "UG", title: "Undergraduate Programmes", dept: "vert", bu: "Masters’ Union", subDept: "Programme vertical", managerId: "x1", empType: "Vertical", kras: [] },
      { id: "vpg", code: "—", name: "PG", title: "Post Graduate Programme", dept: "vert", bu: "Masters’ Union", subDept: "Programme vertical", managerId: "x1", empType: "Vertical", kras: [] },
      { id: "vex", code: "—", name: "Exec", title: "Executive Education", dept: "vert", bu: "Masters’ Union", subDept: "Programme vertical", managerId: "x1", empType: "Vertical", kras: [] },
      { id: "vcf", code: "—", name: "CF", title: "Central Functions", dept: "vert", bu: "Masters’ Union", subDept: "Programme vertical", managerId: "x1", empType: "Vertical", kras: [] },
      { id: "x2", code: "—", name: "Chetan Verma", title: "Business Unit Head, PG Programme", dept: "d1", bu: "PG Programme", subDept: "Leadership", managerId: "vpg", empType: "Inferred", kras: [] },
      { id: "e29736", code: "29736", name: "Ankit Madan", title: "Director", dept: "d7", bu: "PG Programme", subDept: "New Initiatives", managerId: "x2", empType: "Full-time", kras: [
        { title: "Mantaining student NPS", metric: "NPS score among PG students", target: "50%" },
        { title: "Student Elections & Governance", metric: "Student elections done smoothly with rating of the event smoothness 4.5 or above on 5", target: "3%" },
        { title: "Management of all clubs and committees", metric: "Making sure they are following their KPIs and conducting events as per the same. Each club to conduct one event per term.Impeach poor performing clubs.Meeting the Heads of the clubs…", target: "3%" },
        { title: "Student Engagement: Clubs, Committees, RnR & Inter-Fraternity Activities", metric: "Foster active participation and a strong campus culture through structured student-led initiatives.", target: "3%" },
        { title: "Student Reimbursements: Case Competition, Club and Events", metric: "Student Reimbursement for clubs expenses & case competitions to be carried out in T+3 days", target: "3%" },
        { title: "Student Query Resolution", metric: "Student Query Resolution", target: "3%" },
        { title: "Frat Leadership and NPS score from fraternity students", metric: "Making sure they are following their KPIs and conducting events as per the same. Each frat to conduct one event per term.I Target - 100% completion of the goal", target: "3%" },
        { title: "End to end execution of Orientation with high student NPS", metric: "Target - 100", target: "3%" },
        { title: "Student Reimbursement- Sports (Head Approving Authority for reimbursements up to â‚¹10,000)", metric: "- As a primary SPOC for the event, making sure election process, timings, location & due process is being followed - Conduct elections for:Councils, Committees & Clubs & finish the process…", target: "3%" },
        { title: "CXO Event Planning & Tracking ( Moderator Committee- SPOC)", metric: "Target - 100", target: "3%" },
        { title: "LMS Management", metric: "", target: "2%" },
        { title: "Strategic Initiative Support", metric: "% of leadership projects tracked and delivered as per defined timelines Target - 90% completion", target: "3%" },
        { title: "Stakeholder Coordination & Communication", metric: "Satisfaction score from internal stakeholders Target - 4.5/5", target: "3%" },
        { title: "Support in Program and Project Outcomes", metric: "% of initiatives executed successfully Target - 80% positive completion feedback", target: "3%" },
        { title: "Operational & Reporting Excellence", metric: "Timeliness and accuracy of reports shared Target - 100% compliance", target: "3%" },
        { title: "Primary SPOC for hostel management & resolving hostel issues", metric: "Target - 100", target: "3%" },
        { title: "Shuttle fleet management, making sure students at hostel get shuttles on time to attend classes & return back to hostel.", metric: "Target - 100", target: "3%" },
        { title: "Hostel and Shuttle Escalations Management:", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "3%" }
      ] },
      { id: "e28560", code: "28560", name: "Ritesh Tiwari", title: "Senior Manager - I", dept: "d7", bu: "PG Programme", subDept: "Hostel", managerId: "e29736", empType: "Full-time", kras: [
        { title: "Primary SPOC for hostel management & resolving hostel issues", metric: "Target - 100", target: "33.33%" },
        { title: "Shuttle fleet management, making sure students at hostel get shuttles on time to attend classes & return back to hostel.", metric: "Target - 100", target: "33.33%" },
        { title: "Hostel and Shuttle Escalations Management:", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "33.340000000000003%" }
      ] },
      { id: "e28146", code: "28146", name: "Sonam", title: "Program Associate", dept: "d7", bu: "PG Programme", subDept: "Hostel", managerId: "e28560", empType: "Full-time", kras: [
        { title: "Primary SPOC for hostel management & resolving hostel issues", metric: "Target - 100", target: "33.33%" },
        { title: "Shuttle fleet management, making sure students at hostel get shuttles on time to attend classes & return back to hostel.", metric: "Target - 100", target: "33.33%" },
        { title: "Hostel and Shuttle Escalations Management:", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "33.340000000000003%" }
      ] },
      { id: "e28963", code: "28963", name: "Aayush Sharma", title: "Program Associate", dept: "d7", bu: "PG Programme", subDept: "Hostel", managerId: "e28560", empType: "Full-time", kras: [
        { title: "Primary SPOC for hostel management & resolving hostel issues", metric: "Target - 100", target: "33.33%" },
        { title: "Shuttle fleet management, making sure students at hostel get shuttles on time to attend classes & return back to hostel.", metric: "Target - 100", target: "33.33%" },
        { title: "Hostel and Shuttle Escalations Management:", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "33.340000000000003%" }
      ] },
      { id: "e29801", code: "29801", name: "Praful Dixit", title: "Senior Executive", dept: "d1", bu: "PG Programme", subDept: "Director's Office", managerId: "e28560", empType: "Full-time", kras: [
        { title: "Primary SPOC for hostel management & resolving hostel issues", metric: "Target - 100", target: "33.33%" },
        { title: "Shuttle fleet management, making sure students at hostel get shuttles on time to attend classes & return back to hostel.", metric: "Target - 100", target: "33.33%" },
        { title: "Hostel and Shuttle Escalations Management:", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "33.340000000000003%" }
      ] },
      { id: "e29112", code: "29112", name: "Pranav Joshi", title: "Senior Manager - II", dept: "d1", bu: "PG Programme", subDept: "Director's Office", managerId: "e29736", empType: "Full-time", kras: [] },
      { id: "e30158", code: "30158", name: "Nidhi Popli", title: "General Manager", dept: "d7", bu: "PG Programme", subDept: "Student Experience", managerId: "e29736", empType: "Full-time", kras: [
        { title: "Mantaining student NPS", metric: "NPS score among PG students", target: "15%" },
        { title: "Student Elections & Governance", metric: "Student elections done smoothly with rating of the event smoothness 4.5 or above on 5", target: "10%" },
        { title: "Management of all clubs and committees", metric: "Making sure they are following their KPIs and conducting events as per the same. Each club to conduct one event per term.Impeach poor performing clubs.Meeting the Heads of the clubs…", target: "15%" },
        { title: "Student Reimbursements: Case Competition, Club and Events", metric: "Student Reimbursement for clubs expenses & case competitions to be carried out in T+3 days", target: "10%" },
        { title: "Student Engagement: Clubs, Committees, RnR & Inter-Fraternity Activities", metric: "Foster active participation and a strong campus culture through structured student-led initiatives.", target: "15%" },
        { title: "Student Query Resolution", metric: "Student Query Resolution", target: "10%" },
        { title: "Frat Leadership and NPS score from fraternity students", metric: "Making sure they are following their KPIs and conducting events as per the same. Each frat to conduct one event per term.I Target - 100% completion of the goal", target: "15%" },
        { title: "End to end execution of Orientation with high student NPS", metric: "Target - 100", target: "10%" }
      ] },
      { id: "e26253", code: "26253", name: "Saumya Datta", title: "Senior Manager - I", dept: "d7", bu: "PG Programme", subDept: "Student Operations", managerId: "e30158", empType: "Full-time", kras: [
        { title: "NPS score among PG program students.", metric: "Target - 60", target: "15%" },
        { title: "Student Reimbursement- Sports (Head Approving Authority for reimbursements up to â‚¹10,000)", metric: "- As a primary SPOC for the event, making sure election process, timings, location & due process is being followed - Conduct elections for:Councils, Committees & Clubs & finish the process…", target: "15%" },
        { title: "Frat Leadership and NPS score from fraternity students", metric: "Making sure they are following their KPIs and conducting events as per the same. Each frat to conduct one event per term.I Target - 100% completion of the goal", target: "15%" },
        { title: "CXO Event Planning & Tracking ( Moderator Committee- SPOC)", metric: "Target - 100", target: "15%" },
        { title: "End to end execution of Orientation with high student NPS", metric: "Target - 100", target: "15%" },
        { title: "Student Query Resolution", metric: "- Response to Students within 3-4 working hours (during weekdays) and within 4-5 hours (for weekends) by next working day. - Liaising with Hostel Vendor Management team and staff for hostel…", target: "15%" },
        { title: "LMS Management", metric: "Managing the LMS end-to-end", target: "10%" }
      ] },
      { id: "e29514", code: "29514", name: "Vinod Bishnoi", title: "Associate Program Manager", dept: "d1", bu: "PG Programme", subDept: "Director's Office", managerId: "e30158", empType: "Full-time", kras: [
        { title: "NPS score among PG program students.", metric: "Target - 60", target: "15%" },
        { title: "Student Elections & Governance", metric: "Student elections done smoothly with rating of the event smoothness 4.5 or above on 5", target: "10%" },
        { title: "Management of all clubs and committees", metric: "Making sure they are following their KPIs and conducting events as per the same. Each club to conduct one event per term.Impeach poor performing clubs.Meeting the Heads of the clubs…", target: "15%" },
        { title: "Student Reimbursements: Case Competition, Club and Events", metric: "Student Reimbursement for clubs expenses & case competitions to be carried out in T+3 days", target: "10%" },
        { title: "Student Engagement: Clubs, Committees, RnR & Inter-Fraternity Activities", metric: "Foster active participation and a strong campus culture through structured student-led initiatives.", target: "15%" },
        { title: "Student Query Resolution", metric: "Student Query Resolution", target: "10%" },
        { title: "Frat Leadership and NPS score from fraternity students", metric: "Making sure they are following their KPIs and conducting events as per the same. Each frat to conduct one event per term.I Target - 100% completion of the goal", target: "15%" },
        { title: "End to end execution of Orientation with high student NPS", metric: "Target - 100", target: "10%" }
      ] },
      { id: "e30472", code: "30472", name: "Manish Goel", title: "Manager", dept: "d7", bu: "PG Programme", subDept: "Student Experience", managerId: "e30158", empType: "Full-time", kras: [] },
      { id: "e30496", code: "30496", name: "Samiksha Rai", title: "Manager", dept: "d7", bu: "PG Programme", subDept: "Student Experience", managerId: "e30158", empType: "Full-time", kras: [] },
      { id: "e30524", code: "30524", name: "Shruti Vatsal", title: "Senior Executive", dept: "d7", bu: "PG Programme", subDept: "Student Experience", managerId: "e30158", empType: "Full-time", kras: [] },
      { id: "e30258", code: "30258", name: "Divyam Aggarwal", title: "Program Manager", dept: "d7", bu: "PG Programme", subDept: "Student Experience", managerId: "e29736", empType: "Full-time", kras: [
        { title: "Strategic Initiative Support", metric: "% of leadership projects tracked and delivered as per defined timelines Target - 90% completion", target: "30%" },
        { title: "Stakeholder Coordination & Communication", metric: "Satisfaction score from internal stakeholders Target - 4.5/5", target: "25%" },
        { title: "Support in Program and Project Outcomes", metric: "% of initiatives executed successfully Target - 80% positive completion feedback", target: "25%" },
        { title: "Operational & Reporting Excellence", metric: "Timeliness and accuracy of reports shared Target - 100% compliance,", target: "20%" }
      ] },
      { id: "x3", code: "—", name: "Bhupesh Manoharan", title: "Head of Department, Academics & Curriculum", dept: "d4", bu: "PG Programme", subDept: "Leadership", managerId: "vpg", empType: "Inferred", kras: [] },
      { id: "e1246", code: "1246", name: "Ashita Birla", title: "Program Manager", dept: "d4", bu: "PG Programme", subDept: "Academic Operations", managerId: "x3", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e26216", code: "26216", name: "Arjoo Mahajan", title: "Senior Program Manager - I", dept: "d4", bu: "PG Programme", subDept: "Academic Operations", managerId: "x3", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e26223", code: "26223", name: "Vanshika", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e27624", code: "27624", name: "Priya Gupta", title: "Associate Program Manager", dept: "d4", bu: "PG Programme", subDept: "Academic Operations", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e27638", code: "27638", name: "Pragya Sharma", title: "Associate Program Manager", dept: "d4", bu: "PG Programme", subDept: "Academic Operations", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "- Master Coordination & Session Scheduling - Classroom Booking & Scheduling Coordination - Cross-Functional Academic Operations Coordination - Master Feedback Management & Learning…", target: "100%" }
      ] },
      { id: "e28018", code: "28018", name: "Madhur Mittal", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e28059", code: "28059", name: "Divya Rai", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e28365", code: "28365", name: "Raveena Rawat", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e28372", code: "28372", name: "Khushi Roy", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e28505", code: "28505", name: "Kundan Kumar Gupta", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Teaching Assisstant", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e29942", code: "29942", name: "Hina Kausar", title: "Executive", dept: "d4", bu: "PG Programme", subDept: "Academics", managerId: "e26216", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e30285", code: "30285", name: "Apoorva Chaudhari", title: "Associate", dept: "d4", bu: "PG Programme", subDept: "Academics", managerId: "e26216", empType: "Full-time", kras: [] },
      { id: "e30348", code: "30348", name: "Arush Singh", title: "Associate", dept: "d4", bu: "PG Programme", subDept: "Academics", managerId: "e26216", empType: "Full-time", kras: [] },
      { id: "e28373", code: "28373", name: "Radhika Agarwal", title: "Program Associate", dept: "d4", bu: "PG Programme", subDept: "Academic Operations", managerId: "x3", empType: "Full-time", kras: [
        { title: "Student Experience", metric: "", target: "100%" }
      ] },
      { id: "e27415", code: "27415", name: "Shivas Behl", title: "Associate Director", dept: "d3", bu: "PG Programme", subDept: "Leaderships", managerId: "vpg", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications achieved – team Target : 700", target: "40%" },
        { title: "Delivery", metric: "Summer School admission fee collections achieved – team Target : 50", target: "25%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % – PGP TBM team Target : >=13%", target: "15%" },
        { title: "Process Efficiency", metric: "Interview and fee-collection pipeline completed within committed TAT Target : >=95%", target: "10%" },
        { title: "Reporting & Analytics", metric: "Weekly funnel review pack: Leads â†’ Apps Start â†’ Paid Apps â†’ Interviews â†’ Fees Target : 13 updates; >=98% accuracy", target: "10%" }
      ] },
      { id: "e27413", code: "27413", name: "Cherry Jain", title: "General Manager", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27415", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications influenced / supported through Kapish, ops and communications Target : 150", target: "25%" },
        { title: "Delivery", metric: "Summer School admission fee collections influenced / supported through Kapish and Disha Target : 10", target: "15%" },
        { title: "People & Delivery", metric: "Kapish and Disha quarterly goal achievement Target : >=90% weighted achievement", target: "15%" },
        { title: "Delivery", metric: "Conversion calling + event-led contribution to PGP TBM paid applications Target : >=75 influenced paid applications", target: "15%" },
        { title: "Delivery", metric: "Content & communications campaigns executed for PGP TBM and Summer School Target : >=18 campaigns", target: "15%" },
        { title: "Process Efficiency", metric: "Interview / session rescheduling and candidate follow-up TAT Target : >=90% within 24 hrs", target: "10%" },
        { title: "Process Efficiency", metric: "Lead stage and campaign attribution hygiene across owned pipeline Target : >=98% hygiene; <2% errors", target: "5%" }
      ] },
      { id: "e27911", code: "27911", name: "Kapish Sabharwal", title: "Admission Counsellor - III", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27413", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned / assigned pipeline Target : 150", target: "50%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned / assigned cases Target : 10", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" },
        { title: "Process Efficiency", metric: "Committed Summer School admission-fee cases closed within agreed timeline Target : >=90%", target: "10%" }
      ] },
      { id: "e28895", code: "28895", name: "Disha Rastogi", title: "Associate", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27413", empType: "Full-time", kras: [
        { title: "Process Efficiency", metric: "Interview / evaluation scheduling TAT Target : 90% scheduled within 48 hrs", target: "30%" },
        { title: "Process Efficiency", metric: "Candidate communication and application-support TAT & accuracy Target : >=95% within 24 hrs; error rate <=1%", target: "30%" },
        { title: "Delivery", metric: "Cherry-team PGP TBM paid applications achieved – Ops/Comms contribution Target : Team target support: 150", target: "15%" },
        { title: "Delivery", metric: "Cherry-team Summer School admission fees achieved – Ops/Comms contribution Target : Team target support: 10", target: "10%" },
        { title: "Reporting & Analytics", metric: "Creative requests tracker & weekly status update sent Target : >=13 updates", target: "15%" }
      ] },
      { id: "e29294", code: "29294", name: "Rozy", title: "Associate", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27413", empType: "Full-time", kras: [
        { title: "Process Efficiency", metric: "Interview / evaluation scheduling TAT Target : 90% scheduled within 48 hrs", target: "30%" },
        { title: "Process Efficiency", metric: "Candidate communication and application-support TAT & accuracy Target : >=95% within 24 hrs; error rate <=1%", target: "30%" },
        { title: "Delivery", metric: "Cherry-team PGP TBM paid applications achieved – Ops/Comms contribution Target : Team target support: 150", target: "15%" },
        { title: "Delivery", metric: "Cherry-team Summer School admission fees achieved – Ops/Comms contribution Target : Team target support: 10", target: "10%" },
        { title: "Reporting & Analytics", metric: "Creative requests tracker & weekly status update sent Target : >=13 updates", target: "15%" }
      ] },
      { id: "e29422", code: "29422", name: "Somya Mishra", title: "Program Manager", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27413", empType: "Full-time", kras: [
        { title: "Process Efficiency", metric: "Interview / evaluation scheduling TAT Target : 90% scheduled within 48 hrs", target: "30%" },
        { title: "Process Efficiency", metric: "Candidate communication and application-support TAT & accuracy Target : >=95% within 24 hrs; error rate <=1%", target: "30%" },
        { title: "Delivery", metric: "Cherry-team PGP TBM paid applications achieved – Ops/Comms contribution Target : Team target support: 150", target: "15%" },
        { title: "Delivery", metric: "Cherry-team Summer School admission fees achieved – Ops/Comms contribution Target : Team target support: 10", target: "10%" },
        { title: "Reporting & Analytics", metric: "Creative requests tracker & weekly status update sent Target : >=13 updates", target: "15%" }
      ] },
      { id: "e29386", code: "29386", name: "Ananya Singh", title: "Associate", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27413", empType: "Full-time", kras: [
        { title: "Process Efficiency", metric: "Interview / evaluation scheduling TAT Target : 90% scheduled within 48 hrs", target: "30%" },
        { title: "Process Efficiency", metric: "Candidate communication and application-support TAT & accuracy Target : >=95% within 24 hrs; error rate <=1%", target: "30%" },
        { title: "Delivery", metric: "Cherry-team PGP TBM paid applications achieved – Ops/Comms contribution Target : Team target support: 150", target: "15%" },
        { title: "Delivery", metric: "Cherry-team Summer School admission fees achieved – Ops/Comms contribution Target : Team target support: 10", target: "10%" },
        { title: "Reporting & Analytics", metric: "Creative requests tracker & weekly status update sent Target : >=13 updates", target: "15%" }
      ] },
      { id: "t5", code: "TBH", name: "Open role", title: "Senior Manager II", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "e27413", empType: "Open role", kras: [] },
      { id: "e27452", code: "27452", name: "Kuldeep Rawat", title: "Senior Manager - I", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27415", empType: "Full-time", kras: [
        { title: "Reporting & Analytics", metric: "Lead matrix accuracy & hygiene Target : >=98% mappings; <2% errors", target: "35%" },
        { title: "Reporting & Analytics", metric: "Daily dashboard and weekly funnel report accuracy Target : >=98% accuracy; 13 weekly updates", target: "25%" },
        { title: "Delivery", metric: "Team PGP TBM paid applications achieved – Data/Ops contribution Target : Team target support: 700", target: "15%" },
        { title: "Delivery", metric: "Team Summer School admission fees achieved – Data/Ops contribution Target : Team target support: 50", target: "10%" },
        { title: "Process Efficiency", metric: "MU-BAAT / interview / evaluation data coordination Target : 100% weekly completion; zero missing weeks", target: "15%" }
      ] },
      { id: "e27769", code: "27769", name: "Samarth Bhagtani", title: "Senior Manager - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27415", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications achieved through counsellor team Target : 550", target: "30%" },
        { title: "Delivery", metric: "Summer School admission fee collections achieved through counsellor team Target : 40", target: "20%" },
        { title: "Process Efficiency", metric: "PGP TBM interview scheduling and completion TAT Target : >=95% within 48 hrs", target: "15%" },
        { title: "People & Delivery", metric: "Counsellor monthly target achievement Target : >=80% counsellors at >=90% target", target: "10%" },
        { title: "Process Efficiency", metric: "Fee collection follow-up and committed-case closure compliance Target : >=95% within committed TAT", target: "10%" },
        { title: "Reporting & Analytics", metric: "Weekly counsellor funnel review pack and action closure Target : 13 updates; >=90% actions closed", target: "10%" },
        { title: "Process Efficiency", metric: "Lead stage hygiene across PGP TBM and Summer School closure pipeline Target : >=98% hygiene; <2% errors", target: "5%" }
      ] },
      { id: "e27585", code: "27585", name: "Kishan Gopal Soni", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 78", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 5", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Query resolution SLA: 90% within 2 hrs and 100% within 24 hrs Target : >=90% (2h) & 100% (24h)", target: "10%" }
      ] },
      { id: "e27907", code: "27907", name: "Simrath Jeet Singh", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 78", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" }
      ] },
      { id: "e27985", code: "27985", name: "Manas Sourav Singh", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 78", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" }
      ] },
      { id: "e28645", code: "28645", name: "Shrashti Takrani", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 80", target: "50%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Query resolution SLA: 90% within 2 hrs and 100% within 24 hrs Target : >=90% (2h) & 100% (24h)", target: "10%" },
        { title: "Delivery", metric: "Campus tours / PGP TBM information sessions executed & feedback captured Target : >=12 tours/sessions; CSAT>=4.5/5", target: "10%" }
      ] },
      { id: "e28681", code: "28681", name: "Ishan Ali", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 78", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" }
      ] },
      { id: "e28734", code: "28734", name: "Shreya Sharma", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 79", target: "50%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Query resolution SLA: 90% within 2 hrs and 100% within 24 hrs Target : >=90% (2h) & 100% (24h)", target: "10%" },
        { title: "Delivery", metric: "Campus tours / PGP TBM information sessions executed & feedback captured Target : >=12 tours/sessions; CSAT>=4.5/5", target: "10%" }
      ] },
      { id: "e28763", code: "28763", name: "Prince Parmit Singh", title: "Admission Counsellor - II", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 79", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 6", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" }
      ] },
      { id: "e28951", code: "28951", name: "Sunny Prakash Singh", title: "Admission Counsellor - I", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "e27769", empType: "Full-time", kras: [
        { title: "Delivery", metric: "PGP TBM paid applications converted from owned pipeline Target : 78", target: "60%" },
        { title: "Delivery", metric: "Summer School admission fee collections from owned pipeline Target : 5", target: "20%" },
        { title: "Process Efficiency", metric: "Apps Start â†’ Paid Apps conversion % on owned PGP TBM pipeline Target : >=13%", target: "10%" },
        { title: "Candidate Experience", metric: "Candidate query / follow-up SLA compliance Target : >=95%", target: "10%" }
      ] },
      { id: "t3", code: "TBH", name: "Open role", title: "AC I", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "e27769", empType: "Open role", kras: [] },
      { id: "t4", code: "TBH", name: "Open role", title: "AC II", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "e27769", empType: "Open role", kras: [] },
      { id: "e27613", code: "27613", name: "Abhishek Kaul", title: "Director", dept: "d2", bu: "PG Programme", subDept: "Leaderships", managerId: "vpg", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 Full time offers Target: 135 (97 Domestic + 38 International)", target: "70%" },
        { title: "Community Outreach", metric: "Overseeing the entire community outreach strategy including high impact events, academic and international advsiory boards, newsletters and any other social media collaborations with the…", target: "5%" },
        { title: "Critical Account Engagement", metric: "Personally drive critical account meetings via LinkedIn, CXO networks, and strategic outreach", target: "1%" },
        { title: "Analytics & Reporting", metric: "Oversee core operational processes and SOP adherence for all placement processes inlcuding database management and Hubspot hygiene", target: "1%" },
        { title: "Student Sentiment", metric: "Maintain trust, transparency, and confidence among students through townhalls, and other regular catch-ups with students", target: "1%" },
        { title: "Operations", metric: "Forecasting and manage hiring of manpower based on cohort size, and seasonal spikes * Own management of Career Coach in coordination with the Product Team", target: "2%" },
        { title: "Strategy", metric: "Own end-to-end strategy and execution for Corporate Relations * Launch of new Executive Education & Master’s programs (India & UAE) * Rollout of new L&D programs for corporate clients * Own…", target: "20%" }
      ] },
      { id: "e27391", code: "27391", name: "Chanpreet Singh Gulati", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Strategy", metric: "Overseeing the overall strategy and operations for the Corporate Relations Team * Assist the Director in launching of new exec programs under Tetr and Masters' Union and managing the…", target: "35%" },
        { title: "Analytics and Reporting", metric: "Managing the entire database management for the Career Outreach team - Batch Profile Sheet, Job Opportunity Sheet, Hit Rate, Career Coach", target: "5%" },
        { title: "Lead Generation and Management", metric: "Assist in generating leads for the entire team * Lead Ownership: Ensure round-robin ownership of leads from LinkedIn, IIMJobs, ISB Jobs, and other sources", target: "5%" },
        { title: "Student Sentiment", metric: "Maintain trust, transparency, and confidence among students through townhalls, and other regular catch-ups with students", target: "5%" },
        { title: "Hiring Operations", metric: "Forecasting and manage hiring of manpower based on cohort size, and seasonal spikes", target: "5%" },
        { title: "Critical Account Engagement", metric: "Strategic Meetings: Crack additional critical account meetings through Abhishek's LinkedIn, other networks and outreach campaigns, including Placement Season campaigns * Pipeline Expansion…", target: "5%" },
        { title: "Dashboard Management & Data Accuracy", metric: "Central Dashboard Oversight: Maintain and update a centralized dashboard to track outreach performance, such as: Meetings/Calls per week, Emails sent per week, Conversion rates across…", target: "5%" },
        { title: "Training and Support", metric: "New Hire Onboarding: Ensure seamless onboarding and training of new team members.", target: "5%" },
        { title: "Placement Operations", metric: "Manage administrative tasks, including scheduling meetings, organizing travel, and handling correspondence. * Responsible for maintaining the following sheets: * All Leads Sheet * Pratham's…", target: "20%" },
        { title: "Community Operations", metric: "High-Impact Events: Organize 3 domestic and 1 international masterclasses, CXO dinners, and corporate engagement events. Target - 4 * Social Media Collaboration: Work with Divyam’s team to…", target: "10%" }
      ] },
      { id: "e27367", code: "27367", name: "Adiksha Bhalla", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e27391", empType: "Full-time", kras: [
        { title: "Operations", metric: "Resume and Placement Sheets Management: * Timeliness: Share placement sheets within 2 hours of receiving the necessary data on a working day. * Quality Assurance: Ensure 100% review of…", target: "100%" }
      ] },
      { id: "e28165", code: "28165", name: "Jitender Sharma", title: "Placement Manager - I", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e27391", empType: "Full-time", kras: [
        { title: "Lead Distribution", metric: "Round-Robin System: Distribute 100% of all leads from LinkedIn, IIM Jobs, WhatsApp groups, Outreach Sequences fairly through a round-robin system to ensure equitable lead allocation.", target: "20%" },
        { title: "Operations", metric: "Accountable and responsible for maintaining the following operational Google Sheets: * All Leads Sheet * Pratham's C4/C5/C6/Rise C1 Referral Sheet * Tracxn Data (India/UAE) * YPO List…", target: "80%" }
      ] },
      { id: "t17", code: "TBH", name: "Open role", title: "Executive", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e28165", empType: "Open role", kras: [] },
      { id: "e28876", code: "28876", name: "Vinayaka", title: "Senior Program Manager - I", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e27391", empType: "Full-time", kras: [
        { title: "Strategy", metric: "Assisting in the overall strategy and operations for the Corporate Relations Team. * Assist the Director in launching new executive programs under Tetr and Masters' Union and assisting in…", target: "90%" },
        { title: "Lead Generation", metric: "Assist in generating leads for the entire team", target: "10%" }
      ] },
      { id: "e28914", code: "28914", name: "Rudransh Tiwari", title: "Senior Program Manager - I", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e27391", empType: "Full-time", kras: [
        { title: "Strategy", metric: "Assisting in the overall strategy and operations for the Corporate Relations Team. * Assist the Director in launching new executive programs under Tetr and Masters' Union and assisting in…", target: "70%" },
        { title: "Operations", metric: "Weekly updates to the entire cohort on the placements", target: "10%" },
        { title: "Lead Generation", metric: "Assist in generating leads for the entire team", target: "10%" },
        { title: "Analytics and reporting", metric: "Managing the entire database management for the Career Outreach team - Batch Profile Sheet, Job Opportunity Sheet, Hit Rate, Career Coach, JD Audit, Weekly Meeting PPT", target: "10%" }
      ] },
      { id: "e29573", code: "29573", name: "Ankit Jain", title: "Associate", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e28914", empType: "Full-time", kras: [
        { title: "Operations", metric: "Resume and Placement Sheets Management: * Timeliness: Share placement sheets within 2 hours of receiving the necessary data on a working day. * Quality Assurance: Ensure 100% review of…", target: "100%" }
      ] },
      { id: "t15", code: "TBH", name: "Open role", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Director's Office", managerId: "e28914", empType: "Open role", kras: [] },
      { id: "e29653", code: "29653", name: "Tanya Verma", title: "Associate Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27391", empType: "Full-time", kras: [
        { title: "Lead Distribution", metric: "Round-Robin System: Distribute 100% of all leads from LinkedIn, IIM Jobs, WhatsApp groups, Outreach Sequences fairly through a round-robin system to ensure equitable lead allocation.", target: "20%" },
        { title: "Operations", metric: "Accountable and responsible for maintaining the All Leads Sheet. * Maintaining HubSpot Hygiene.", target: "60%" },
        { title: "Analytics and Reporting", metric: "Managing the analytics & efficiency of outreach campaigns", target: "20%" }
      ] },
      { id: "e30419", code: "30419", name: "Anjali Antil", title: "Associate Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27391", empType: "Full-time", kras: [] },
      { id: "e27706", code: "27706", name: "Dibyendu Choudhury", title: "Deputy Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 4", target: "100%" }
      ] },
      { id: "e27721", code: "27721", name: "Simran Bhatia", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [] },
      { id: "e28847", code: "28847", name: "Sheliza Mamad", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International Full time offers Target : 13 (8 placements of her own)", target: "100%" }
      ] },
      { id: "e29878", code: "29878", name: "Anshuman Raj", title: "Associate Program Manager", dept: "d2", bu: "PG Programme", subDept: "Placements", managerId: "e28847", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "Meetings with companies that are hiring", target: "50%" },
        { title: "Career Outreach", metric: "All student and other ops", target: "50%" }
      ] },
      { id: "e26160", code: "26160", name: "Nishant Singh Tanwar", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 20", target: "100%" }
      ] },
      { id: "e26408", code: "26408", name: "Jasleen Kaur", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26160", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 9", target: "100%" }
      ] },
      { id: "e30145", code: "30145", name: "Kushagra Kumar", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Placements", managerId: "e26160", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 6", target: "100%" }
      ] },
      { id: "e30283", code: "30283", name: "Saksham Dutt", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26160", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 6", target: "100%" }
      ] },
      { id: "t12", code: "TBH", name: "Open role", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26160", empType: "Open role", kras: [] },
      { id: "e26200", code: "26200", name: "Anurag Yadav", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 24", target: "100%" }
      ] },
      { id: "e27412", code: "27412", name: "Pragati Gupta", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26200", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 8", target: "100%" }
      ] },
      { id: "e27437", code: "27437", name: "Ajaya Kaushik", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26200", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 8", target: "100%" }
      ] },
      { id: "e28538", code: "28538", name: "Vibhuti Singh", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26200", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 8", target: "100%" }
      ] },
      { id: "e30562", code: "30562", name: "Sourav Majumder", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26200", empType: "Full-time", kras: [] },
      { id: "t13", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e26200", empType: "Open role", kras: [] },
      { id: "e29045", code: "29045", name: "Akhil Krishna Gupta", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 24", target: "100%" }
      ] },
      { id: "e29380", code: "29380", name: "Vansh Pratap Singh", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29045", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 6", target: "100%" }
      ] },
      { id: "e29695", code: "29695", name: "Koshlendra Singh", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29045", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 6", target: "100%" }
      ] },
      { id: "e30523", code: "30523", name: "Shivangi Dwivedi", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29045", empType: "Full-time", kras: [] },
      { id: "t14", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29045", empType: "Open role", kras: [] },
      { id: "e29233", code: "29233", name: "Ali Zein Alabdin Qeddo", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International Full time offers Target : 25 (13 of his own)", target: "100%" }
      ] },
      { id: "e28848", code: "28848", name: "Twinkle Kodwani", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29233", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International Full time offers Target : 12", target: "100%" }
      ] },
      { id: "e29890", code: "29890", name: "Ayushi singh", title: "Senior Executive", dept: "d2", bu: "PG Programme", subDept: "Placements", managerId: "e29233", empType: "Full-time", kras: [
        { title: "Operations", metric: "All student and other ops", target: "50%" },
        { title: "Career Outreach", metric: "Meetings with companies that are hiring Target : 38-42 in a month", target: "50%" }
      ] },
      { id: "e29647", code: "29647", name: "Amit Kumar", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 25", target: "100%" }
      ] },
      { id: "e27952", code: "27952", name: "Sidhartha Gautam Bal", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29647", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 9", target: "100%" }
      ] },
      { id: "e28080", code: "28080", name: "Zubair Mohammed Warsi", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29647", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 9", target: "100%" }
      ] },
      { id: "e28180", code: "28180", name: "Nitika Wadhwa", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29647", empType: "Full-time", kras: [
        { title: "Career Outreach", metric: "C6 International + International Full time offers Target : 7", target: "100%" }
      ] },
      { id: "e30561", code: "30561", name: "Sanjukta Mukherjee", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29647", empType: "Full-time", kras: [] },
      { id: "t11", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e29647", empType: "Open role", kras: [] },
      { id: "e30223", code: "30223", name: "Aastha Arora", title: "Deputy Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Full-time", kras: [
        { title: "International Planning, Strategy and Operations for Community", metric: "High-Impact Events - 3 domestic and 1 international: masterclasses, CXO dinners, and engaging corporate events Target : 4 * Social Media Collaboration - Work with Divyam’s team to create…", target: "100%" }
      ] },
      { id: "e30486", code: "30486", name: "Vedika Kanodia", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e30223", empType: "Full-time", kras: [] },
      { id: "t16", code: "TBH", name: "Open role", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Community Engagement", managerId: "e30223", empType: "Open role", kras: [] },
      { id: "e30578", code: "30578", name: "Vinayak Chowdhri", title: "Deputy Director", dept: "d2", bu: "PG Programme", subDept: "Placements", managerId: "e27613", empType: "Full-time", kras: [] },
      { id: "t6", code: "TBH", name: "Open role", title: "Deputy Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Open role", kras: [] },
      { id: "t7", code: "TBH", name: "Open role", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Open role", kras: [] },
      { id: "t8", code: "TBH", name: "Open role", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Open role", kras: [] },
      { id: "t9", code: "TBH", name: "Open role", title: "Deputy Director", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Open role", kras: [] },
      { id: "t10", code: "TBH", name: "Open role", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Outreach", managerId: "e27613", empType: "Open role", kras: [] },
      { id: "e27682", code: "27682", name: "Shikhar Mahajan", title: "Associate Director", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Leaderships", managerId: "vpg", empType: "Full-time", kras: [
        { title: "Program Portfolio Ownership (End-to-End)", metric: "â€¢ Own overall program architecture across pre-orientation, orientation, immersions â€¢ Ensure tight stitching across partnerships, ops, academics, and sales â€¢ Act as final escalation…", target: "20%" },
        { title: "People & Vertical Leadership", metric: "â€¢ Set direction, KRAs, and success metrics for direct reportees â€¢ Coach and unblock leaders across Partnerships, Program Experience, and Sales Ops â€¢ Build ownership-driven…", target: "20%" },
        { title: "New Program / Course Creation", metric: "â€¢ Identify white spaces for new programs â€¢ Lead zero-to-one program ideation, validation, and positioning â€¢ Oversee pilots and decide scale vs kill â€¢ Ensure programs are…", target: "25%" },
        { title: "Sales Enablement", metric: "â€¢ Plan and own annual cohort calendar â€¢ Scale cohorts without compromising quality â€¢ Align sales, ops, and partnerships to throughput targets â€¢ Cohorts executed per year â€¢ Average…", target: "15%" },
        { title: "Immersion Playbook", metric: "â€¢ Build institutional feedback systems across cohorts and partners â€¢ Drive systemic improvements program-on-program â€¢ Create playbooks for repeatability and scale â€¢ Feedback…", target: "20%" }
      ] },
      { id: "e27446", code: "27446", name: "Nikhil", title: "Senior Manager - II", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Sales & Marketing", managerId: "e27682", empType: "Full-time", kras: [
        { title: "Sales Strategy & Sales Operations", metric: "â€¢ Act as strategic advisor to education sales team â€¢ Set up and manage interview pipelines and calendars â€¢ Own sales data reporting, dashboards, and hygiene â€¢ Standardize sales…", target: "25%" },
        { title: "Marketing", metric: "â€¢ Ideate and strategise on TOFU Campaigns â€¢ Digital Marketing Deliverables - Statics & Videos â€¢ Mid Funnel and Bottom of the funnel Conversion events â€¢ Create Social Media Strategy", target: "20%" },
        { title: "Central Team enablement", metric: "â€¢ Act as central point of coordination for Design, Marketing & Ops â€¢ Translate ideas into briefs, timelines, and execution plans â€¢ Track execution across teams and vendors â€¢ Ensure…", target: "20%" },
        { title: "Program Curation & New Initiative Support", metric: "â€¢ Assist in ideation, research, and structuring of new programs â€¢ Build concept notes, decks, brochure, website & GTM outlines â€¢ Coordinate pilots and early execution â€¢ Track…", target: "20%" },
        { title: "Vice Captain Roles", metric: "â€¢ Act as force multiplier for leadership bandwidth â€¢ Anticipate needs, prepare data, decks, and talking points â€¢ Track priorities, follow-ups, and decisions â€¢ Handle ambiguity with…", target: "15%" }
      ] },
      { id: "e28306", code: "28306", name: "Nigam Sharma", title: "Senior Executive", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Content & Admin", managerId: "e27446", empType: "Full-time", kras: [] },
      { id: "e30286", code: "30286", name: "Vanshika Singh", title: "Senior Executive", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e27446", empType: "Full-time", kras: [] },
      { id: "e28735", code: "28735", name: "Arjeeta Singhvi C", title: "Senior Manager - II", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Partnerships", managerId: "e27682", empType: "Full-time", kras: [
        { title: "Partner Acquisition & Conversion", metric: "â€¢ Identify and close relevant industry partners for immersions â€¢ Clearly articulate PGP Bharat value proposition to partners â€¢ Set mutual expectations on time, effort, learner…", target: "30%" },
        { title: "Partner Experience & Repeat Engagement", metric: "â€¢ Own partner relationship end-to-end â€¢ Ensure smooth execution and professional engagement on-ground â€¢ Capture partner feedback post-immersion â€¢ Build long-term, repeat…", target: "40%" },
        { title: "New City Development", metric: "Create new cities for strategic expansion of the programme", target: "30%" }
      ] },
      { id: "e29661", code: "29661", name: "Akshat Kher", title: "Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e28735", empType: "Full-time", kras: [
        { title: "Partner sourcing & acquisition", metric: "", target: "20%" },
        { title: "Partnership operations & vendor management", metric: "", target: "20%" },
        { title: "Internal synergy & cross-functional alignment", metric: "", target: "20%" },
        { title: "Collateral & communication ownership", metric: "", target: "20%" },
        { title: "New city development & strategic expansion", metric: "", target: "20%" }
      ] },
      { id: "e28897", code: "28897", name: "Abhinav Jindal", title: "Senior Manager - II", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Delivery", managerId: "e27682", empType: "Full-time", kras: [
        { title: "Pre-Orientation Program Design & Execution", metric: "â€¢ Conceptualize and deliver pre-orientation & Orientation events â€¢ Curate themes, formats, and guest speakers â€¢ Drive learner engagement and readiness â€¢ Capture and synthesize…", target: "15%" },
        { title: "Onboarding & Quality Check", metric: "â€¢ Facilitate Interviews of students â€¢ End to end Onboarding of students with relevant details required for all stakeholders â€¢ Own quality of students", target: "20%" },
        { title: "e2e Immersion Experience & Cross-Team Stitching", metric: "â€¢ Act as stitcher between operations, partnerships, brand and faculty â€¢ Ensure Timely Delivery of assignments,ODCs, Workshops â€¢ Proactively manage learner experience across states â€¢…", target: "35%" },
        { title: "Feedback, NPS & Continuous Improvement", metric: "â€¢ Design structured feedback systems (pulse, NPS) â€¢ Diagnose feedback into themes â€¢ Implement real-time improvements â€¢ Create post-cohort learning roadmap", target: "20%" },
        { title: "Ownership & Stakeholder Management", metric: "â€¢ Demonstrate end-to-end ownership â€¢ Anticipate risks and communicate proactively â€¢ Handover to the academics team for Acads delivery with all necessary collaterals", target: "10%" }
      ] },
      { id: "e29109", code: "29109", name: "Simran Kour", title: "Program Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "Events & Operations", managerId: "e28897", empType: "Full-time", kras: [
        { title: "Pre-Orientation Program Design & Execution", metric: "â€¢ Raise all procurement requirements for Orientation on Orbit >= 15 days before need date â€¢ Track approval status and follow up on delays â€¢ Ensure sunboard printing, banners…", target: "20%" },
        { title: "Onboarding & Quality Check", metric: "â€¢ Verify pre-immersion readiness for all students before each hub: passport, travel insurance, health forms, emergency contacts confirmed â€¢ Maintain a live incident log across all hubs…", target: "10%" },
        { title: "e2e Immersion Experience & Cross-Team Stitching", metric: "â€¢ Own end-to-end logistics for all Term 2 immersion hubs (travel, stay, transfers, entry coordination) â€¢ Prepare and share city-wise ops briefs with the operations team >= 10 days…", target: "35%" },
        { title: "Feedback, NPS & Continuous Improvement", metric: "â€¢ Audit reflection session quality across all hubs using student feedback scores â€¢ Identify hubs where reflection sessions underdelivered and document root causes â€¢ Escalate quality…", target: "15%" },
        { title: "Ownership & Stakeholder Management", metric: "â€¢ Own the immersion-phase documentation: compile hub-wise learnings, issues, partner notes, student performance data â€¢ Prepare a handover package for the academics team at the end of…", target: "20%" }
      ] },
      { id: "e29134", code: "29134", name: "Taipy Dandapath", title: "Program Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e28897", empType: "Full-time", kras: [
        { title: "Pre-Orientation Program Design & Execution", metric: "â€¢ Raise all procurement requirements for Orientation on Orbit >= 15 days before need date â€¢ Track approval status and follow up on delays â€¢ Ensure sunboard printing, banners…", target: "20%" },
        { title: "Onboarding & Quality Check", metric: "â€¢ Verify pre-immersion readiness for all students before each hub: passport, travel insurance, health forms, emergency contacts confirmed â€¢ Maintain a live incident log across all hubs…", target: "10%" },
        { title: "e2e Immersion Experience & Cross-Team Stitching", metric: "â€¢ Own end-to-end logistics for all Term 2 immersion hubs (travel, stay, transfers, entry coordination) â€¢ Prepare and share city-wise ops briefs with the operations team >= 10 days…", target: "35%" },
        { title: "Feedback, NPS & Continuous Improvement", metric: "â€¢ Audit reflection session quality across all hubs using student feedback scores â€¢ Identify hubs where reflection sessions underdelivered and document root causes â€¢ Escalate quality…", target: "15%" },
        { title: "Ownership & Stakeholder Management", metric: "â€¢ Own the immersion-phase documentation: compile hub-wise learnings, issues, partner notes, student performance data â€¢ Prepare a handover package for the academics team at the end of…", target: "20%" }
      ] },
      { id: "e29238", code: "29238", name: "Ayush Harsh", title: "Senior Program Manager - II", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e27682", empType: "Full-time", kras: [] },
      { id: "e29758", code: "29758", name: "Divansh Arora", title: "Program Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e29238", empType: "Full-time", kras: [
        { title: "Student Coordination & Learner Support", metric: "â€¢ Own learner communication lifecycle pre, during and post immersion â€¢ Resolve student queries proactively â€¢ Track learner readiness, attendance and participation â€¢ Ensure smooth…", target: "20%" },
        { title: "General Communications Management", metric: "â€¢ Manage all cohort-wide communication across channels â€¢ Ensure clarity, consistency and timeliness of updates â€¢ Coordinate reminder systems and information flow â€¢ â‰¥ 95%…", target: "20%" },
        { title: "Operations Coordination & On-ground Readiness", metric: "â€¢ Coordinate closely with ops team for travel, stay and movement execution â€¢ Ensure all operational updates are reflected to learners â€¢ Escalate and solve on-ground issues rapidly â€¢…", target: "40%" },
        { title: "Learner Experience & Engagement", metric: "â€¢ Maintain positive cohort energy and responsiveness â€¢ Identify burnout, disengagement or confusion early â€¢ Support immersion readiness and transition management â€¢ â‰¤ 15% learners…", target: "20%" }
      ] },
      { id: "e29809", code: "29809", name: "Pratik Chandel", title: "Program Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e29238", empType: "Full-time", kras: [
        { title: "Student Coordination & Learner Support", metric: "â€¢ Own learner communication lifecycle pre, during and post immersion â€¢ Resolve student queries proactively â€¢ Track learner readiness, attendance and participation â€¢ Ensure smooth…", target: "15%" },
        { title: "Operations Coordination & On-ground Readiness", metric: "â€¢ Coordinate closely with ops team for travel, stay and movement execution â€¢ Ensure all operational updates are reflected to learners â€¢ Escalate and solve on-ground issues rapidly â€¢…", target: "30%" },
        { title: "LMS Management & Learning Operations", metric: "â€¢ Own LMS structure, uploads and learner access â€¢ Ensure assignments/resources are updated on time â€¢ Resolve LMS-related learner issues â€¢ 100% learning materials uploaded before…", target: "20%" },
        { title: "Media Team & Design team Coordination", metric: "â€¢ Coordinate media capture across immersions â€¢ Ensure timely collection and organization of content â€¢ Follow-up with brand/media teams for execution/posting â€¢ Coordinate all design…", target: "20%" },
        { title: "Faculty & MR Coordination", metric: "â€¢ Coordinate with faculty and MR team for workshops/reflections/orientation sessions â€¢ Ensure faculty logsitics is conducted smoothly â€¢ Manage schedules, requirements and…", target: "15%" }
      ] },
      { id: "e29597", code: "29597", name: "Satyam Anand", title: "Senior Manager - II", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e27682", empType: "Full-time", kras: [
        { title: "Co-Creation of High-Value Immersion Agenda", metric: "â€¢ Co-create immersion agenda with partners (clarity, relevance, depth) â€¢ Ensure agenda aligns with learning objectives and challenge assignments â€¢ Push partners beyond \"company…", target: "40%" },
        { title: "Learner Value Delivery at Partner Sites", metric: "â€¢ Ensure students receive high-learning, high-context exposure â€¢ Act as escalation point for partner-side issues impacting learners â€¢ Ensure clarity of expectations for students…", target: "50%" },
        { title: "Stakeholder Briefing", metric: "â€¢ Ensure students receive high-learning, high-context exposure by keeping faculty up to date â€¢ Delivery of content for both reflections & Workshops", target: "10%" }
      ] },
      { id: "e29935", code: "29935", name: "Anjali Choudhary", title: "Manager", dept: "d6", bu: "PG Programme (Bharat)", subDept: "New Initiatives (Bharat)", managerId: "e29597", empType: "Full-time", kras: [
        { title: "Agenda Research & Partner Prep", metric: "Assist in build Immersion briefs for Partners; maintain past agenda database (with WATCH references); track partner commitments Brief submitted â‰¥ 15 days before Hub Immersion Date", target: "20%" },
        { title: "Pre-Immersion Student Comms", metric: "Draft & distribute student pre-reads; create preparation guides; track acknowledgements 100% students receive note on workshop day; preparedness score â‰¥ 4.0/5 (response during Hub…", target: "20%" },
        { title: "Faculty Briefing Support", metric: "Co-compile briefing notes; Schedule Faculty Alignment calls; document action points Packs sent â‰¥ 7 days before; 100% calls confirmed; action points shared within 24 hrs", target: "20%" },
        { title: "Post-Immersion Docs & Feedback", metric: "Align with delivery teams to collect feedback as per student segments; compile NPS/rating reports; update Partner Profiles Feedback coverage â‰¥ 90%; report delivered within 5 days; Partner…", target: "20%" },
        { title: "ODC Coordination & Tracking", metric: "Maintain ODC tracker; distribute briefs on time; collect sample submissions; maintain ODC library 100% on-time distribution; samples from â‰¥ 30% cohort; library updated within 1 week", target: "20%" }
      ] },
      { id: "e27746", code: "27746", name: "Saksham Kumar Kotiya", title: "Associate Director", dept: "d5", bu: "PG Programme", subDept: "Leaderships", managerId: "vpg", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "1. Finale - Rise Target: Arrange a finale with 20+ creators", target: "5%" },
        { title: "Dropshipping Challenge", metric: "1. DS Fair - PGP Rise C7 2. DS Workshops - PGP Rise C7 3. DS Workshops - PGP BHARAT C2 4. DS Fair - PGP BHARAT C2 5. DS Checkins - PGP BHARAT C2 6.DS Checkins - PGP Rise C7 7. DS Checkins …", target: "15%" },
        { title: "VIP", metric: "1. Pre-seed demo day for Bharat C1 2. Pre-seed demo day for Rise C6 3. Demo day - Rise C4 & C5 4. FF evaluations for C6", target: "15%" },
        { title: "Founder's Fellowship", metric: "1. Monthly webinars 2. Founders' annual event 3. Quoterly FF applications", target: "5%" },
        { title: "MUIF", metric: "1. Start MUIF onboarding for C7 TBM. 2. 2 sessions a month", target: "5%" },
        { title: "Other programs", metric: "1. Summer school 2. Orientation for Rise, SBM, Bharat 3. D2C Bootcamp", target: "5%" },
        { title: "Student Mentorship", metric: "Mentorships", target: "10%" },
        { title: "MU Ventures", metric: "Roundtables Angel onboarding Partnerships", target: "10%" },
        { title: "CMT Specific Initiatives for Outclass", metric: "Content Creation Multibagger Challenge Capstone Project Founder's Fellowship Orientation + Admissions Student Mentorship MU Ventures CMT Specific Initiatives", target: "15%" },
        { title: "Industry Visits", metric: "1. Arrange visits", target: "5%" },
        { title: "Additional Initiatives", metric: "1. Amazon handbook", target: "5%" },
        { title: "EBAP", metric: "Course on Finance and Investment", target: "5%" }
      ] },
      { id: "e28336", code: "28336", name: "Mathili Sharma", title: "Senior Program Manager - I", dept: "d5", bu: "PG Programme", subDept: "Program Operations", managerId: "e27746", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "Schedule classes and coordinate the academic calendar for the new batch. Manage student communications and operational coordination.", target: "15%" },
        { title: "Dropshipping Challenge", metric: "Campus booking Conduct workshops for Dropshipping challenge Communication to students and poster designing Align Ops team to manage session and workshops Finance Payments Dropshipping mela…", target: "15%" },
        { title: "VIP", metric: "1. Pre seed workshops 2. Pre seed Demo day 3. Pre seed launch PPT", target: "10%" },
        { title: "Founder's Fellowship", metric: "Plan and execute monthly Founder Fellowship webinars. Ensure timely disbursement of Founder Fellowship stipends. Manage the Quarterly Founder Fellowship application cycle. Coordinate…", target: "20%" },
        { title: "MUIF", metric: "MUIF Sessions", target: "10%" },
        { title: "MU Ventures", metric: "1. Onboarding VC mentors 2. Onbvoarding of Angel investors 3. MUV Application form roll out", target: "10%" },
        { title: "Industry Visits", metric: "Arrange visits", target: "10%" },
        { title: "Quarterly calendar + Finances", metric: "Quaterly calender update Prize money raise on the orbit Vendor Payments Grant Payments Founder fellowship payments", target: "10%" }
      ] },
      { id: "e28604", code: "28604", name: "Anshu Mehta", title: "Manager", dept: "d5", bu: "PG Programme", subDept: "Growth & Strategy", managerId: "e27746", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "Advanced Content Curriculum *Creator Branding *Thought Leadership *Program Optimization *Outcome Measurement Target: Advanced Content Curriculum — Advanced curriculum module finalized: 1…", target: "11%" },
        { title: "Multibagger Challenge", metric: "Challenge Evolution *Investment Frameworks *Learning Outcomes *Jury Experience Target: Challenge Evolution — Challenge structure revision finalized: 1; Challenge playbook built: 1…", target: "11%" },
        { title: "Capstone Project", metric: "Capstone Innovation *Industry Integration *Academic Excellence *Portfolio Development Target: Capstone Innovation — Capstone framework revision finalized: 1 Industry Integration —…", target: "10%" },
        { title: "Orientation + Admissions", metric: "Cohort Experience Design *Handbook Development *Learning Journey *Curriculum Alignment Target: Cohort Experience Design — Onboarding/orientation satisfaction score: >4.5 Handbook…", target: "5%" },
        { title: "Student Mentorship", metric: "Mentorship Quality *Student Success *Career Readiness *Performance Reviews Target: Mentorship Quality — Hours spent with students: 45-55; Students covered with deep 1:1s: 100% of active…", target: "26%" },
        { title: "MU Ventures", metric: "Startup Ecosystem *Investment Partnerships *Founder Network *Strategic Initiatives Target: Startup Ecosystem — New ecosystem touchpoints added: 3-5 Investment Partnerships —…", target: "16%" },
        { title: "CMT Specific Initiatives", metric: "New Program Development *Curriculum Innovation *Learning Experience Design *Flagship Initiatives *Academic IP *Building podcast pipeline Target: New Program Development — US Equities…", target: "21%" }
      ] },
      { id: "e29345", code: "29345", name: "Papiya Nandi", title: "Program Associate", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e28604", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "Creator Community Management: â€¢ Manage creator check-ins and communication across active cohorts â€¢ Ensure smooth student communication and tracking for content assignments Creator…", target: "12%" },
        { title: "Multibagger Challenge", metric: "Session & Participant Operations: â€¢ Execute all sessions, assignments, and participant check-ins for the Multibagger Challenge across cohorts â€¢ Ensure smooth student communication and…", target: "15%" },
        { title: "Capstone Project", metric: "Capstone Lifecycle Management: â€¢ Launch, track, evaluate, and close all capstone assignments across CMT cohorts (C1, C2, C3) â€¢ Ensure timely LMS updates throughout the lifecycle C1 –…", target: "10%" },
        { title: "Overall OPS", metric: "Cross-Cohort Operations: â€¢ Manage day-to-day operations across C1, C2 & C3 — schedules, LMS, and master sheets Faculty Coordination: â€¢ Coordinate faculty scheduling and communication…", target: "12%" },
        { title: "Student Mentorship / Engagement", metric: "Check-in Operations: â€¢ Conduct regular student check-ins across cohorts â€¢ Resolve learner concerns as they arise Completion Rate Improvement: â€¢ Improve assignment and capstone…", target: "12%" },
        { title: "Upcoming Events", metric: "Cohort Launch & Orientation: â€¢ Execute Cohort 3 kickoff/orientation on 24th July with end-to-end operational support â€¢ Roll out updated handbooks and complete onboarding documentation…", target: "10%" },
        { title: "CMT Report / Documents", metric: "LMS & Tracker Maintenance: â€¢ Maintain LMS, trackers, dashboards, attendance, grades, and documentation with complete accuracy Grade Closure: â€¢ Ensure timely closure of term-end grades…", target: "8%" },
        { title: "Stakeholder & Faculty Coordination", metric: "C1 – WMF & Term 6 Onboarding: â€¢ Follow up with faculty for Wealth Management Firm (WMF) â€¢ Term 5 is closed; finalize and onboard masters for Term 6 C2 – Term 3/4 Coordination: â€¢…", target: "8%" },
        { title: "Process Improvement", metric: "Turnaround Time & Learner Experience: â€¢ Identify and implement operational improvements to reduce turnaround time and improve learner experience C3 Launch Excellence: â€¢ Plan and execute…", target: "5%" },
        { title: "MU Ventures", metric: "Venture Operations: â€¢ Schedule and coordinate investor/founder meetings â€¢ Maintain the venture pipeline tracker Partner Coordination: â€¢ Maintain and update the startup/partner…", target: "4%" },
        { title: "CMT Specific Initiatives", metric: "Program Rollout: â€¢ Coordinate logistics for the US Equities Program launch (curriculum already built) â€¢ Support rollout of any other new program launches this quarter Event Execution…", target: "4%" }
      ] },
      { id: "e29291", code: "29291", name: "Shweta Khandelwal", title: "Program Associate", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Full-time", kras: [] },
      { id: "e29555", code: "29555", name: "Naveen Balaji", title: "General Manager", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Full-time", kras: [
        { title: "Aggregators launch of 1st cohort of Food lab", metric: "3 brands to go live on aggregators with a strealimed operations - SushiNoqu, Sals, The Bowl Truth. Negotiate contract with aggregators; Get onboarding done for the brands; Define GTM for…", target: "30%" },
        { title: "YLC Cloud Kitchen Challenge Completion", metric: "Get kitchen infra in place to accommodate C6 YLC. Launch C6 YLC Cloud Kitchen challenge; finalise workshops and mentors for CK challenge; Sucussefully drive out the stage 1 for all C6 YLC…", target: "30%" },
        { title: "Brand & Content", metric: "Launch the insta page for food lab (name: kitchens .mu); Post 2 brands reels with CTA; build a calendar for active posting on page that attracts followers; collab with main MU page; collab…", target: "25%" },
        { title: "Pipeline of promising brands for Food Lab", metric: "Create a strong pipeline of brands to enter the food lab program. Source ideas from the currently active programs and cohorts and alums; Identify students founders of MU with high intent…", target: "15%" }
      ] },
      { id: "eC0045", code: "C0045", name: "Ankit Tiwari", title: "Consultant", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e29555", empType: "Consultant", kras: [] },
      { id: "e29650", code: "29650", name: "Lovish Bansal", title: "General Manager", dept: "d5", bu: "PG Programme", subDept: "Student Experience", managerId: "e27746", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "1. Finale - Rise C6 2. Content Creation Checkins - Rise C6", target: "10%" },
        { title: "Dropshipping Challenge", metric: "1. DS Fair - PGP Rise C7 2. DS Workshops - PGP Rise C7 3. DS Checkins - PGP Rise C7 4. DS Checkins - SBM C3 5. DS Fair - SBM C3", target: "20%" },
        { title: "VIP", metric: "1. Pre-seed demo day for Rise C6 2. Demo day - Rise C4 & C5", target: "20%" },
        { title: "Founder's Fellowship", metric: "1. Shortlist and assist teams for Founder Fellowship", target: "10%" },
        { title: "Orientation + Admissions Webinar", metric: "1. Orientation for Rise, SBM 2. Admissions webinars", target: "10%" },
        { title: "Student Mentorship", metric: "1. Mentorships", target: "30%" }
      ] },
      { id: "eC0060", code: "C0060", name: "Sumit Vijapure", title: "Consultant", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Consultant", kras: [] },
      { id: "e27650", code: "27650", name: "Vanshika Goyal", title: "Senior Program Manager - I", dept: "d5", bu: "PG Programme", subDept: "Program Operations", managerId: "eC0060", empType: "Full-time", kras: [
        { title: "Dropshipping Challenge", metric: "1. Dropshipping sessions to be executed for all the 8 sections with different mentors, different timings. 2. Mneotrs to be finalised for the sessions and coordination with the mentors 3…", target: "10%" },
        { title: "Cloud Kitchen Challenge", metric: "1. Cloud Kitchen challenge handbook to be redesigned 2. Scheduling and executing the cloud kitchen challenge workshop for the students 3. Cloud kitchen Demo day 4. Sorting and aligning the…", target: "10%" },
        { title: "VIP", metric: "1. VIP Challenge Launch for the new cohort 2. Launch deck and handbook to be made for the sessions. 3. Sending requirement and coordinating for the masters requirement for all the VIP…", target: "10%" },
        { title: "Masters' Union Summit ( The road show)", metric: "1. Worksing on the document and collaterals to be out for the event 2. Getting audience and investors for the audience 3. Cooridinating the Attendees, Participants and other people to make…", target: "10%" },
        { title: "Student Mentorship", metric: "1. Blocking slogts for students mentorship for the outclass managers and saksham", target: "10%" },
        { title: "MU Ventures", metric: "", target: "10%" },
        { title: "Additional Events", metric: "1. Event ops and coordination for any other events with externals 2. Coordination with external partners etc.", target: "10%" },
        { title: "Industry Visits", metric: "", target: "10%" },
        { title: "Finance", metric: "", target: "10%" },
        { title: "Data Collation", metric: "1. Sharing Data with the different teams, Branding, Marketing, Career Prep, Acceradation, etc.", target: "10%" }
      ] },
      { id: "e29472", code: "29472", name: "Sanya Manchanda", title: "Program Associate", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27650", empType: "Full-time", kras: [
        { title: "Investor Meetings", metric: "1.Coordinated and aligned one-on-one meetings between students and investors. 2.Managed investor meeting schedules and ensured seamless coordination with all stakeholders. 3.Blocked…", target: "15%" },
        { title: "Dropshipping Challenge", metric: "1. Dropshipping Handbook TBM C7 and YLC C2 2. Session scheduling and campus booking 3. LMS Course creation and students addition for d YLC C2 & HROS. 4. Dropshipping workshop ops alignment…", target: "15%" },
        { title: "Communications", metric: "1.Resolved student queries through email by providing timely and accurate support on academic and operational concerns. 2. Addressed grade discrepancies and other student issues by…", target: "15%" },
        { title: "VIP", metric: "1. VIP - Pre seed challenge Launch 2. VIP Pre-seed workshops and sessions 3. Scheduling and execution 4. VIP Pre- seed Demo Day", target: "15%" },
        { title: "MU Ventures", metric: "1. VC and Angel list to create for MUV", target: "10%" },
        { title: "Cloud Kitchen Challenge", metric: "1. Upload assignments and learning materials for the Cloud Kitchen Challenge. 2.Manage assignment uploads and course content for the YLC course. 3. Upload sessions, assignments, and…", target: "10%" },
        { title: "Industry Visits", metric: "1. Rolling our communications 2. Aligning operations 3.Students coordination on the visit day", target: "10%" }
      ] },
      { id: "e29883", code: "29883", name: "Nancy Massey", title: "Associate Program Manager", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27650", empType: "Full-time", kras: [
        { title: "Dropshipping Challenge", metric: "1. Dropshipping Handbook C7 and YLC C2, share comms 2. Dropshipping assignment creations and session creation on LMS for TBM and SMG. 3. Team formation on the LMS 4. Align class ops for all…", target: "20%" },
        { title: "VIP", metric: "1. GTM Assignments and evaluations 2. GTM Grades and gradesheet creation 3. GTM workshops 4. Assignment creation on LMS. 5. Uploading sessions on the LMS. Target: - GTM Assignment…", target: "15%" },
        { title: "Orientation + Admissions Webinar + Startup weekend", metric: "1. Organised webinars and workshops for TBM 27, YlC 28, SMG and HROS. 2. Event Execution. 3. Communication. Target: - Will be working on the duties for the orienatation duties, for overall…", target: "20%" },
        { title: "Student Mentorship", metric: "1. Aligning mentor session with the students. Target: - Connecting students with the mentor for guidance and better idea for their startups.", target: "10%" },
        { title: "Food Lab", metric: "1. Creating assignments for TBM and SMG on Lms. 2. Creating sessions for TBM and YLC. 3. Creating groups on LMS. Target: - Uploading assignments and session on LMS for clear visibility. …", target: "15%" },
        { title: "Industry Visits", metric: "1. Rolling our communications 2. Aligning operations 3. Students coordination on the visit day Target: - Rolling out communications and forms with the students and rolling out shortlisting…", target: "20%" }
      ] },
      { id: "e29390", code: "29390", name: "Disha Malhotra", title: "Program Associate", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "eC0060", empType: "Full-time", kras: [
        { title: "Content Creation", metric: "1.Spearheaded the integration and execution of the brand hackathon, driving guest outreach and end-to-end event operations 2.Authored a comprehensive, end-to-end content creation…", target: "20%" },
        { title: "Dropshipping Challenge", metric: "For PGP Bharat: 1. Led end-to-end LMS operations for Cohorts 1 and 2 2. Managed assignment cycles and grading workflows for Cohort 1 3. Directed all module-specific communications for…", target: "20%" },
        { title: "VIP", metric: "1.Designed physical invites for the guests 2.Co-rdinated with ops for printing and delivery of the invites 3. Demo Day invitations to be send out 4. Demo Day Finale Operations 5. Demo Day…", target: "20%" },
        { title: "Orientation + Admissions Webinar + Startup weekend", metric: "1. Startup Weekend x 2 duty", target: "20%" },
        { title: "MU Ventures", metric: "1. Onboarding VC mentors 2. Onbvoarding of Angel investors 3. MUV Application form roll out", target: "20%" }
      ] },
      { id: "e29973", code: "29973", name: "Saloni Gupta", title: "Manager", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "eC0060", empType: "Full-time", kras: [
        { title: "Dropshipping Challenge", metric: "", target: "25%" },
        { title: "VIP", metric: "", target: "10%" },
        { title: "Founder's Fellowship", metric: "- Arrange 3 workshops for FF students by Industry mentors - Do a founders' retreat at Jalandhar with 50 founders - Open applications for FF for alums & shortlist them", target: "5%" },
        { title: "MUIF", metric: "", target: "5%" },
        { title: "Orientation + Admissions Webinar + Startup weekend", metric: "", target: "10%" },
        { title: "Student Mentorship", metric: "- Mentor students for atleast 300 hours across programs", target: "15%" },
        { title: "MU Ventures", metric: "- Do 10+ partnerships with IITs, NITs & BITS - Get 30 angel investors on board - Update the MUV brochure - Conduct 2 IC meets formally with the board - Onboard 4 members in advisory council…", target: "15%" },
        { title: "Industry Visits", metric: "- Arrange 3 industrial visits at GMR-IGI Airport, Canton Fair - China & Shiprocket Warehouse", target: "5%" },
        { title: "Additional Initiatives", metric: "", target: "10%" }
      ] },
      { id: "e30393", code: "30393", name: "Plash Kunj", title: "Executive", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "eC0060", empType: "Full-time", kras: [] },
      { id: "e30450", code: "30450", name: "Saurabh Petkar", title: "Executive", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "eC0060", empType: "Full-time", kras: [] },
      { id: "t2", code: "TBH", name: "Open role", title: "Program Associate", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "eC0060", empType: "Open role", kras: [] },
      { id: "e30067", code: "30067", name: "K Vishnu Selvam", title: "Manager", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Full-time", kras: [
        { title: "MUIF", metric: "Design and run a structured selection process for the MUIF student research team * Define team roles, coverage areas and reporting cadence * Set IC meeting cadence, quorum and decision…", target: "20%" },
        { title: "MUV", metric: "Assist Anshu in end-to-end organisation of a deep-tech mixer for founders and VCs in Bangalore * Reach out to and form partnerships with the incubators of IIT Madras, IIM Bangalore and IIM…", target: "20%" },
        { title: "Social Entrepreneurship Challenge", metric: "Finalise the concept and format for the social-entrepreneurship challenge in education and livelihoods * Frame the kickoff masterclass for the challenge (will reach out to Prof. Devi Vijay…", target: "20%" },
        { title: "Intraday Trading Desk A - Index Options", metric: "Run the live pilot of the systematic intraday volatility desk (NSE index options via Kite Connect) * Maintain correct execution plumbing: margin gating, executable exit marks and calibrated…", target: "20%" },
        { title: "Company Analysis Log", metric: "Maintain the analysis log as the system of record for all company research requested by Saksham (structured Notion database) * Produce deep-dive analyses on listed Indian companies covering…", target: "20%" }
      ] },
      { id: "e30259", code: "30259", name: "Ravisha Sarupria", title: "Senior Manager - I", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Full-time", kras: [
        { title: "Founder Brand Consulting", metric: "Brand Strategy Positioning & Messaging Naming Go-to-Market Guidance Work closely with founders to shape their brand strategy, define positioning and messaging, support naming and GTM…", target: "12.5%" },
        { title: "Founder Office Hours & Mentorship", metric: "1:1 Mentorship Brand Reviews Founder Support Conduct regular office hours and mentoring sessions, help founders navigate branding challenges, review work-in-progress and provide actionable…", target: "12.5%" },
        { title: "Brand Education", metric: "Session Design Workshop Delivery Brand Awareness Design and deliver the 0â†’1 Branding session, build awareness of branding within Outclass, and create simple learning resources that…", target: "12.5%" },
        { title: "Brand Frameworks & Resources", metric: "Framework Development Templates & Playbooks Documentation Build practical branding frameworks, templates and playbooks that make it easier for founders to apply branding principles…", target: "12.5%" },
        { title: "MUV Branding", metric: "Brand Strategy Narrative Development Communication Shape the MUV brand by defining its narrative, messaging and communication across key touchpoints, while ensuring consistency as the…", target: "12.5%" },
        { title: "Strategic Initiatives", metric: "Event Strategy Partnership Support Cross-functional Collaboration Support branding and marketing initiatives such as the Foundry event and other strategic projects by working closely with…", target: "12.5%" },
        { title: "Collaboration Across Outclass", metric: "Faculty Collaboration Program Support Design Coordination Partner with faculty, coaches and internal teams to ensure branding inputs are integrated into founder journeys and program…", target: "12.5%" },
        { title: "Brand Practice Development", metric: "Founder Insights Knowledge Building Process Improvement Capture recurring founder challenges, document learnings and continuously refine branding approaches based on feedback and on-ground…", target: "12.5%" }
      ] },
      { id: "t1", code: "TBH", name: "Open role", title: "Senior Manager I", dept: "d5", bu: "PG Programme", subDept: "Outclass", managerId: "e27746", empType: "Open role", kras: [] },
      { id: "e28157", code: "28157", name: "Abhinav Arora", title: "Associate Director", dept: "d2", bu: "PG Programme", subDept: "Leaderships", managerId: "vpg", empType: "Full-time", kras: [
        { title: "Student Success", metric: "Maximize the career placement success of PG program graduates in top-tier companies. * Student participation rate in career prep programs (students who opted-in) * Student feedback score on…", target: "33.340000000000003%" },
        { title: "Student Experience", metric: "Build a strong Alumni relations program at MU and get relevant accreditions for the program * Number of accreditions * Alumni NPS Score", target: "33.33%" },
        { title: "Efficiency and Sustainability", metric: "Ensure efficient delivery of career prep programs", target: "33.33%" }
      ] },
      { id: "e27566", code: "27566", name: "Gopika Kumar", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28157", empType: "Full-time", kras: [] },
      { id: "e27747", code: "27747", name: "Shabnam Khanam", title: "Manager", dept: "d4", bu: "PG Programme", subDept: "Accreditation", managerId: "e28157", empType: "Full-time", kras: [
        { title: "EDAF Accreditation", metric: "Report and feedback comments assimmilation and communication within org Target: 100%", target: "25%" },
        { title: "Next accreditation on roadmap", metric: "Identify and plan the next step of accreditation - EQUIS, BGA etc Target: 100%", target: "25%" },
        { title: "Rankings and awards submissions and oversight", metric: "Apply for eligible rankings/ awards for the institute and also act as a oversight resource for Mansi Target: Atleast 3 awards and/ or 1 national/ intl ranking", target: "25%" },
        { title: "Quality Control setup", metric: "Cross functional communication and work management with various departments to gather, update and record the data as per accreditation requirements Target: 100%", target: "25%" }
      ] },
      { id: "e27825", code: "27825", name: "Vidhu Goel", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Strategic Initiatives", managerId: "e28157", empType: "Full-time", kras: [
        { title: "Student Readiness & Placement Outcome", metric: "Ensure student interview readiness for driving domestic and international placements for PGP program with the agenda of student-role fitment Target: 90%", target: "50%" },
        { title: "New Initiatives", metric: "Achieve departmental efficiency and support student readiness with initiatives expanding across people, processes and technology Target: 90%", target: "25%" },
        { title: "Department Performance & Sustainability", metric: "Bulding a top tier department at the institute equipped with the right culture, efficient processes and enabled with technology Target: 80%", target: "25%" }
      ] },
      { id: "e27781", code: "27781", name: "Sonali", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [
        { title: "Practicum Operations Management", metric: "Manage end-to-end operations for all domain practicums - mentor coordination, scheduling, delivery and student communications/ queries", target: "40%" },
        { title: "Student domain track", metric: "Own student domain preferences and dashboards for domain readiness progress across all domains", target: "30%" },
        { title: "Process Efficiency & New Initiatives", metric: "Implement process automation and tech integrations to improve operational efficiency within the team and for student readiness outcomes", target: "20%" },
        { title: "Cross-Team Support", metric: "Support Career Prep team's core operations with process documentations, logistics coordination and LMP alignment", target: "10%" }
      ] },
      { id: "e29966", code: "29966", name: "Abhay Barari", title: "Associate", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27781", empType: "Full-time", kras: [
        { title: "Practicum Logistics, Operations & Session Coordination", metric: "End-to-end session logistics for practicums: scheduling, venue/virtual setup, attendance tracking, materials distribution, be present for sessions from start to end, on-ground coordination…", target: "40%" },
        { title: "Drive & Materials Readiness for Future Cohorts", metric: "Proactively organise and maintain a 'cohort-ready' drive: session decks, templates, recordings, checklists, equipment lists and a versioned master folder for upcoming cohorts. Target: 100%…", target: "30%" },
        { title: "Ops Support in Career Prep Events & Data Recording / Cleaning for Pods", metric: "Provide operational support for career prep events (scheduling, logistics, participant coordination); collect, record and clean pod-level data to ensure accuracy and readiness for reporting…", target: "10%" },
        { title: "Ticket & Email Management - PGP careerprep", metric: "Triage and resolve incoming queries sent to the PGP careerprep email/ticket queue, maintain inbox hygiene and SLAs, escalate unresolved items. Target: Avg response <24 hrs; â‰¥90% tickets…", target: "20%" }
      ] },
      { id: "e28367", code: "28367", name: "Shubham Gupta", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [
        { title: "Student Participation & Completion", metric: "Ensure students mapped to the pod actively participate in and complete all key domain prep activities across the career prep journey. Target: 85%+ overall completion; 80%+ students maintain…", target: "30%" },
        { title: "Student Performance & Readiness", metric: "Ensure students in the pod are interview-ready and perform well in domain prep. Target: 75%+ students in A+/A/B band; 80%+ students meet quality bar; 100% low PRS students actioned on time", target: "30%" },
        { title: "Pod Excellence & Governance", metric: "Own quality and timely delivery of pod activities including domain panels, practicums, mocks and ensure data hygiene and sufficiency Target: 100% planned activities delivered; maintain 45%+…", target: "20%" },
        { title: "Pod Excellence & Governance", metric: "Ensure active oversight of all pod contributors including internal pod members and external mentors. Drive mentor quality, capacity planning, mentor-to-mentee ratio, and timely…", target: "20%" }
      ] },
      { id: "e28780", code: "28780", name: "Siddharth Jangir", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [
        { title: "Student Participation & Completion", metric: "Ensure students mapped to the pod actively participate in and complete key domain prep activities across the career prep journey. Target: 85%+ overall completion; 80%+ students maintain…", target: "20%" },
        { title: "Student Performance & Readiness", metric: "Ensure students in the pod are interview-ready and perform well in domain prep. Target: 75%+ students in A+/A/B band; 80%+ students meet quality bar; 100% low-PRS students actioned on time", target: "20%" },
        { title: "Pod Excellence & Delivery", metric: "Ensure pod activities are delivered on time and with high quality, with strong tracker hygiene and smooth execution across panels, practicums, mocks and related pod activities. Target: 100%…", target: "15%" },
        { title: "Pod Governance & Mentor Oversight", metric: "Ensure active oversight of pod contributors including internal members and external mentors, with timely action on mentor quality and pod capacity gaps. Target: 100% monthly mentor reviews…", target: "15%" },
        { title: "Educational Outcomes & IRM", metric: "Own educational outcome initiatives including IRMs and selected content assets such as casebooks, from mentor scouting and commercials to content quality and delivery. Target: 100% planned…", target: "15%" },
        { title: "Career Prep Operations & Data Sufficiency", metric: "Support day-to-day career prep operations by ensuring pod data hygiene, spotting insufficiencies in central trackers, and contributing to last mile prep and broader career prep initiatives…", target: "15%" }
      ] },
      { id: "e28997", code: "28997", name: "Kriti Sharma", title: "Senior Program Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [
        { title: "Student Participation & Completion", metric: "Ensure students mapped to the pod actively participate in and complete all key domain prep activities across the career prep journey. Target: 85%+ overall completion; 80%+ students maintain…", target: "20%" },
        { title: "Student Performance & Readiness", metric: "Ensure students in the pod are interview-ready and perform well in domain prep. Target: 75%+ students in A+/A/B band; 80%+ students meet quality bar; 100% low PRS students actioned on time", target: "20%" },
        { title: "Pod Excellence & Governance", metric: "Own quality and timely delivery of pod activities including domain panels, practicums, mocks and ensure data hygiene and sufficiency. Target: 100% planned activities delivered; maintain…", target: "15%" },
        { title: "Pod Excellence & Governance", metric: "Ensure active oversight of all pod contributors including internal pod members and external mentors. Drive mentor quality, capacity planning, mentor-to-mentee ratio, and timely…", target: "15%" },
        { title: "Tech Initiatives & Product Enablement", metric: "Support career prep through internal and student-facing tech initiatives by coordinating with relevant teams to build or improve products, tools, and workflows that drive internal…", target: "15%" },
        { title: "Educational Outcomes & Team Operations", metric: "Support educational outcomes and broader team operations including execution support, invoice tracking, external coordination, and alignment on last mile prep and related career prep…", target: "15%" }
      ] },
      { id: "e29759", code: "29759", name: "Vidit Vishal", title: "Associate Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28997", empType: "Full-time", kras: [
        { title: "PRS, LMS & Data Systems Management", metric: "Maintain and improve PRS, LMS, dashboards, and core trackers to ensure accurate visibility of student progress, readiness, and team operations. Target: 100% PRS updation; <5% data…", target: "35%" },
        { title: "Tech Initiatives & Product Enablement", metric: "Support the design, coordination, testing, and rollout of internal tools, student-facing tech products, and process improvements across career prep. Target: 100% planned tech initiatives…", target: "30%" },
        { title: "Career Prep Operations Support", metric: "Ensure smooth on-ground execution of key career prep activities by supporting practicums, readiness processes, and other important delivery moments across the cycle. Target: 100% support…", target: "20%" },
        { title: "Readiness & Career Prep Process Support", metric: "Support central readiness processes through asset maintenance, repository hygiene, and dependable execution support across last mile prep and related career prep workflows. Target: 100%…", target: "15%" }
      ] },
      { id: "e29926", code: "29926", name: "Tanwir Alam Haque", title: "Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28997", empType: "Full-time", kras: [
        { title: "Finance & Expense Management", metric: "Ensure timely processing of mentor, vendor, and other career prep invoices, and maintain the team expense tracker accurately. Target: 100% invoices submitted on time; 100% expense tracker…", target: "20%" },
        { title: "Last Mile Prep Coordination", metric: "Maintain the central LMP tracker and ensure smooth assignment and coordination of last mile prep processes across the team. Target: 100% LMP tracker updated; 100% LMP assignments completed…", target: "30%" },
        { title: "Transcript & Launchpad Support", metric: "Ensure timely collection and management of interview transcripts for shortlisted students and support transcript readiness for Launchpad. Target: 100% transcript follow-ups completed; no…", target: "30%" },
        { title: "Career Prep Operations Support", metric: "Support smooth on-ground delivery of career prep activities by ensuring sessions run on time and all operational requirements are in place. Target: 100% support for key scheduled…", target: "20%" }
      ] },
      { id: "e29719", code: "29719", name: "Santanu Goswami", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [
        { title: "Student Participation & Completion", metric: "Ensure students mapped to the pod actively participate in and complete all key domain prep activities across the career prep journey. Target: 85%+ overall completion; 80%+ students maintain…", target: "30%" },
        { title: "Student Performance & Readiness", metric: "Ensure students in the pod are interview-ready and perform well in domain prep. Target: 75%+ students in A+/A/B band; 80%+ students meet quality bar; 100% low PRS students actioned on time", target: "30%" },
        { title: "Pod Excellence & Governance", metric: "Own quality and timely delivery of pod activities including domain panels, practicums, mocks and ensure data hygiene and sufficiency Target: 100% planned activities delivered; maintain 45%+…", target: "20%" },
        { title: "Pod Excellence & Governance", metric: "Ensure active oversight of all pod contributors including internal pod members and external mentors. Drive mentor quality, capacity planning, mentor-to-mentee ratio, and timely…", target: "20%" }
      ] },
      { id: "e30161", code: "30161", name: "Kartikeya Gupta", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Full-time", kras: [] },
      { id: "t18", code: "TBH", name: "Open role", title: "Sr. Executive", dept: "d2", bu: "PG Programme", subDept: "Placement Operations", managerId: "e27825", empType: "Open role", kras: [] },
      { id: "t20", code: "TBH", name: "Open role", title: "Sr. Executive", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e27825", empType: "Open role", kras: [] },
      { id: "e28286", code: "28286", name: "Jeneesha Singh", title: "General Manager", dept: "d8", bu: "PG Programme", subDept: "Strategic Initiatives", managerId: "e28157", empType: "Full-time", kras: [
        { title: "Alumni NPS", metric: "Achieve alumni NPS and enhance alumni engagement Target: 66", target: "35%" },
        { title: "Strategic Initiatives", metric: "Lead and execute brand reputation and credibility projects that help with the accreditations, ratings and rankings Target: Execute and lead E2E programs", target: "20%" },
        { title: "Strategic Initiatives", metric: "Launch and sustain programs that enhance alumni engagement and long-term connection with the institution. Target: launch of New alumni projects", target: "35%" },
        { title: "Communication (alumni side) and ops (internal MU team)", metric: "Strengthen alumni engagement through consistent, meaningful, and multi-channel communication. Target: 100%", target: "10%" }
      ] },
      { id: "e28582", code: "28582", name: "Tanu", title: "Program Manager", dept: "d8", bu: "PG Programme", subDept: "Alumni Relations", managerId: "e28286", empType: "Full-time", kras: [
        { title: "Almashines (Portal Management", metric: "Improve alumni engagement and data quality through effective use of the Almashines platform Target: Al mashines and website launch", target: "20%" },
        { title: "Alumni events and engagement", metric: "Conduct events and engagement activities (scheduled and adhoc) basis alumni calendar Target: 100%", target: "20%" },
        { title: "Communication (alumni side) and ops (internal MU team)", metric: "Strengthen alumni engagement through consistent, meaningful, and multi-channel communication. Target: Fulfiling all requests and managing all comms", target: "40%" },
        { title: "New Initiatives", metric: "Launch and sustain programs that enhance alumni engagement and long-term connection with the institution. Target: Launch of all approved programs", target: "20%" }
      ] },
      { id: "e29928", code: "29928", name: "Jaskaran Singh", title: "Associate", dept: "d8", bu: "PG Programme", subDept: "Alumni Relations", managerId: "e28286", empType: "Full-time", kras: [] },
      { id: "e30310", code: "30310", name: "Radhika Bhatt", title: "Associate", dept: "d8", bu: "PG Programme", subDept: "Strategic Initiatives", managerId: "e28286", empType: "Full-time", kras: [] },
      { id: "e28361", code: "28361", name: "Radhika Goyal", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28157", empType: "Full-time", kras: [
        { title: "Student Participation & Completion", metric: "Ensure students mapped to the pod actively participate in and complete all key domain prep activities across the career prep journey. Target: 85%+ overall completion; 80%+ students maintain…", target: "30%" },
        { title: "Student Performance & Readiness", metric: "Ensure students in the pod are interview-ready and perform well in domain prep. Target: 75%+ students in A+/A/B band; 80%+ students meet quality bar; 100% low PRS students actioned on time", target: "30%" },
        { title: "Pod Excellence & Governance", metric: "Own quality and timely delivery of pod activities including domain panels, practicums, mocks and ensure data hygiene and sufficiency Target: 100% planned activities delivered; maintain 45%+…", target: "20%" },
        { title: "Pod Excellence & Governance", metric: "Ensure active oversight of all pod contributors including internal pod members and external mentors. Drive mentor quality, capacity planning, mentor-to-mentee ratio, and timely…", target: "20%" }
      ] },
      { id: "e29005", code: "29005", name: "Riti Marwah", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28361", empType: "Full-time", kras: [
        { title: "Resume Creation", metric: "Conducting activities focused on creation of domain wise resumes for each student Target: 100%", target: "50%" },
        { title: "Student profile optimization - Resume and LinkedIn", metric: "Continuous evaluation of resumes and LinkedIn profiles, and keeping the PRS updated Target: 80%", target: "20%" },
        { title: "Video CV", metric: "Conducting activities focused on helping students create a video cv Target: 50%", target: "20%" },
        { title: "Final Interview Prep as LMPs", metric: "Providing prep support to students for interview readiness Target: 80%", target: "10%" }
      ] },
      { id: "e29760", code: "29760", name: "Mansi Jain", title: "Associate Program Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28361", empType: "Full-time", kras: [
        { title: "LMS & PRS Management", metric: "Manage LMS for career prep and Placement Readiness Score (PRS) system to accurately reflect student progress and readiness and specially for al behavioral readiness sessions Target: 100%…", target: "40%" },
        { title: "Dashboarding & Data Analysis", metric: "Build and maintain actionable dashboards tracking student progress, team trackers and prep outcomes for behavioral processes and platforms Target: 90%", target: "40%" },
        { title: "Readiness Support", metric: "support in gradings and assessments and maintain central repositories for prep assets (Resumes, Linkedin and Behavioral Interviews ) Target: 100%", target: "20%" }
      ] },
      { id: "e29768", code: "29768", name: "Namita Bhatia", title: "Senior Manager - II", dept: "d2", bu: "PG Programme", subDept: "Placements", managerId: "e28361", empType: "Full-time", kras: [
        { title: "Behavioral Interview Readiness", metric: "To conduct In class sessions for Behavioral interview readiness Target: 100%", target: "10%" },
        { title: "Behavioral Interview Readiness", metric: "Ensure students demonstrate strong preparedness for behavioral interviews through relevant, structured, and impactful storytelling.during their mocks Target: 0% in C and D category as per…", target: "20%" },
        { title: "Resume Optimisation", metric: "Refine and optimize student resumes aligned with their chosen domains to enhance professional branding and employability. Target: 1. 0% in C and D category as per internal rubric 2. Atleast…", target: "30%" },
        { title: "Student Accountability Support", metric: "Last mile support to students for individual shortlists and behavioral Last mile preps Target: 10 or more LMPs from July to September", target: "20%" },
        { title: "Process Efficiency & New Initiatives", metric: "Overseeing the overall processes and operations for the Behavioral team under Gopika Kumar Assisting in streamlining the processes", target: "20%" }
      ] },
      { id: "t19", code: "TBH", name: "Open role", title: "Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28361", empType: "Open role", kras: [] },
      { id: "e28767", code: "28767", name: "Mansi Bhargava", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "Strategic Initiatives", managerId: "e28157", empType: "Full-time", kras: [
        { title: "Strategic Initiatives", metric: "Overseeing the overall strategy and operations for the teams under Abhinav Arora Assisting in new programs and initiatives under the Director Target: Audit mechanism setup for resume (C6) …", target: "20%" },
        { title: "Career Prep", metric: "Maximize the career placement success of PG program graduates in top-tier companies. Target: 4.2", target: "20%" },
        { title: "Alumni Relations", metric: "Support the team in ongoing inititatives and lead the alumni ambassador program formulation Target: As Required", target: "30%" },
        { title: "Rankings", metric: "Lead the overall ranking process for the institute end to end Target: 2", target: "30%" }
      ] },
      { id: "e30583", code: "30583", name: "Vedika Maheshwari", title: "Senior Manager - I", dept: "d2", bu: "PG Programme", subDept: "career Prep", managerId: "e28157", empType: "Full-time", kras: [] },
      { id: "t21", code: "TBH", name: "Open role", title: "General Manager", dept: "d2", bu: "PG Programme", subDept: "Career Prep", managerId: "e28157", empType: "Open role", kras: [] },
      { id: "cf1202", code: "1202", name: "Nandini Seth", title: "Associate Professor - II", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "20%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications.Contribute to research initiatives and publish findings in reputed journals", target: "5%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Lead student learning outcomes for DS&AI UG program — Lead initiatives to monitor and improve student learning outcomes specifically for the DS&AI UG program.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Strengthen academic partnerships for DS&AI UG program. Build and maintain academic and industry partnerships aligned to the DS&AI UG program.", target: "15%" },
        { title: "Optimize academic operations and processes", metric: "Optimize academic operations for DS&AI UG program.Streamline operations and processes specific to the DS&AI UG program for efficiency and effectiveness", target: "15%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance. Provide feedback and support to students to enhance their learning outcomes", target: "10%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Contribute in the execution of marketing activities of various programs", target: "15%" }
      ] },
      { id: "cf26227", code: "26227", name: "Manu Prasad", title: "Associate Professor - II", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "20%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "15%" },
        { title: "Optimize academic operations and processes", metric: "Lead academic operations for PGP TBM program — Lead and streamline academic operations and processes specifically for the PGP TBM program.", target: "25%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Strengthen partnerships for PGP TBM program — Build and maintain academic and industry partnerships aligned to the PGP TBM program.", target: "5%" }
      ] },
      { id: "cf27736", code: "27736", name: "Vipin Sreekumar", title: "Associate Professor - II", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Foster faculty development and research initiatives", metric: "Drive research policy and support researcher productivity — Contribute to research policy making and ensure researchers face no hurdles in research activities as part of the Research Committee.", target: "15%" }
      ] },
      { id: "cf28494", code: "28494", name: "Maninder Singh", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "LM Post Admission Flow System Design", metric: "Design a scalable and configurable post admission system for LM with automated workflows, seamless integrations, and program specific processes to improve operational efficiency and the student onboarding experience.", target: "25%" },
        { title: "Masters Union Event Management System LM V2", metric: "Build a centralized event management system to streamline event planning, registrations, attendee management, and reporting.", target: "25%" },
        { title: "Multi Program Revenue Dashboard", metric: "Build a centralized dashboard to track and analyze revenue across multiple programs with real-time insights, payment trends, and program-wise financial performance.", target: "25%" },
        { title: "TETR Backend and Frontend Redesign", metric: "Redesign the TETR backend and frontend to improve performance, scalability, user experience, and maintainability while supporting future feature enhancements.", target: "25%" }
      ] },
      { id: "cf28382", code: "28382", name: "Divesh Malhotra", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Coach LMS | Marketplace | Detailed View\r\n2.Ask To resubmit resources\r\n3.Student Direct POC | Coach LMS\r\n4.Mutiple Popup UX\r\n5.Launch Pad Integration\r\n6.Analytics UI UX Improvements\r\n7.Feature Request\r\n8.Student Holiday Preview | Holidays | Admin & Coach LMS\r\n9.Fee Scholarship\r\n10.Student Login, Logout & Session Management\r\n11.Admin Account Deactivation Workflow Updates", target: "100%" }
      ] },
      { id: "cf1185", code: "1185", name: "Bhupesh Manoharan", title: "Director", dept: "c1", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Develop and implement strategies to improve the quality of academic programs and curriculum delivery.", target: "20%" },
        { title: "Foster faculty development and research initiatives", metric: "Create and execute programs to enhance faculty skills and promote research activities.", target: "20%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Implement systems to monitor and improve student learning outcomes and academic performance.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Build and maintain partnerships with academic institutions and industry experts.", target: "20%" },
        { title: "Optimize academic operations and processes", metric: "Streamline academic operations to ensure efficiency and effectiveness.", target: "20%" }
      ] },
      { id: "cf1205", code: "1205", name: "Sameer", title: "Senior Manager - I", dept: "c3", bu: "Central Functions", subDept: "Payroll", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf29534", code: "29534", name: "Shahrukh Moin Khan", title: "Associate Director", dept: "c1", bu: "Central Functions", subDept: "", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Lead curriculum design and vetting — Lead curriculum design and review faculty course outlines as Associate Director overseeing the Curriculum Team.", target: "20%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Lead quality assurance of course delivery — Lead quality assurance reviews of course delivery across faculty as Associate Director overseeing the Learning Committee.", target: "20%" }
      ] },
      { id: "cf1239", code: "1239", name: "Nitin Garg", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Data Controller. Own DIT, ingest, backup and clean handoff.", target: "100%" }
      ] },
      { id: "cf1240", code: "1240", name: "Harindra Yadav", title: "Senior Manager - I", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf28383", code: "28383", name: "Ajay Kumar", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Sakshi)", managerId: "cfx2", empType: "Full-time", kras: [] },
      { id: "cf1252", code: "1252", name: "Sandeep Kumar", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Cinematographer. Fulfil event cinematography requests.", target: "100%" }
      ] },
      { id: "cf1258", code: "1258", name: "Rakesh Singh", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf26127", code: "26127", name: "Tinu", title: "Program Associate", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf1255", code: "1255", name: "Sudhanshu Garg", title: "Senior Director", dept: "c6", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "A minimum of [X] new, unique industry Masters to the MU and Tetr network within the fiscal year for contributing across teaching, workshops, and mentorships", target: "15%" },
        { title: "Student Satisfaction", metric: "Achieve an average student satisfaction score of 4.6/5 on the relevance and effectiveness of Master-led sessions and interventions, as measured by post-session feedback.", target: "10%" },
        { title: "Mentorship via MentorUnion", metric: "A minimum of [X] new, unique industry Mentors to be added; generate 4 cr of revenue from B2C and B2B mentees in a fiscal year; ensure [X] Mentee NPS", target: "15%" },
        { title: "Strengthening Corporate Alliances", metric: "Bring atleast [Z] new brand partners to conduct Immersions, set up labs, execute corporate courses, run One-Day Challenges, etc", target: "15%" },
        { title: "Podcast with CXO Guests", metric: "Invite and host a minimum of [Y] new CXOs, high profile Forbes leaders, Parliamentary Guests, etc for Series C Podcasts, fireside chats, etc", target: "15%" },
        { title: "Accessibility of Interactions", metric: "Organize [A] direct interactive opportunities for students across programs (AMA, focused GD, Founder-Investor Mixers, Offcampus shoots, Factory Visits, etc)", target: "10%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Leasing campus space for external events, Speakers for Quorum, B2B L&Ds, AI Summit, etc", target: "10%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate a minimum of [D] new internship or placement opportunities for students through the Master Relations network.", target: "10%" }
      ] },
      { id: "cf26150", code: "26150", name: "Shivani Gupta", title: "Senior Manager - II", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf28714", empType: "Full-time", kras: [] },
      { id: "cf28384", code: "28384", name: "Khushboo", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [] },
      { id: "cf28385", code: "28385", name: "Harpreet Kaur", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Bharat Programmes 60%", metric: "*PGP Bharat & Bharat Summer Fellowship - Reports and Brochure\r\n*PGP Bharat & Bharat Summer Fellowship - Decks\r\n*PGP Bharat Ads & BSF Email Banners Creatives\r\n*Orientation Digital Collaterals\r\n*PGP Bharat Ads & BSF Ads, global ads and creatives, sunboard design.", target: "60%" },
        { title: "Master Relations 20%", metric: "* Create Guest Banners sets.", target: "20%" },
        { title: "Ops, HR 20%", metric: "* Create Guest Banners sets.", target: "20%" },
        { title: "Bharat Programmes", metric: "*PGP Bharat & Bharat Summer Fellowship - Reports and Brochure\r\n*PGP Bharat & Bharat Summer Fellowship - Decks\r\n*PGP Bharat Ads & BSF Email Banners Creatives\r\n*Orientation Digital Collaterals\r\n*PGP Bharat Ads & BSF Ads, global ads and creatives, sunboard design.", target: "60%" },
        { title: "Master Relations", metric: "* Create Guest Banners sets.", target: "20%" },
        { title: "Ops, HR", metric: "* Design The People Pulse Monthly newsletters, carousels.", target: "20%" }
      ] },
      { id: "cf28392", code: "28392", name: "Manjeeta", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28399", empType: "Full-time", kras: [
        { title: "PGP and UG print collaterals", metric: "1.1 Brochures, flyers, Print files", target: "20%" },
        { title: "Marketing ad Creatives", metric: "2.1 Marketing add with resizes & variation of UG", target: "20%" },
        { title: "Handbooks and Presentation", metric: "3.1 Work on handbooks and presentation decks (design, formatting, content updates)", target: "40%" },
        { title: "UG/PG Digital collaterals", metric: "4.1 social media posts, website banners, emailers, internal creatives", target: "20%" },
        { title: "PGP and UG print collaterals", metric: "1.1 Brochures, flyers, Print files", target: "20%" },
        { title: "Marketing ad Creatives", metric: "2.1 Marketing add with resizes & variation of UG", target: "20%" },
        { title: "Handbooks and Presentation", metric: "3.1 Work on handbooks and presentation decks (design, formatting, content updates)", target: "40%" },
        { title: "UG/PG Digital collaterals", metric: "4.1 social media posts, website banners, emailers, internal creatives", target: "20%" }
      ] },
      { id: "cf28386", code: "28386", name: "Satinderdeep Singh", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Coach LMS | Marketplace | Detailed View\r\n2.Tools on the App Dashboard\r\n3.Coach LMS | Admin App | Improvements\r\n4.Coach LMS | Edit Cohort UX\r\n5.photo gallery improvement using gdrive", target: "100%" }
      ] },
      { id: "cf26195", code: "26195", name: "Aslam", title: "Team Lead", dept: "c3", bu: "Central Functions", subDept: "Payroll", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf28387", code: "28387", name: "Aniket", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Mentor-Union Super Admin for Saas", metric: "Build a Super Admin panel for MentorUnion to run the platform as a multi-tenant SaaS — covering organization onboarding, role-based access control, plan/subscription management, and centralized configuration and monitoring of all tenants from one place.", target: "30%" },
        { title: "Zoom Sdk end to end integration with Mentorunion", metric: "Integrate the Zoom SDK end to end within MentorUnion so sessions can be scheduled, hosted, and joined natively inside the platform, including meeting creation, in-app join flow, and attendance/recording sync", target: "30%" },
        { title: "Payment Integration Razor-pay and credit hub flow", metric: "Integrate the Razorpay payment gateway with MentorUnion and build the Credit Hub flow — enabling secure online payments, credit purchase and deduction, invoicing, webhook-based payment status updates, and reconciliation/refund handling.", target: "20%" },
        { title: "Lead Matrix integration for lead capturizing Mentorunion web-side", metric: "Integrate Lead Matrix with the MentorUnion website to capture leads from all web forms and landing pages and sync them automatically into the lead system with proper source/UTM attribution for timely follow-up", target: "20%" }
      ] },
      { id: "cf26222", code: "26222", name: "Rajnish Kumar", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf26220", code: "26220", name: "Rajkumar Rajatsingh Sudhirsingh", title: "Senior Program Manager - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Strengthen Faculty Recruitment & Academic Coordination", metric: "Support and coordinate faculty hiring processes, academic interactions, scheduling, documentation, and onboarding activities to ensure seamless execution of recruitment initiatives", target: "35%" },
        { title: "Support and coordinate faculty hiring processes, academic interactions, scheduling, documentation, and onboarding activities to ensure seamless execution of recruitment initiatives", metric: "Facilitate effective communication and coordination with faculty members, academic leaders, external experts, and institutional stakeholders to support academic and strategic initiatives.", target: "30%" },
        { title: "Optimize Academic Operations & Process Efficiency", metric: "Streamline operational workflows, meeting coordination, academic scheduling, reporting, and administrative processes within the Director’s Office to improve efficiency and execution quality.", target: "10%" },
        { title: "Support Research, Accreditation & Institutional Initiatives", metric: "Assist in the coordination of research activities, faculty evaluations, accreditation processes, and institutional projects aligned with the organization’s academic and strategic objectives", target: "15%" },
        { title: "Enhance Student & Faculty Experience Through Operational Excellence", metric: "Ensure timely communication, issue resolution, event coordination, and operational support to create a seamless and professional experience for students, faculty, and external stakeholders.", target: "10%" },
        { title: "Strengthen Faculty Recruitment & Academic Coordination", metric: "Support and coordinate faculty hiring processes, academic interactions, scheduling, documentation, and onboarding activities to ensure seamless execution of recruitment initiatives", target: "35%" },
        { title: "Support and coordinate faculty hiring processes, academic interactions, scheduling, documentation, and onboarding activities to ensure seamless execution of recruitment initiatives", metric: "Facilitate effective communication and coordination with faculty members, academic leaders, external experts, and institutional stakeholders to support academic and strategic initiatives.", target: "30%" },
        { title: "Optimize Academic Operations & Process Efficiency", metric: "Streamline operational workflows, meeting coordination, academic scheduling, reporting, and administrative processes within the Director’s Office to improve efficiency and execution quality.", target: "10%" },
        { title: "Support Research, Accreditation & Institutional Initiatives", metric: "Assist in the coordination of research activities, faculty evaluations, accreditation processes, and institutional projects aligned with the organization’s academic and strategic objectives", target: "15%" },
        { title: "Enhance Student & Faculty Experience Through Operational Excellence", metric: "Ensure timely communication, issue resolution, event coordination, and operational support to create a seamless and professional experience for students, faculty, and external stakeholders.", target: "10%" }
      ] },
      { id: "cf28388", code: "28388", name: "Balveer Singh", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28399", empType: "Full-time", kras: [
        { title: "Print and Digital Collaterals", metric: "Print and Digital Collaterals", target: "30%" },
        { title: "Marketing Brochures", metric: "Marketing Brochures", target: "50%" },
        { title: "Design Innovation", metric: "Design Innovation", target: "20%" }
      ] },
      { id: "cf28390", code: "28390", name: "Ramneet Kaur", title: "Manager", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Decide & freeze MentorUnion IA as per team discussions", metric: "Finalize the information architecture for MentorUnion by incorporating stakeholder feedback and team discussions. Ensure the structure supports a seamless and intuitive user journey.", target: "20%" },
        { title: "Build first draft screen layouts for web app", metric: "Create the initial web application screen layouts aligned with product requirements and user experience best practices. Ensure the designs are ready for stakeholder review and feedback.", target: "20%" },
        { title: "Create unified components and design patterns", metric: "Develop a standardized design system with reusable UI components and consistent design patterns. Ensure visual consistency and scalability across the platform.", target: "20%" },
        { title: "Achieve 90%+ Sahil review pass rate on first submission", metric: "Deliver high-quality design outputs that achieve a .+ first-pass approval rate during design reviews. Minimize rework by proactively incorporating requirements and feedback.", target: "20%" },
        { title: "Ship MentorUnion web app redesign screens", metric: "Complete and deliver the planned web app redesign screens as per the project roadmap. Ensure timely delivery while maintaining design quality and consistency.", target: "20%" }
      ] },
      { id: "cf28393", code: "28393", name: "Tarundeep Singh", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Audit Score enhancement", metric: "To enhancement the stability of MU audit score between 85% to ..", target: "20%" },
        { title: "Webiste Alt images", metric: "Fix missing images alt for all the program pages.", target: "40%" },
        { title: "Organic traffic growth", metric: "Improvement of organic traffic compared to previous period/year.", target: "20%" },
        { title: "Blogs visibility", metric: "Indexation and improve visibility of blogs in SERP and AEO.", target: "20%" }
      ] },
      { id: "cf28394", code: "28394", name: "Vipin", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Dinero Automation flow for New and Existing program", metric: "Implement an automated workflow that enables seamless onboarding and management of both new and existing programs in Dinero. The solution will include configurable business rules, automated fee mapping, payment tracking, approval workflows, notifications, and integration with dependent modules to support scalable and efficient operations.", target: "20%" },
        { title: "Student Module New Development and Flow", metric: "The Student Module in Orbit will be enhanced with a new workflow to replace the existing alternate process. The implementation will include the required functional changes, followed by comprehensive testing to verify the business logic, data flow, system integrations, and overall functionality.", target: "15%" },
        { title: "MentorUnion Mobile App Launch and Handover to wider audience for use", metric: "Initial Version Release of the Mentor and Mentee Application with Core Features and Application Management IOS and Android", target: "10%" },
        { title: "New Admin Module of MentorUnion", metric: "The MentorUnion module will be enhanced with new features and optimizations to the current functionality, ensuring the solution is fully aligned with the SaaS model for future scalability and efficient tenant management.", target: "20%" },
        { title: "Orbit Module improvement of ongoing process", metric: "The process will be streamlined and optimized in the next quarter in collaboration with the Finance team to improve efficiency, accuracy, and overall operational effectiveness.", target: "10%" },
        { title: "Zoom 1 on 1 and Group calling MentorUnion", metric: "Integrate Zoom into MentorUnion to enable both one-on-one and group video calls. Additionally, implement call recording and transcription features, allowing users to access and review recordings and transcripts at a later time.", target: "15%" },
        { title: "Contract Management Orbit", metric: "The Contract Module aims to digitize and automate contract management by providing a centralized repository for all contracts. It supports contract creation, review, approvals, execution, amendments, renewals, and expiry management while ensuring secure access, audit trails, and compliance with organizational policies.", target: "10%" }
      ] },
      { id: "cf26279", code: "26279", name: "Vishal Parashar", title: "General Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf1255", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite and host a minimum of [Y] new CXOs, high profile Forbes leaders, Parliamentary Guests, etc for Series C Podcasts, fireside chats, etc", target: "30%" },
        { title: "Student Satisfaction", metric: "Achieve an average student satisfaction score of 4.6/5 on the relevance and effectiveness of Master-led sessions and interventions, as measured by post-session feedback.", target: "20%" },
        { title: "Accessibility of Interactions", metric: "Organize [A] direct interactive opportunities for students across programs (AMA, focused GD, Founder-Investor Mixers, Offcampus shoots, Factory Visits, etc)", target: "20%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Summits and Conferences, Speakers for Quorum, B2B L&Ds, etc", target: "20%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate a minimum of 10 new internship or placement opportunities for students through the Master Relations network.", target: "10%" }
      ] },
      { id: "cf26293", code: "26293", name: "Vikas", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28425", empType: "Full-time", kras: [
        { title: "Executive Education\r\n(PGP Rise: General Management, PGP in Capital Markets & Trading, \r\nPGP in Entrepreneurship & Business Acceleration, AI First Operator Programme)", metric: "* Consistent branding across all Exec programmes\r\n* Led creative execution for General Management, CMT, EBAP, and AI First Operator Programme.\r\n* Creative assets for Social media like ads, brouchures,flyers, for all programmes\r\n* Improve design workflows for all deliverables\r\n* Maintain quality & timelines across programmes\r\n* Creative assets for events like orientations for all programmes", target: "50%" },
        { title: "Family Business \r\n(PGP Rise: Owners & Promoters Management)", metric: "* Handling all design requirements for family business\r\n* Handling all digital and printing requirements for SBM \r\n* Improve design workflows for all deliverables\r\n* Maintain quality & timelines across programmes\r\n* Creative assets for events like orientations", target: "10%" },
        { title: "Mastercamp \r\n( Strategic Business Management )", metric: "* Handling digital requirements for pgp bharat and bharat fellowship and D2C brand bootcamp\r\n* Created flyers, ad creatives, and brochures for D2C Brand Bootcamp marketing campaigns.\r\n* Improve design workflows for all deliverables\r\n* Maintain quality & timelines across programmes\r\n* Creative assets for events like orientations", target: "10%" },
        { title: "Immersions\r\n( Bharat Programmes (Delivery), D2C Brand Bootcamp)", metric: "* Create visulas for social media ads \r\n* Improve design workflows for all deliverables\r\n* Maintain quality & timelines across programmes", target: "20%" },
        { title: "Design Execution & Innovation", metric: "Design Execution & Innovation", target: "5%" },
        { title: "Resource Allocation", metric: "Resource Allocation", target: "5%" }
      ] },
      { id: "cf28395", code: "28395", name: "Mithlesh", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Contract Management Module", metric: "Develop Contract Management Module Frontend (Web + Mobile)", target: "30%" },
        { title: "Card Managment Finance Module", metric: "Develop Card Management Finance Module Frontend (Web + Mobile)", target: "30%" },
        { title: "Travel Module UI Optimisation", metric: "Perform Travel Module UI Optimization & Frontend Enhancements", target: "10%" },
        { title: "Reimbursement Process UI Update", metric: "Enhance Reimbursement Process Frontend Functionality & UI", target: "10%" },
        { title: "Recipient Process", metric: "Enhance Recipient Process Frontend Functionality & User Experience", target: "10%" },
        { title: "Procurement Management System", metric: "Upgrade Procurement Management System Frontend with UI, Performance & Feature Improvements", target: "10%" }
      ] },
      { id: "cf28396", code: "28396", name: "Sourav Suman", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Ownership", metric: "Program Ownership & Timely Delivery", target: "20%" },
        { title: "Quality Assurance", metric: "Quality Assurance & Bug-Free Performance", target: "20%" },
        { title: "Collaboration", metric: "Stakeholder Collaboration & Process Efficiency", target: "20%" },
        { title: "Productivity", metric: "Team Productivity & Workload Management", target: "20%" },
        { title: "Improvement", metric: "Continuous Improvement & Performance Optimization", target: "20%" },
        { title: "1. Website Development & Delivery", metric: "Masters' Union, Masters Camp\r\n\r\n1. Leading development and delivery of website features and pages across both properties with responsive, pixel-perfect UI and on-time release.\r\n2. Handling new page builds and ongoing site enhancements.", target: "30%" },
        { title: "2. AI-Powered Testing & QA", metric: "Building AI-driven automated testing for critical user flows to catch issues early and reduce manual QA effort.", target: "25%" },
        { title: "3. AI Integration in Workflow", metric: "Integrating AI tools into the development workflow to improve dev speed, code quality, and overall team output.", target: "15%" },
        { title: "4. Performance & Quality Control", metric: "Reviewing and optimizing performance, accessibility, and cross-browser quality to maintain high standards on both sites.", target: "15%" },
        { title: "5. Team Management & Process Building", metric: "Streamlining processes, code standards, and task management while handling urgent requests and stakeholder escalations.", target: "15%" }
      ] },
      { id: "cf28397", code: "28397", name: "Gautam Thakur", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Coach LMS | Edit Cohort UX\r\n2.Admin Onboarding | Admin\r\n3.Ask to resubmit\r\n4.Student Holiday Preview | Holidays | Admin & Coach LMS\r\n5.Session Details UI UPDATE\r\n6.Concerns raised from different pages (Attendance, Assignments)\r\n7.Video Proctoring | Logic Update\r\n8.Attendance Remark | Coach LMS\r\n9.Not A session checkbox | Admin Panel\r\n10.My Course Page (Course List UI)\r\n11.PRS UI Enhancements\r\n12.Notifications via Ally (AI Buddy)\r\n13.Coach LMS | Student Experience\r\n14.Attendance: Display in tabular format, organized term-wise.\r\n15.Student Month View Calendar\r\n16.Side Panel | Navigation | Admin Panel\r\n17.Bridge Courses\r\n18.Assignment UI\r\n19.PRS Group", target: "100%" }
      ] },
      { id: "cf26370", code: "26370", name: "Brijesh Chourasiya", title: "Team Lead", dept: "c3", bu: "Central Functions", subDept: "Accounts Payable", managerId: "cf1205", empType: "Full-time", kras: [] },
      { id: "cf26382", code: "26382", name: "Akash C Mathews", title: "Senior Manager - I", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cf26399", code: "26399", name: "Kashika Sud", title: "Associate Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf26394", code: "26394", name: "Ashanvi Srivastava", title: "Program Manager", dept: "c4", bu: "Central Functions", subDept: "Marketing (Mayank)", managerId: "cf27768", empType: "Full-time", kras: [] },
      { id: "cf26440", code: "26440", name: "Saurabh Mishra", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Career Coach | InterviewAI | API Need & N8N\r\n2. student projects\r\n3.Super Admin >> Monitor Requests\r\n4.Interview tool with Career Coach", target: "100%" }
      ] },
      { id: "cf26441", code: "26441", name: "Nimisha Bora", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Design and vet curriculum and course outlines — Lead curriculum design and review faculty course outlines as part of the Curriculum Team.", target: "15%" }
      ] },
      { id: "cf27356", code: "27356", name: "Akash Sharma", title: "Manager", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "Releases\r\n1. Bridge Courses | Coach LMS\r\n2. Mobile App V2 | Coach LMS\r\n3. Admin Notifications Control | Coach LMS\r\n4. Leaders Report | Coach LMS\r\n5. Coach LMS Markeplace | Coach LMS\r\n6. Ask to resubmit flow | Coach LMS\r\n7. Attendance in Tabular format | Coach LMS\r\n8. Course Overview Page | Coach LMS\r\n9. Initial Onboarding for the Students | Coach LMS\r\n10. Interview Tool Integration | Career Coach\r\n11. Career Coach UIUX Improvements | Career Coach\r\n\r\nImprovements\r\n1. Student Search Improvements | Coach LMS\r\n2. General Configuraiton | Coach LMS\r\n3. Edit Cohort UIUX | Coach LMS\r\n4. Course Page UIUX | Coach LMS\r\n5. Holidays showcase to the Parent/ Students | Coach LMS\r\n6. Application Rate Table | Career Coach\r\n7. Jobs to multiple program | Career Coach\r\n8.Schedule Placement Addition | Career Coach\r\n\r\nRequirements\r\n1. Career Coach V2 | Career Coach\r\n2. Notification Integration with Email and WhatsApp | Coach LMS\r\n3. TETR Counselling Logs | Coach LMS", target: "100%" }
      ] },
      { id: "cf28398", code: "28398", name: "Oshin Puthuvaltharayil Satheesan", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "LeadMatrix Mobile App", metric: "1. Finalize requirements, user flows, and information architecture for the selected LeadMatrix mobile modules. \r\n2. Create interactive prototypes and design explorations using Claude to validate user flows, accelerate UI iterations, and optimize the overall design process. \r\n3. Collaborate closely with the development team to refine Claude-generated prototypes and enable developers to directly leverage generated code wherever feasible, ensuring a seamless design-to-development handoff.", target: "50%" },
        { title: "LeadMatrix x Dinero integration ui enhancements", metric: "1. Review and optimize payment, invoice, and reconciliation workflows for improved usability. \r\n2. Create interactive prototypes and design explorations using Claude to validate user flows, accelerate UI iterations, and optimize the overall design process.\r\n3. Identify usability gaps and recommend design improvements based on user and stakeholder feedback.", target: "20%" },
        { title: "Makers Lab x Cowork x Eduspace consistency and enhancements", metric: "1. Review and optimize existing workflows, booking experiences, and operational journeys across MakersLab, Cowork, EduSpace, and Bloomberg Lab to ensure a consistent and intuitive user experience. \r\n2.Design and implement UI enhancements, new features, and scalable design solutions using the Design System while maintaining consistency across all platforms. \r\n3.Provide ongoing implementation support through developer collaboration, post-release UI/UX validation, quality checks, and iterative improvements based on stakeholder feedback and evolving business requirements.", target: "30%" }
      ] },
      { id: "cf28399", code: "28399", name: "Diya", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28425", empType: "Full-time", kras: [
        { title: "Under Graduate Programme\r\n(UG in technology and business, Psychology and marketing, data science and AI, Finance and economics, programme in design)", metric: "1. Undergraduate Program\r\n\r\n•⁠ ⁠Lead the creative execution for the upcoming UG Orientation with the design team.\r\n•⁠ ⁠Deliver UG ads, brochures, and marketing creatives on time.\r\n•⁠ ⁠Coordinate with stakeholders to ensure timely design delivery.\r\n•⁠ ⁠Maintain quality and brand consistency across all UG assets.", target: "30%" },
        { title: "Post Graduate Programmes\r\n(PG in Technology and Business, YLC, Applied AI and agenetic system)", metric: "2.⁠ ⁠Postgraduate Program (PGP)\r\n\r\n•⁠ ⁠Design and deliver PGP marketing campaigns and advertisements.\r\n•⁠ ⁠Create creatives for weekly and bi-weekly PGP events.\r\n•⁠ ⁠Ensure timely execution of all PGP design requirements.\r\n•⁠ ⁠Maintain consistent branding across PGP communication.", target: "40%" },
        { title: "Design Execution & Innovation", metric: "3.⁠ ⁠Design Execution\r\n\r\n•⁠ ⁠Ensure high-quality and timely delivery of design projects.\r\n•⁠ ⁠Improve workflow and project execution efficiency.\r\n•⁠ ⁠Automate repetitive design tasks where possible.\r\n•⁠ ⁠Share AI best practices with the team.", target: "15%" },
        { title: "Resource Allocation", metric: "4.⁠ ⁠Resource Allocation\r\n\r\n•⁠ ⁠Assign tasks based on team members’ strengths.\r\n•⁠ ⁠Balance workload to meet project deadlines.\r\n•⁠ ⁠Track project progress and optimize resource allocation.\r\n•⁠ ⁠Support team growth through regular feedback and guidance.", target: "15%" }
      ] },
      { id: "cf27374", code: "27374", name: "Neeraj Shukla", title: "Senior Manager - I", dept: "c9", bu: "Central Functions", subDept: "Legal", managerId: "cfx3", empType: "Full-time", kras: [] },
      { id: "cf28400", code: "28400", name: "Anish Babbar", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Super Admin Automation", metric: "A set of tools/workflows that let super admins configure and manage the platform (organizations, features, roles, etc.) without manual intervention or engineering support — reducing repetitive setup work and operational overhead for platform-level administration.", target: "40%" },
        { title: "AI summary of leads", metric: "An AI-generated summary of a lead's profile and activity, surfaced to counsellors on the lead detail page via a popup. It condenses lead data, communication history, and application status into a quick-read overview to speed up counsellor decision-making.", target: "10%" },
        { title: "Eduvate integration for payments", metric: "A backend integration with Eduvate's fee/payment API to pull real-time fee balance, payment status, and scholarship data for students, so the CRM (e.g., Parent Dashboard) reflects accurate, up-to-date financial information instead of stale or miscalculated figures.", target: "25%" },
        { title: "Custom Editor integration", metric: "Integration of a rich-text/custom editor into the platform for composing communication templates (emails, WhatsApp), supporting merge tags/variables (like counsellor name, lead fields) so users can build dynamic, personalized templates without manual coding.", target: "25%" }
      ] },
      { id: "cf27399", code: "27399", name: "Muskan Suri", title: "Senior Manager - I", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf27441", code: "27441", name: "Akshat Ghai", title: "Senior Manager - I", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf26279", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite, align and execute a minimum of [Y] CXO led podcasts, fireside chats annually (including high profile Forbes leaders, Parliamentary Guests, etc for Series C Podcasts, fireside chats - super aspirational names)", target: "40%" },
        { title: "Accessibility of Interactions", metric: "Organize and execute [A] off campus shoots | Align Industry Partners for ODCs | Align VCs/Content Creators/Dropshippers etc as per the requirement and fitment", target: "30%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate 4 internship, live project, or placement-linked opportunities for students through CXO, VC, content creator, and operator networks built via sessions and Outclass engagements.", target: "10%" },
        { title: "Student Satisfaction", metric: "Maintain an average student satisfaction score of 4.8/5 or above across all sessions by ensuring strong speaker alignment, timely coordination etc", target: "20%" }
      ] },
      { id: "cf28404", code: "28404", name: "Adarsh Chakraborty", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28494", empType: "Full-time", kras: [
        { title: "Program-wise Post Admission Automation Flow", metric: "Design and implement an automated post-admission workflow tailored to each program. The automation should manage program-specific communication, document collection, payment milestones, onboarding tasks, and status updates, reducing manual effort while ensuring a consistent and seamless admission-to-enrollment experience.", target: "20%" },
        { title: "UnionStack Document Upload System (Filestack Replacement)", metric: "Design and implement UnionStack as the centralized document upload solution to replace Filestack. The system should support secure file uploads, storage, validation, previews, access control, and seamless integration across applications while improving reliability, scalability, performance, and reducing third-party dependency and costs.", target: "20%" },
        { title: "Multi-Payment Gateway Integration for Fee Collection", metric: "Implement a multi-payment gateway solution that enables fee collection through multiple providers, ensuring high payment success rates, automatic failover, improved reliability, and flexibility. The system should support gateway configuration, transaction tracking, reconciliation, refunds, and detailed payment analytics while providing a seamless payment experience for users.", target: "20%" },
        { title: "Interview Call Slots & Daily Tracking System (LM V2)", metric: "Design and implement LM V2 to streamline interview scheduling and daily tracking. The system should enable configurable interview call slots, recurring schedules, buffer times, slot durations, interviewer availability, and real-time tracking of scheduled, completed, rescheduled, and missed interviews through a centralized dashboard, improving operational efficiency and visibility.", target: "20%" },
        { title: "Security Compliance & Governance", metric: "Implement and enforce security best practices across applications and infrastructure, including access control, data protection, vulnerability management, audit logging, secure development practices, and compliance with organizational security standards to ensure the confidentiality, integrity, and availability of systems and data.", target: "20%" }
      ] },
      { id: "cf27442", code: "27442", name: "Mohammad Iqbal Hassan", title: "Senior Program Manager - I", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Identify, engage, onboard, and prepare industry Masters aligned to TBM/YLC/HRoS curriculum needs and overall program outcomes, ensuring clarity on expectations and readiness before engagement. In addition, manging logistics and operation including payments end to end.", target: "40%" },
        { title: "Student Satisfaction", metric: "Ensure Masters deliver structured, relevant, and outcome-oriented sessions by aligning expectations, tracking feedback trends, and addressing delivery gaps across modules.", target: "25%" },
        { title: "Accessibility of Interactions", metric: "Plan, schedule, and manage Masters for admission interviews, AMAs, CXO sessions, and mock interactions, ensuring smooth coordination, availability, and consistency across cycles.", target: "25%" },
        { title: "Internship/Placement Facilitation", metric: "Leverage Master relationships to enable internships, live projects, and hiring-oriented interactions in coordination with internal teams to support program outcome commitments.", target: "10%" }
      ] },
      { id: "cf28403", code: "28403", name: "Gunjan Paneri", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Mentor Union (SaaS)", metric: "Design and build comprehensive Organization Admin flows for the Mentor Union SaaS product across key modules and workflows.\r\nDesign the Mentor-side mobile app with seamless flows. Design upcoming Mentor Union mobile app flows based on evolving product requirements and priorities. Design upcoming Mentor Union mobile app flows based on evolving product requirements and priorities. Support upcoming Mentor Union SaaS features, workflows, and design requirements as product needs evolve.", target: "75%" },
        { title: "Dinero & MasterCamp (Web + Mobile), MSB (supervision)", metric: "1. Design and support upcoming Dinero product features, workflows, and enhancements based on evolving product requirements. \r\n2. Manage and work on MasterCamp and MSB website design, ensuring design quality, consistency, and timely execution.\r\n3. Provide hands-on design support for MasterCamp and MSB websites wherever additional intervention or refinement is required", target: "25%" }
      ] },
      { id: "cf27450", code: "27450", name: "Akshara Mishra", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Career Coach | Apply Form | Resume Score\r\n2.Career Coach | Job List | Delete Job with Reason\r\n3.Career Coach | Job List | Column Addition\r\n4.Floating Job to Multiple Programs", target: "100%" }
      ] },
      { id: "cf28411", code: "28411", name: "Ramnika Seth", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Lead Matrix Administration, QA & Production Support", metric: "Manage end-to-end Lead Matrix operations including user creation, role & permission mapping, configuration, issue resolution, production support, and comprehensive functional, regression, UAT, and release testing for new features, application forms, and program launches to ensure a stable production environment.", target: "30%" },
        { title: "Google Workspace Administration & Automation", metric: "Manage Google Workspace administration including account provisioning, license management, groups, aliases, shared drives, storage optimization, security configurations, and automation for account creation.", target: "5%" },
        { title: "Email Marketing & Communication Operations", metric: "Execute and validate email marketing campaigns, templates, audience segmentation, campaign scheduling, and delivery monitoring to ensure accurate and timely communication.", target: "15%" },
        { title: "Event Testing & Communication Automation", metric: "Perform end-to-end testing of Executive events, validate event configurations, and schedule confirmation, announcement, and follow-up communications through CRM to ensure a seamless participant experience.", target: "10%" },
        { title: "Procurement & SaaS Vendor Management", metric: "Manage procurement and renewal of SaaS tools, coordinate with vendors, validate quotations and invoices, track licenses, and ensure uninterrupted availability of business applications.", target: "10%" },
        { title: "Employee Offboarding & Access Management", metric: "Execute end-to-end offboarding by revoking system access, deactivating Google Workspace and SaaS accounts, transferring data, and ensuring compliance with organizational policies.", target: "5%" },
        { title: "Cross-Platform Testing of v2 Forms", metric: "Perform thorough end-to-end testing of all v2 application forms across Desktop, Android, and iOS platforms to validate consistent functionality, UI/UX behavior, and data integrity. Ensure a seamless and uninterrupted experience for students filling out application forms, regardless of the device or platform used", target: "25%" }
      ] },
      { id: "cf28410", code: "28410", name: "Prabhdeep Singh", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Saas Level Practices", metric: "Added a Super Admin role following SaaS-level best practices", target: "20%" },
        { title: "Frontend Features", metric: "Deliver all new frontend features with zero regression, ensuring a stable and seamless user experience", target: "20%" },
        { title: "Web and mobile experience", metric: "Ensure the mobile web experience closely matches the mobile app, providing a consistent and seamless user experience across both platforms", target: "20%" },
        { title: "React.js conversion to React Native", metric: "Convert the complete React.js application to React Native to build a hybrid app that delivers a native-like experience beyond the browser", target: "20%" },
        { title: "Bugs fixes", metric: "Fix existing bugs and optimize the application to ensure a stable, high-performance, and reliable user experience", target: "20%" },
        { title: "New Changes & Features in Website + Application", metric: "New Features in Application like:\r\n\r\n1. New Credit System in mentor calling (Purchase Plans) + a complete module for purchasing plans.\r\n2. Credit History of users in profile section.\r\n3. More Improvement in existing design.\r\n4. A new Super Admin and More Roles Like Org Admin and more, a complete new module currenlty in process.\r\n\r\nNew Feature in Website \r\n\r\n1. Purchase Plans from Website\r\n2. See the same plans from Application and Redirection to Application for Purchase and Registration", target: "100%" }
      ] },
      { id: "cf28416", code: "28416", name: "Nikhil Jain", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Coach LMS | Student Experience\r\n2. Placed Students Scoring | PRS | Admin | Coach LMS\r\n3.Student & Parent Leave List Visibility in mobile app\r\n4.Parent Leave Apprval\r\n5.TETR Term Report\r\n6.Mutiple Popup UX\r\n7.Events (Sync with G Calendar) | Student\r\n8.Faculty Performance | Admin | Coach LMS\r\n9.Parents Concerns Changes | Parent Mobile & Web\r\n10.UBI Grading", target: "100%" }
      ] },
      { id: "cf28417", code: "28417", name: "Abhishek Rana", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Student Mobile App v2\r\n2.Recent course update\r\n3.Student Direct POC | Coach LMS mobile app\r\n4.Parent Mobile App\r\n5.Student & Parent Leave List Visibility in mobile app\r\n6.TETR Term Report\r\n7.Tools on the App Dashboard\r\n8.Mutiple Popup UX\r\n9.Not a session> Can we do the same for the mobile app\r\n10. Assignment Resubmit > Same for the student app\r\n11. Admin>Configuration: add limit for flag name and description\r\n12. Attendance page change\r\n13.Mobile App Assignment Submission by Camera", target: "100%" }
      ] },
      { id: "cf28414", code: "28414", name: "Aryan Sharma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Developed Generic Admin Panel for Masters' Union Flagship Events (Bio-Sciences Event)", metric: "Built a configurable event management admin panel supporting registrations, payments, attendee management, pricing, check-in, CRM, QR generation, and event configuration. The system is reusable for future flagship events without requiring code changes.", target: "20%" },
        { title: "Implemented Bio-Sciences Event Registration UI & Dreamcast QR Integration", metric: "Developed all registration forms for the Bio-Sciences event, including multiple registration categories and dynamic fields. Currently implementing the Dreamcast QR code entry API for attendee verification and event check-in.", target: "20%" },
        { title: "Implemented UnionStack in Lead Matrix V2 (Admin Panel)", metric: "Integrated UnionStack file management service into the Lead Matrix V2 admin panel, enabling secure file uploads, storage, and file management within the application.", target: "20%" },
        { title: "Implemented Outbound Email Service", metric: "Developed and integrated a reusable outbound email service across Masters' Union applications for sending transactional emails, registration confirmations, notifications, and event communications.", target: "10%" },
        { title: "Implemented Cookie Consent & Privacy Policy", metric: "Implemented Cookie Consent and Privacy Policy features across MastersUnion.org and TETR.org to improve compliance and enhance user privacy management.", target: "10%" },
        { title: "Maintained MastersUnion.org & TETR.org Forms and Backend Integrations", metric: "Managed website forms, implemented enhancements, fixed issues, and maintained backend integrations to ensure reliable data collection and API communication.", target: "20%" }
      ] },
      { id: "cf28409", code: "28409", name: "Kuldeep Singh", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28399", empType: "Full-time", kras: [
        { title: "PGP and UG print collaterals - 10%", metric: "Plan and deliver end-to-end creative support for UG Orientation, , id card, Tent card,and digital assets, \r\nensuring timely execution and brand consistency.", target: "10%" },
        { title: "Marketing ad Creatives", metric: "Design and deliver PGP ads and offer letter with a focus on high-quality layouts,", target: "10%" },
        { title: "UG/PG Digital collaterals", metric: "Design and execute all PGP print collaterals, certificates, id card, Cue Card, standee, Agenda, ensuring on-time delivery and print accuracy.", target: "60%" },
        { title: "UG/PG Event Related Creatives", metric: "Design and deliver high-quality PGP marketing ad, ensuring brand consistency\r\nand campaign readiness.", target: "20%" },
        { title: "PGP and UG print collaterals", metric: "Plan and deliver end-to-end creative support for UG Orientation, , id card, Tent card,and digital assets, \r\nensuring timely execution and brand consistency.", target: "10%" },
        { title: "Marketing ad Creatives", metric: "Design and deliver PGP ads and offer letter with a focus on high-quality layouts,", target: "10%" },
        { title: "UG/PG Digital collaterals", metric: "Design and execute all PGP print collaterals, certificates, id card, Cue Card, standee, Agenda, ensuring on-time delivery and print accuracy.", target: "60%" },
        { title: "UG/PG Event Related Creatives", metric: "Design and deliver high-quality PGP marketing ad, ensuring brand consistency\r\nand campaign readiness.", target: "20%" }
      ] },
      { id: "cf28415", code: "28415", name: "Prince Kumar Sharma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Student Reimbursement Module", metric: "Students can now raise and submit reimbursement requests through this module, upload the required supporting documents, and track the approval status in real time, enabling a seamless and transparent reimbursement process.", target: "25%" },
        { title: "Product Delivery – CoachLMS", metric: "1.Student Direct POC | Coach LMS\r\n2.Attendance Exemption | User Mgment | Admin Panel\r\n3.WhatsApp & Mail Reply | Help & Support | LMS & Admin\r\n4.Coach LMS | Admin Notifications Control\r\n5.Parents Concerns Changes | Parent Mobile & Web\r\n6.Multiple consent form\r\n7. parent consent form\r\n8.Session reording upload \r\n9.Session resource bulk upload\r\n10.PM email detailed stats (Leaders Email | Admin | Coach LMS)\r\n11.Assignment Save & Draft\r\n12.Notification control admin \r\n13. Ai Resume Control\r\n14. Parent Notifications\r\n15.Session lambda function for thumb generater\r\n16.Attendance Exemption | User Mgment | Admin Panel", target: "100%" }
      ] },
      { id: "cf28418", code: "28418", name: "Ankush Kumar Jagga", title: "Intern", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28494", empType: "Full-time", kras: [
        { title: "Certificate CDN Creation", metric: "Developing and implementing collection email functionality for multiple UG programs to automate student communication", target: "25%" },
        { title: "Collection Email Functionality for Multiple UG Programs MU", metric: "Integrating the Cashfree payment gateway into the Dinero platform for secure online payment processing.", target: "25%" },
        { title: "Cashfree Payment Integration on Dinero", metric: "Designing and implementing Visa, Travel, and Buddy forms for TETR to support the student onboarding process.", target: "25%" },
        { title: "TETR Visa, Travel & Buddy Forms", metric: "Automating Term 0 email workflows triggered after deposit fee payment for TETR students.", target: "25%" }
      ] },
      { id: "cf28419", code: "28419", name: "Deepinderpal Singh", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Central MU Website Lotties", metric: "Skill Enhancement on AI Tools\r\nDelivery in TAT", target: "30%" },
        { title: "UG Videos", metric: "UG Videos", target: "15%" },
        { title: "Event Motion Graphics", metric: "Event Motion Graphics", target: "15%" },
        { title: "Executive Education Motion Ads and Videos", metric: "Executive Education Motion Ads and Videos", target: "20%" },
        { title: "Internal Lotties and GIFs", metric: "Internal Lotties and GIFs", target: "20%" }
      ] },
      { id: "cf27529", code: "27529", name: "Manisha Roy", title: "Senior Program Manager - I", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Onboard Masters through structured demo evaluations, ensuring alignment with UG pedagogy standards, learner maturity, and curriculum goals.", target: "40%" },
        { title: "Student Satisfaction", metric: "Ensure consistent teaching quality across UG programs by tracking feedback and supporting Masters with clear guidance and expectations.", target: "25%" },
        { title: "Accessibility of Interactions", metric: "Enable guest talks, mentoring sessions, and industry exposure activities appropriate for UG learners.", target: "20%" },
        { title: "New Initiatives and Experiments", metric: "Experiment with new UG teaching formats, demo frameworks, or engagement models to improve learning effectiveness and scalability.", target: "15%" }
      ] },
      { id: "cf28421", code: "28421", name: "Sandeep Kumar", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Brand", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Makers Lab SM Videos", metric: "Kinetic Walls (The Next Tech 1.0) Motion Design\r\nSkill Enhancement on AI Tools\r\nDelivery in TAT", target: "15%" },
        { title: "MentorUnion SM Videos", metric: "MentorUnion SM Videos", target: "30%" },
        { title: "The Next Gene Motion Graphics", metric: "The Next Gene Motion Graphics", target: "40%" },
        { title: "Landing Page Videos", metric: "Landing Page Videos", target: "15%" }
      ] },
      { id: "cf27565", code: "27565", name: "Mannat khurana", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf27990", empType: "Full-time", kras: [] },
      { id: "cf27567", code: "27567", name: "Amit Joshi", title: "General Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf28423", code: "28423", name: "Pratibha Salaria", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28394", empType: "Full-time", kras: [
        { title: "Cards management in Orbit for FInance", metric: "Using Card Management, users can make payments independently within their assigned spending limit. Invoice proof is required for verification and security purposes, ensuring proper documentation, transparency, and compliance with financial controls.", target: "25%" },
        { title: "Credit System in Orbit", metric: "Credits have been added to the vendor’s account for the cancelled request, and the user can apply these credits toward upcoming requests. The credited balance will remain available for future utilization.", target: "20%" },
        { title: "Approval required from School head if the request raised other then users self department then respective head to give approval", metric: "Requests raised for another school will automatically be routed to the respective School Head for approval, ensuring that the appropriate school-level authority reviews and authorizes the request before further processing.", target: "15%" },
        { title: "UI Improvement of Dinero", metric: "Enhancing the UI/UX of Dinero along with optimizing the overall workflow to provide a more intuitive, efficient, and seamless user experience across the platform.", target: "15%" }
      ] },
      { id: "cf27648", code: "27648", name: "Mohd. Shaz Khan", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Senior Cinematographer. Fulfil event cinematography requests.", target: "100%" }
      ] },
      { id: "cf27696", code: "27696", name: "Mukesh dixit", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf27744", code: "27744", name: "Tasaduq Shafi", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf26279", empType: "Full-time", kras: [
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Speakers for Quorum, B2B L&Ds", target: "10%" },
        { title: "Accessibility of Interactions", metric: "Lead B2B/L&D engagements and Outclass ecosystem building | Align a min of [A] offcampus shoots and Factory Visits", target: "50%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate 4 internship, live project, or placement-linked opportunities for students through CXO, VC, content creator, and operator networks built via sessions and Outclass engagements.", target: "10%" },
        { title: "Student Satisfaction", metric: "Maintain an average student satisfaction score of 4.8/5 or above across all sessions by ensuring strong speaker alignment, timely coordination etc", target: "20%" }
      ] },
      { id: "cf27683", code: "27683", name: "Sahil Verma", title: "Associate Director", dept: "c8", bu: "Central Functions", subDept: "Leadership", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Masters' Union Website", metric: "Masters' Union Website", target: "20%" },
        { title: "TETR Website", metric: "TETR Website", target: "10%" },
        { title: "Anandi Website", metric: "Anandi Website", target: "5%" },
        { title: "LeadMatrix", metric: "LeadMatrix", target: "10%" },
        { title: "Orbit (Web + Mobile)", metric: "Orbit (Web + Mobile)", target: "5%" },
        { title: "MentorUnion (Web + Mobile)", metric: "MentorUnion (Web + Mobile)", target: "10%" },
        { title: "MSB Website", metric: "MSB Website", target: "2%" },
        { title: "Dinero / MR CRM Portal", metric: "Dinero / MR CRM Portal", target: "3%" },
        { title: "LaunchPad", metric: "LaunchPad", target: "3%" },
        { title: "PGP TBM / TETR / Mobile Apps", metric: "PGP TBM / TETR / Mobile Apps", target: "2%" },
        { title: "Central Graphic / Motion", metric: "Central Graphic / Motion", target: "30%" }
      ] },
      { id: "cf28425", code: "28425", name: "Kritika", title: "Manager", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28826", empType: "Full-time", kras: [
        { title: "Central MU design", metric: "1. Ensure all design outputs across all departments\r\n2. Handle Orbit requests\r\n3. Leading TheNextGene event - for Graphics and Motion design outputs", target: "30%" },
        { title: "Escalation Handling", metric: "1. Minimize escalations, avoid roadblocks and ensure smooth project delivery \r\n2. Review and provide design feedbacks to team members", target: "10%" },
        { title: "Creative Direction", metric: "Ideate and brainstorm for upcoming events design direction", target: "15%" },
        { title: "Team Management & Process Building", metric: "1. Getting hands-on with Claude, Kling and other AI tools for automating repetitive tasks.\r\n2. Team upskilling with regular design sessions", target: "35%" },
        { title: "Central MU Motion Graphics", metric: "Handling MentorUnion, MakersLab, TheNextGene, and other depts. motion graphics outputs, Lotties and other assets.", target: "10%" }
      ] },
      { id: "cf27768", code: "27768", name: "Mayank Bhatia", title: "Senior Program Manager - I", dept: "c4", bu: "Central Functions", subDept: "Marketing (Mayank)", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "cf28428", code: "28428", name: "Sahil Yadav", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "LLM-Powered Chatbot Integration", metric: "Building an AI-powered chatbot for the Lead Matrix CRM using OpenAI with Gemini and Claude as fallback models. Developed the complete frontend and backend with streaming responses, context management, function/tool calling, analytics, and features for lead insights, appointment scheduling, payment link generation, and CRM assistance.", target: "30%" },
        { title: "International Student Form Integration", metric: "Developing dynamic student admission forms with frontend and backend support for lead capture, eligibility checks, application submissions, and fee payments. Automated CRM synchronization, Google Sheets updates, communication workflows, and validation-driven onboarding processes.", target: "20%" },
        { title: "Google Sheets Integration for All MU Programs", metric: "Building a scalable Google Sheets API integration with BullMQ to automate CRM data synchronization across all programs, including sheet creation, record updates, duplicate prevention, and payment status tracking", target: "20%" },
        { title: "MU Widget Backend Development", metric: "Developed the backend infrastructure for MU widgets and integrated secure payment workflows across all student-facing forms with scalable APIs, webhook handling, payment tracking, and seamless CRM integration.", target: "10%" },
        { title: "Mentor Union Lead Integration", metric: "Designing a centralized lead integration system to consolidate inquiries from the website, chatbot, WhatsApp, Meta Ads, and other sources into the Lead Matrix CRM, enabling automated lead management, scoring, stage tracking, and communication workflows", target: "10%" },
        { title: "In-house Date Range Picker Package", metric: "Developed a reusable and customizable date range picker package with preset ranges, calendar navigation, validation, and seamless integration across multiple applications to ensure a consistent user experience.", target: "10%" }
      ] },
      { id: "cf28427", code: "28427", name: "Karan Chauhan", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "UnionStack Integration for V1 Forms", metric: "Integrate UnionStack across all 14 V1 admission branches, replacing FileStack for all document upload and retrieval workflows while maintaining compatibility with existing processes.", target: "35%" },
        { title: "UnionStack Integration for V2 Forms", metric: "Implement UnionStack integration across all existing V2 forms and ensure support for additional forms introduced during the quarter.", target: "30%" },
        { title: "FileStack to UnionStack Data Migration", metric: "Migrate all existing FileStack document URLs stored in the database to UnionStack-compatible URLs to ensure uninterrupted document access after FileStack subscription decommissioning.", target: "25%" },
        { title: "Query Management System for New Forms", metric: "Design and implement a query management system for the new forms to enable users to raise, track, and manage queries efficiently.", target: "20%" }
      ] },
      { id: "cf28429", code: "28429", name: "Prateek Shuka", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Advanced Widget Management System", metric: "Design and implement an advanced widget management system to improve widget creation, configuration, and lifecycle management across the CRM platform.", target: "40%" },
        { title: "RBAC & User Management", metric: "Develop a Role-Based Access Control (RBAC) and user management module to enable secure, scalable permission management across Super Admin, Admin, Student Portal, and Widget Repository.", target: "20%" },
        { title: "CRM Feature Enhancements", metric: "Deliver new business requirements, including Export Timeline functionality, Admin Dashboard enhancements, and other approved feature requests.", target: "20%" },
        { title: "Outreach SMS Integration", metric: "Integrate SMS communication services into the CRM to support outreach workflows with reliable delivery and backend integration.", target: "20%" }
      ] },
      { id: "cf28426", code: "28426", name: "Ankita Verma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28394", empType: "Full-time", kras: [
        { title: "MentorUnion Admin Control Suite for scale and programme management", metric: "Perform end to end testing of new admin control suit along with it perform integration testing with the mentor and mentee panel along with the super admin suits", target: "5%" },
        { title: "MentorUnion notifications and communication triggers", metric: "Perform end to end testing of the notifications and emails trigger on every action and mentor and mentee able to get the proper comms on every action they perform.", target: "20%" },
        { title: "Mobile app launch of mentorunion for mentor and mentee both", metric: "Perfom end to end testing of the mentor and mentee flow and check the integration testing also between the two flows and along with admin suits", target: "40%" },
        { title: "Mentorunion Group call", metric: "After zoom integration, Group call feature need to integrate with the mentorunion and have to perform a sanity /smoke/ integration and functional testing here so that goup call feature works properly", target: "5%" },
        { title: "Credit Hub Flow and razorpay integration", metric: "Credit hub integration for the mentorunion leads, perform endit to end testing so that mentyee will able to get the proper credits to schedule the call", target: "30%" }
      ] },
      { id: "cf27778", code: "27778", name: "Gautam Kumar", title: "Program Manager", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf28430", code: "28430", name: "Satinder Kumar", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28494", empType: "Full-time", kras: [
        { title: "Leadsquare Opporunity for Multi-Program & Multi-Cohort Application Support", metric: "LeadSquared Opportunity enhancement to support multi-program and multi-cohort applications, enabling accurate opportunity creation, updates, and synchronization for applicants across multiple offerings.", target: "30%" },
        { title: "MoEngage integration for the All the tetr current Program", metric: "Implement MoEngage integration across all current Tetr programs to enable event tracking, audience segmentation, and personalized communication. This will automate user engagement throughout the applicant journey and improve campaign effectiveness.", target: "25%" },
        { title: "Dynamic interview Feedback builder form", metric: "Build a configurable interview feedback form builder to support custom evaluation criteria, dynamic questions, and standardized feedback collection across multiple programs and interview rounds.", target: "25%" },
        { title: "flow integration for pathFinder program, GIEP program, Masters C2 new flow", metric: "Implement end-to-end application flow integrations for the Pathfinder Program, GIEP Program, and Masters C2, including application processing, workflow automation, and system integrations.", target: "20%" }
      ] },
      { id: "cf28431", code: "28431", name: "Parminder Nath", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28425", empType: "Full-time", kras: [
        { title: "Bharat Programmes", metric: "Maintain quality & timelines for- \r\n*PGP Bharat & Bharat Summer Fellowship - Reports and Brochure \r\n*PGP Bharat Ads & Email Banners Creatives\r\n*Orientation Print & Digital Collaterals\r\n*Webinar Creatives", target: "20%" },
        { title: "MentorUnion", metric: "Maintain quality & timelines for- Mentor Union\r\n*Daily Social media ads & Crousals \r\n*Meta ads\r\n*Newsletters \r\n*Reel covers & Thumbnails", target: "10%" },
        { title: "Master Relations", metric: "Maintain quality & timelines for- Master Relations\r\n*The Next Gene Event end-to-end digial & print requirements \r\n*MR Teams internal events", target: "25%" },
        { title: "Founder's Office", metric: "Founder Office\r\n*Scratch upcoming new edition work", target: "20%" },
        { title: "Ops, HR", metric: "Ops, HR", target: "10%" },
        { title: "Resource Allocation", metric: "Resource Allocation", target: "15%" }
      ] },
      { id: "cf28432", code: "28432", name: "Vishali Bansal", title: "Executive", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28396", empType: "Full-time", kras: [
        { title: "1. Masters' Union Website All UG Programmes", metric: "1. Program Ownership & Delivery \r\n2. Code Quality & Bug Prevention\r\n3. Performance & Optimization \r\n4. Collaboration & Dependency Handling\r\n5. Productivity & Ownership Mindset", target: "100%" },
        { title: "1. Website Development & Delivery", metric: "Masters' Union website (programme & landing pages)\r\n\r\n1. Building and delivering assigned website features and pages with responsive, pixel-perfect UI and on-time completion.\r\n2. Handling ongoing enhancements and new page builds.", target: "40%" },
        { title: "2. Code Quality & Performance", metric: "Writing clean, reusable, well-documented code following team standards and the shared component library.", target: "20%" },
        { title: "3. AI-Assisted Development", metric: "Using AI dev tools (Claude / Copilot / Cursor) to speed up development and improve code quality.", target: "15%" },
        { title: "4. Testing & Bug Fixing", metric: "Fixing bugs promptly and supporting QA by writing and maintaining tests for own features.", target: "15%" },
        { title: "5. Ownership & Collaboration", metric: "Collaborating with design and QA, giving clear progress updates, and taking ownership of assigned modules.", target: "10%" }
      ] },
      { id: "cf27833", code: "27833", name: "Jasmeen Kaur", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Video Attendnace\r\n2.Job Deadline | Emailer | Coach LMS\r\n3.Schedule Placement Status | Admin Panel\r\n4.Student Web Revamp - UI Bugs\r\n5.GPA, Grades and Marks Field Restrictions\r\n6.Career Coach | Apply Form | Resume Score\r\n7.Career Coach | Apply Form | Resume Page\r\n8.Remove Check for final placement\r\n9.Bulk Select Option by CSV\r\n10.Career Coach | Duplicate Job | Ask for Program and Cohort\r\n11.Career Coach | In-Placement List | Mark as Placed\r\n12.Emailer time format\r\n13.Coach LMS Summery - E-Mailer\r\n14.Email template for the student.\r\n15.Career Coach | Share Interest | Post Deadline window\r\n16.Course Material Bulk Upload | Admin Panel\r\n17.Career Coach | Job List | Delete Job with Reason\r\n18.Career Coach | InterviewAI | API Need & N8N\r\n19.Career Coach | Applicants | Zip Folder Download\r\n20.Career Coach | Students List | Primary Domain Resume\r\n21.Clear Formatting | Admin Panel\r\n22.Career Coach | Job List | Column Addition\r\n23.Application Rate table\r\n24.Student Web Career Coach UIUX\r\n25.Floating Job to Multiple Programs\r\n26.Student - Career Coach UIUX\r\n27.Analytics UI UX Improvements\r\n28.Inconsitency In Emailer Design\r\n29.Professor Feedback | Help & Support | Admin Panel\r\n30.Student Portal | Career Coach v2 - Part 1\r\n31.Feature Request", target: "100%" }
      ] },
      { id: "cf27873", code: "27873", name: "Lakshay Bedi", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf27930", code: "27930", name: "Anil Kumar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "House Keeping", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf28435", code: "28435", name: "Pooja", title: "Executive", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28396", empType: "Full-time", kras: [
        { title: "1. Masters' Union Website All PGP Programmes excluding -PGP RISE", metric: "1. Program Ownership & Delivery\r\n2. Code Quality & Bug Prevention \r\n3. Performance & Optimization \r\n4. Collaboration & Dependency Handling\r\n5. Productivity & Ownership Mindset", target: "100%" },
        { title: "Website Development & Delivery", metric: "Masters' Union website and Masters Camp website\r\n\r\n1. Building and delivering assigned website features and pages with responsive, pixel-perfect UI and on-time completion.\r\n2. Handling ongoing enhancements and new page builds.", target: "40%" },
        { title: "2. Code Quality & Performance", metric: "Writing clean, reusable, well-documented code following team standards and the shared component library.", target: "20%" },
        { title: "3. AI-Assisted Development", metric: "Using AI dev tools (Claude / Copilot / Cursor) to speed up development and improve code quality.", target: "15%" },
        { title: "4. Testing & Bug Fixing", metric: "Fixing bugs promptly and supporting QA by writing and maintaining tests for own features.", target: "15%" },
        { title: "5. Ownership & Collaboration", metric: "Collaborating with design and QA, giving clear progress updates, and taking ownership of assigned modules.", target: "10%" }
      ] },
      { id: "cf28436", code: "28436", name: "Sharmila Saren", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28411", empType: "Full-time", kras: [] },
      { id: "cf27990", code: "27990", name: "Mahima Mahur", title: "Manager", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf27958", code: "27958", name: "Ashish Sharma", title: "Senior Executive", dept: "c3", bu: "Central Functions", subDept: "Accounts Payable", managerId: "cf1205", empType: "Full-time", kras: [] },
      { id: "cf27959", code: "27959", name: "Nivethitha Devi M", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Student Success Coordination", metric: "Track and support student progress — Manage performance tracking and follow-ups for assigned cohorts.", target: "30%" },
        { title: "Academic Scheduling", metric: "Manage timetabling and session coordination — Ensure conflict-free scheduling of academic sessions.", target: "25%" },
        { title: "Learning Material Management", metric: "Maintain and update LMS content — Keep course materials current and accessible.", target: "25%" },
        { title: "Stakeholder Communication", metric: "Coordinate with faculty and students — Serve as a reliable point of contact on academic matters.", target: "20%" }
      ] },
      { id: "cf28439", code: "28439", name: "Akash Saha", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Orbit Masters Module & Organization Administration", metric: "Develop a centralized Orbit Masters Module to manage core organizational master data, including users, departments, schools, programs, cohorts, and other administrative entities. Implement role-based management, configurable master records, and streamlined administration to improve data consistency and operational efficiency across the platform. Enable scalable organization management through a unified administrative interface.", target: "20%" },
        { title: "Unified Approval Workflow & Real-Time Notifications", metric: "Design and implement a centralized approval workflow for both RMS and Procurement modules. Introduce configurable approver management along with real-time Socket.IO notifications for approval actions and status updates. Enhance transparency and accelerate approval turnaround time.", target: "15%" },
        { title: "RMS & ClickUp Integration", metric: "Integrate the Request Management System (RMS) with ClickUp to automate task creation and project tracking. Ensure seamless synchronization of request data between both platforms. Improve operational efficiency by reducing manual task management.", target: "15%" },
        { title: "Multi Invoice Processing For single PO", metric: "Implement a feature that enables vendors to upload a single invoice against multiple Purchase Orders. Improve invoice processing efficiency, eliminate duplicate uploads, and simplify finance reconciliation. Ensure seamless validation and allocation across linked POs.", target: "15%" },
        { title: "PO Credit Utilization", metric: "Develop a comprehensive PO Credit Utilization system within Orbit to manage and track credit balances associated with Purchase Orders. Implement automated credit utilization for cancelled travel requests and ensure accurate adjustment of available credits across future procurements. Improve financial control, reporting, and auditability through centralized credit tracking.", target: "15%" },
        { title: "Credit Card Expense", metric: "Enable users to upload credit card statements, receipts, and supporting documents for expense verification. Utilize AI to extract transaction details, validate submitted expenses, and automatically route expense claims and top-up requests to the Finance team for review and approval.", target: "20%" }
      ] },
      { id: "cf27995", code: "27995", name: "Ashish Singh Bhandari", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf28438", code: "28438", name: "Hemant", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28399", empType: "Full-time", kras: [
        { title: "PGP and UG print collaterals", metric: "Plan and deliver end-to-end creative support for UG Orientation, including event branding, print collaterals, presentations, standees, and digital assets, ensuring timely execution and brand consistency.", target: "30%" },
        { title: "Marketing ad Creatives", metric: "Design and deliver PGP brochures and reports with a focus on high-quality layouts, brand consistency, and production-ready outputs within defined timelines.", target: "20%" },
        { title: "UG/PG Digital collaterals", metric: "Design and execute all PGP print collaterals, including standees, banners, certificates, and event materials, ensuring on-time delivery and print accuracy.", target: "10%" },
        { title: "UG/PG Event Related Creatives", metric: "Design and deliver high-quality PGM marketing ad creatives across digital platforms, ensuring brand consistency, timely execution, and campaign readiness.", target: "40%" },
        { title: "PGP and UG print collaterals", metric: "Plan and deliver end-to-end creative support for UG Orientation, including event branding, print collaterals, presentations, standees, and digital assets, ensuring timely execution and brand consistency.", target: "30%" },
        { title: "Marketing ad Creatives", metric: "Design and deliver PGP brochures and reports with a focus on high-quality layouts, brand consistency, and production-ready outputs within defined timelines.", target: "20%" },
        { title: "UG/PG Digital collaterals", metric: "Design and execute all PGP print collaterals, including standees, banners, certificates, and event materials, ensuring on-time delivery and print accuracy.", target: "10%" },
        { title: "UG/PG Event Related Creatives", metric: "Design and deliver high-quality PGM marketing ad creatives across digital platforms, ensuring brand consistency, timely execution, and campaign readiness.", target: "40%" }
      ] },
      { id: "cf28440", code: "28440", name: "Sanjay Baro", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Student Module Development on Orbit", metric: "Student Reimbursement Module on Orbit with redesigned workflow segregation. Delivered bulk upload claim raising, bank detail validations, and streamlined reimbursement processing — significantly reducing manual effort and improving turnaround time.", target: "25%" },
        { title: "Zoho Integration on Orbit", metric: "Delivered end-to-end Zoho integration across Reimbursements, Subscriptions, and Student modules. Engineered real-time data synchronization to Zoho Books, eliminating manual accounting entries and ensuring cross-platform financial data integrity along with zoho tags.", target: "25%" },
        { title: "Reimbursement System Refactor & Enhancement", metric: "Refactored the Reimbursement System with a new category-head mapping architecture supporting multiple invoice-level allocations. Implemented advance payment request and advance credit system for employee reimbursements, streamlining pre-expense disbursements. Improved expense allocation accuracy and financial traceability across the approval pipeline.", target: "25%" },
        { title: "Student Vault - Authentication & Department Flow", metric: "Secure Authentication & Department-Based Claim Flow.Built a secure Email/OTP-based authentication flow for Student Vault. Implemented department-based claim raising and bank detail update workflows with validation safeguards, strengthening platform security and streamlining student operations.", target: "15%" },
        { title: "Subscription Module Refactor & Procurement Linkage", metric: "Refactored the Subscription Module with new invoice tracking capabilities and integrated it with the Procurement Management System. Established PO-to-subscription mapping, improving vendor payment reconciliation and recurring expenditure visibility", target: "10%" }
      ] },
      { id: "cf28442", code: "28442", name: "Saif Ali", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Multi-Level Approval Workflow - Finance Management", metric: "Implemented a hierarchical expense approval chain (Department Head → Business Head → Organization Head), enforcing spend governance and ensuring no expense is processed without the required sign-offs.", target: "20%" },
        { title: "Procurement & Travel Module - Enhancement and Integration", metric: "Enhanced the Travel module to auto-generate Purchase Orders directly from booked travel tickets, giving vendors a clear PO-backed structure and eliminating dependency on manual spreadsheet tracking.", target: "15%" },
        { title: "Vendor & Contract Management System", metric: "Built a centralized system for vendor onboarding and contract lifecycle management - agreements, renewal and expiry visibility, and a single source of truth for all vendor contracts.", target: "15%" },
        { title: "Card Management System (Forex / Prepaid / Credit)", metric: "Delivered a module to manage corporate Forex, prepaid, and credit card statements along with invoice reconciliation, giving Finance a consolidated view of card spend.", target: "30%" },
        { title: "Cross-Platform Interoperability & Workflow Automation", metric: "Designed and shipped integrations between Orbit and Zoho, ClickUp, Darwinbox, LMS, and MentorUnion.", target: "20%" }
      ] },
      { id: "cf28012", code: "28012", name: "Shashank Rai", title: "Team Lead", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29487", empType: "Full-time", kras: [
        { title: "Media & Production", metric: ". and above request fulfilment for event coverage. Foto Owl live for 24 hour photo turnaround.", target: "100%" }
      ] },
      { id: "cf28023", code: "28023", name: "Purushottam Kumar Chaubey", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf28444", code: "28444", name: "Mohommad Arsad Siddiqui", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Concerns raised from different pages (Attendance, Assignments)\r\n2.Ally Rewamp\r\n3. Cohort page ui/ux improvement\r\n4.Direct support\r\n5.global search feedback", target: "100%" }
      ] },
      { id: "cf28039", code: "28039", name: "Kapil Chauhan", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf28044", code: "28044", name: "Anushka Tiwari", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf27356", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Support\r\n2. Grading Releases.\r\n3. Assigned PRDs", target: "100%" }
      ] },
      { id: "cf28052", code: "28052", name: "Akash P K", title: "Team Lead", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28637", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "Brand and Marketing Lead. Own Project A-Team end-to-end (brand, content, ops, policy, budget). First competition wins this quarter.\r\nBuild the A-Team foundation: operations, policy and content engine set up this quarter.", target: "100%" }
      ] },
      { id: "cf28073", code: "28073", name: "Neha", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf28067", code: "28067", name: "Eby Manuel", title: "Team Lead", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "DOP. Shoot 10x ads every month.\r\nDOP. Shoot 4x brand films this quarter.", target: "100%" }
      ] },
      { id: "cf28066", code: "28066", name: "Soumadip Patra", title: "Team Lead", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Post Production Head. Manage delivery of 10x ads every month.\r\nLead edit on 1x marquee brand film this quarter.\r\nLead edit on 2x micro brand films this quarter.\r\nLead edit on 1x moonshot this quarter.\r\nOwn post pipeline health. Hold delivery TAT within target for all Fiction output.", target: "100%" }
      ] },
      { id: "cf28068", code: "28068", name: "Mainak Baidya", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28066", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Sr Motion Graphics Designer. MG for 10x ads every month.\r\nMotion graphics for 4x brand films this quarter.", target: "100%" }
      ] },
      { id: "cf28074", code: "28074", name: "Sreejith Padmakumar", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28066", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Sr Sound Engineer. Sound design for 10x ads every month.\r\nSound design for 4x brand films this quarter.", target: "100%" }
      ] },
      { id: "cf28071", code: "28071", name: "Khushi Nahar", title: "Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Influencer Partnerships Lead. 8x campaigns live every month, driving 15M views a month.\r\n1x celebrity integration this quarter.\r\nBuild the pipeline so 10+ MU students cross 10K followers by year-end.\r\nClose the hire for Influencer Executive this quarter.", target: "100%" }
      ] },
      { id: "cf28076", code: "28076", name: "Joel Anto", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28066", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Editor. Edit 3x ads every month.", target: "100%" }
      ] },
      { id: "cf28077", code: "28077", name: "B Bhanu Prakash", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28066", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Editor. Edit 3x ads every month.", target: "100%" }
      ] },
      { id: "cf28093", code: "28093", name: "Sasha Bakshi", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Director's Office", managerId: "cf26279", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite, align and execute a minimum of [Y] CXO workshops/masterclass ( folks from top brands - senior management)", target: "18%" },
        { title: "Student Satisfaction", metric: "Maintain an average student satisfaction score of 4.8/5 or above across all sessions by ensuring strong speaker alignment, timely coordination etc", target: "10%" },
        { title: "Accessibility of Interactions", metric: "Organize and execute [A] off campus shoots | Align Industry Partners for ODCs | Align VCs/Content Creators/Dropshippers etc as per the requirement and fitment", target: "20%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Speakers for Quorum, B2B L&Ds, AI Summit, etc", target: "30%" }
      ] },
      { id: "cf28447", code: "28447", name: "Utkarsh", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28494", empType: "Full-time", kras: [
        { title: "Multi-Program & Multi-Cohort Application Support", metric: "Extend the platform so users can apply to multiple programs and cohorts with correct validation, default-cohort assignment, and ended-cohort handling.", target: "20%" },
        { title: "Application Form Delivery (Pathfinder, MIM & Executive Program)", metric: "Build and ship application forms end-to-end — multi-step UI, frontend and backend validation, PDF download, and submission workflow.", target: "20%" },
        { title: "Lead, CRM & Google Sheets Integrations", metric: "Push application and lead data reliably to Google Sheets (Bachelor's & Master's), Dinero, LeadSquared, Facebook Lead Ads, and the capture widget, for both new and existing users.", target: "20%" },
        { title: "Authentication, Session & Platform Reliability", metric: "Maintain secure, reliable auth and session handling — login/logout, password reset, multi-tab sync, and region-specific redirections.", target: "10%" },
        { title: "Quality, Bug Fixes & Workflow Improvements", metric: "Resolve defects and harden workflows — standardised error messages and status codes, tighter validation, and data-consistency fixes.", target: "15%" }
      ] },
      { id: "cf28116", code: "28116", name: "Upendra Kumar Byahut", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29487", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Line Producer. Execute on-ground production for every Non-Fiction shoot.", target: "100%" }
      ] },
      { id: "cf28137", code: "28137", name: "Devansh Harsh Kotak", title: "Senior Manager - I", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Sr Creative Director. Ship 10x ads every month. Brand team owns every UG, PG and Exec creative.\r\nShip 1x marquee brand film this quarter.\r\nShip 2x micro brand films this quarter.\r\nShip 1x moonshot this quarter.", target: "80%" },
        { title: "Media & Production", metric: ". and above shoot fulfilment for every Fiction shoot (via Abhishek Mishra).\r\nEdit, grade, sound and MG delivery for all Fiction output (via Soumadip).", target: "20%" }
      ] },
      { id: "cf28141", code: "28141", name: "Gaurav Jain", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cfx4", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Extracting [X] new relevant leads for different programs through data scraping and ensuring . of these are correctly mapped in the CRM.", target: "20%" },
        { title: "Accessibility of Interactions", metric: "Build and maintain user friendly platforms with >80 NPS such as a Master Portal, CRM Dashboards, Scheduling Tools, and Community Dashboards to track engagement.", target: "30%" },
        { title: "New Initiatives and Experiments", metric: "Identify and automate atleast [Y] workflows using AI tools to handle errors and repetitive manual work to increase team productivity such as Smart bots for data cleaning.", target: "30%" },
        { title: "New Initiatives and Experiments", metric: "Help all the MR Team Leaders to prepare intitutive Dashboard to represent their productivity and achievements - atleast [Z] in a fiscal year", target: "20%" }
      ] },
      { id: "cf28449", code: "28449", name: "Sandeep Kumar", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30096", empType: "Full-time", kras: [] },
      { id: "cf28453", code: "28453", name: "Parvesh Yadav", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Dashboard Builder Development", metric: "Design and develop a dynamic Dashboard Builder to enable administrators to create, configure, and manage custom dashboards with reusable widgets and flexible layouts.", target: "30%" },
        { title: "Profile Evaluation Dashboards", metric: "Build three dedicated dashboards for Profile Evaluation, Profile Categorization, and Profile Segregation to provide data-driven insights and streamline the admission evaluation process", target: "20%" },
        { title: "Meta Conversion API Integration", metric: "Integrate Meta Conversion APIs for PGP Bharat, 4 Nations MBA, and London Immersion Program to enable reliable server-side event tracking and campaign attribution.", target: "20%" },
        { title: "Bucket-Based List Management", metric: "Develop a Bucket Management module that allows users to group multiple lists into a single bucket and execute communication campaigns directly at the bucket level.", target: "15%" },
        { title: "Automate Google Sheets for Marketing", metric: "Design and implement Google Sheets automation for the marketing team to synchronize CRM data, automate lead reporting, campaign tracking, and eliminate manual data management.", target: "15%" }
      ] },
      { id: "cf28179", code: "28179", name: "Shubham Kaushal", title: "Deputy Director", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Delivery", metric: "Driving 1000+ Joinings per Quarter, MU: 948, TETR: 72", target: "50%" },
        { title: "Candidate Experience", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4/5)", target: "10%" },
        { title: "Employer Branding", metric: "Microsite (MU/TETR Careers Site): A dedicated careers platform showcasing opportunities, culture, and employer brand for MU and TETR. Design, build, and launch a dedicated MU/TETR Careers microsite by [30th September], covering both brand identities with live job postings, culture content, and employee stories - integrated with DarwinBox ATS for seamless application submission.", target: "10%" },
        { title: "Process Efficiency", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Productivity", metric: "Team ROI measures the return generated by the team, ≥10× every month.", target: "10%" },
        { title: "Reporting & Analytics", metric: "TA/BU Dashboard: Provides real-time visibility into recruitment performance, pipelines, and key hiring metrics. Ensure the TA/BU Recruitment Dashboard is actively used by all BU heads and TA stakeholders for hiring decisions, maintained at . data accuracy, with real-time updates, and reviewed [monthly/quarterly] to track recruitment performance against BU-wise hiring targets.", target: "10%" }
      ] },
      { id: "cf28178", code: "28178", name: "Zainab Hamid Wani", title: "Program Manager", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf28451", code: "28451", name: "Pranav Bhalaria", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28716", empType: "Full-time", kras: [
        { title: "MU Website", metric: "Complete assigned MU Website screens by sprint deadlines", target: "20%" },
        { title: "Revision Count", metric: "Reduce personal revision count by 25% through self-checklist", target: "20%" },
        { title: "Figma Hygiene", metric: "Maintain Figma file hygiene on all personal deliverables", target: "20%" },
        { title: "Design Critiques", metric: "Participate actively in team design critiques", target: "20%" },
        { title: "Design Exploration", metric: "Take initiative on 1 self-driven design exploration", target: "20%" },
        { title: "1. Masters Union Website", metric: "1.⁠ ⁠Drive end-to-end UI/UX design execution and optimization for the Masters' Union SaaS platform. .\r\n2. Manage design tasks and user experience enhancements for the Masters' Union mobile application. .\r\n3. Collaborate on the design of upcoming product flows, features, and interface requirements for Dinero. .\r\n4.⁠ ⁠Deliver continuous design refinements and fulfill ad-hoc product requirements across ongoing projects. .", target: "100%" }
      ] },
      { id: "cf28496", code: "28496", name: "Karanpreet Singh Heer", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28403", empType: "Full-time", kras: [
        { title: "MasterCamp & MSB Website Design", metric: "1. Design and enhance the MasterCamp website based on upcoming requirements and design priorities. \r\n2. Design and enhance the MSB website across new and existing pages and user flows.\r\n3. Refine existing website designs to improve visual consistency, usability, and overall user experience. \r\n4. Incorporate design feedback and ensure timely delivery of assigned website tasks.", target: "40%" },
        { title: "Product Design Support", metric: "1. Support Mentor Union SaaS and mobile app design tasks wherever required.\r\n2. Assist with upcoming Dinero product flows, features, and design requirements as needed. \r\n3. Support design refinements, iterations, and ad-hoc product requirements across ongoing projects.", target: "60%" }
      ] },
      { id: "cf28183", code: "28183", name: "Yashik Tandon", title: "General Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf1255", empType: "Full-time", kras: [
        { title: "Mentorship via MentorUnion", metric: "Lead [A] priority MentorUnion closures across product, technology, operations, reporting, compliance and external deployment.", target: "30%" },
        { title: "Mentorship via MentorUnion", metric: "Deliver [B] external-scale milestones across credits and payments, AI support, mobile readiness, lead journeys, institutional controls and campaign readiness.", target: "20%" },
        { title: "Mentorship via MentorUnion", metric: "Oversee the onboarding and activation of [C] high-quality mentors across priority domains, programmes and geographies.", target: "20%" },
        { title: "Student Satisfaction", metric: "Maintain a student satisfaction score of [D] through relevant mentor supply, reliable bookings, session quality and timely support closure.", target: "20%" },
        { title: "Internship/Placement Facilitation", metric: "Enable [E] qualified student opportunities through mentors and the wider Masters’ Union ecosystem.", target: "10%" }
      ] },
      { id: "cf28454", code: "28454", name: "Darpan", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28396", empType: "Full-time", kras: [
        { title: "Website Production", metric: "Achieve 0 critical bugs in MU Website production", target: "20%" },
        { title: "Regression checklist", metric: "Build and maintain regression checklist for all MU Website modules", target: "20%" },
        { title: "QA cycle", metric: "Reduce QA cycle time by 25% through early smoke testing", target: "20%" },
        { title: "Orbit", metric: "Log all defects in Orbit with screenshot and reproduction steps", target: "20%" },
        { title: "Browser & Testing", metric: "Cross-Browser & Responsive Testing", target: "20%" },
        { title: "1. Test Coverage & Execution", metric: "Masters' Union, Masters Camp\r\n\r\n1. Writing and executing thorough test cases across critical user flows on both websites.\r\n2. Owning end-to-end QA for assigned releases.", target: "30%" },
        { title: "2. AI-Powered Test Automation", metric: "Building and expanding AI-assisted automated tests (Playwright + AI) and integrating them into the CI/CD pipeline.", target: "30%" },
        { title: "3. Bug Detection & Reporting", metric: "Detecting, documenting, and tracking bugs with clear, reproducible steps and correct priority.", target: "20%" },
        { title: "4. Regression & Release QA", metric: "Running regression and pre-release QA to ensure stable, bug-free deployments.", target: "10%" },
        { title: "5. Process & Collaboration", metric: "Collaborating with developers on quality standards and continuously improving the testing process.", target: "10%" }
      ] },
      { id: "cf28208", code: "28208", name: "Paramjeet Siwal", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28860", empType: "Full-time", kras: [] },
      { id: "cf28209", code: "28209", name: "Pitamber Sharma", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30314", empType: "Full-time", kras: [] },
      { id: "cf28213", code: "28213", name: "Sakshi Sunil", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf28221", empType: "Full-time", kras: [] },
      { id: "cf28216", code: "28216", name: "Yukti", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cf28221", code: "28221", name: "Vaibhav Midha", title: "Manager", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf28230", code: "28230", name: "Pulkit Marwaha", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Teaching Excellence", metric: "Deliver high-quality lectures and course content — Drive engaging, well-structured delivery across assigned courses.", target: "30%" },
        { title: "Research & Publication", metric: "Lead research projects and publications — Produce and disseminate scholarly work in reputed outlets.", target: "25%" },
        { title: "Student Mentorship", metric: "Mentor students and elevate learning outcomes — Provide structured guidance and performance support.", target: "20%" },
        { title: "Curriculum Innovation", metric: "Design and enhance course curriculum — Build and refine course outlines and assessment design.", target: "15%" },
        { title: "Industry Engagement", metric: "Build industry connects for academic enrichment — Bring practitioners and real-world context into courses.", target: "10%" }
      ] },
      { id: "cf28455", code: "28455", name: "Pankaj Kumar", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28395", empType: "Full-time", kras: [
        { title: "1. Orbit (Web + Mobile)", metric: "1. Develop Card Management Finance Module Frontend (web+ mob) – .\r\n2. Enhance Recipient Process Frontend Functionality & User Experience – .\r\n3. Upgrade Procurement Management System Frontend with UI Improvements – .\r\n4. Student Module in Finance (web + mob) – .", target: "100%" },
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf28247", code: "28247", name: "Ram Kumar", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28116", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Production Assistant. On-ground support for Non-Fiction shoots.", target: "100%" }
      ] },
      { id: "cf28246", code: "28246", name: "Aditya Shekhar", title: "Program Manager", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Reporting & Analytics", metric: "TA/BU Dashboard: Provides real-time visibility into recruitment performance, pipelines, and key hiring metrics.", target: "80%" },
        { title: "Process", metric: "Process excelence MU/TETR. Drove process excellence by optimizing recruitment workflows, reducing manual effort, and ensuring a seamless hiring experience for stakeholders.", target: "20%" }
      ] },
      { id: "cf28281", code: "28281", name: "Abhishek Nair", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf30225", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Edit and colour for Decoded by MU and Insights, 50x videos every month.\r\nEdit and colour support for long-form YouTube IPs.", target: "100%" }
      ] },
      { id: "cf28290", code: "28290", name: "Shivangi Rajora", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Foster faculty development and research initiatives", metric: "Drive research policy and support researcher productivity — Contribute to research policy making and ensure researchers face no hurdles in research activities as part of the Research Committee.", target: "15%" }
      ] },
      { id: "cf29925", code: "29925", name: "Nikita Chawla", title: "Associate Director", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cfx5", empType: "Full-time", kras: [] },
      { id: "cf28308", code: "28308", name: "Muneer Kalliyil", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf28312", code: "28312", name: "Hemant", title: "Executive", dept: "c3", bu: "Central Functions", subDept: "Payroll", managerId: "cf26195", empType: "Full-time", kras: [] },
      { id: "cf28315", code: "28315", name: "Naveen Sagar", title: "Senior Manager - II", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "cf28324", code: "28324", name: "Nikita Das", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf28517", code: "28517", name: "Jyotiraditya Mishra", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28387", empType: "Full-time", kras: [
        { title: "MentorUnion SaaS Readiness & Backend Platform Enhancement", metric: "he domain-wise AI assistants in Launchpad are currently built on the OpenAI Assistants API, which is being deprecated. The assistants will be migrated to a RAG-based architecture using embeddings, where domain content is indexed in a vector store and retrieved at query time to generate accurate, context-aware responses. This ensures uninterrupted assistant functionality post-deprecation, improves response relevance, and gives us full control over content updates without dependency on the deprecated API.", target: "20%" },
        { title: "Launch Pad RAG conversion of AI assistant (Assistants API migration)", metric: "The MentorUnion module will be enhanced with an organization-level sub-admin role, allowing organizations to delegate administrative responsibilities such as user management, program oversight, and reporting with configurable permissions. This reduces dependency on super admins and improves operational efficiency for tenant organizations, in line with the SaaS model.", target: "30%" },
        { title: "MentorUnion – Org sub-admin", metric: "Building on the existing Zoom recording and transcription capability, AI-generated meeting summaries will be implemented for mentor–mentee video calls. Both mentors and mentees will be able to view concise summaries with key discussion points and action items after each session, improving follow-ups and the overall mentoring experience.", target: "20%" },
        { title: "MentorUnion AI transcription summary of video meetings (mentor–mentee side)", metric: "The Zoom integration in Dinero will be updated to comply with the latest Zoom policy and API requirements, along with enhancements to meeting, recording, and access configurations. This ensures the integration remains secure, compliant, and reliable without disruption to existing workflows.", target: "30%" }
      ] },
      { id: "cf28523", code: "28523", name: "Kartik Arora", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28387", empType: "Full-time", kras: [
        { title: "Lead Matrix Integration with MentorUnion (Mentorunion)", metric: "Enhance the MentorUnion Organization Admin module by improving administrative workflows, user and role management, organization-level operations, and backend capabilities to deliver a more scalable, efficient, and enterprise-ready administration experience.", target: "30%" },
        { title: "MentorUnion Organization Admin Enhancement", metric: "Deliver high-priority backend enhancements for Launchpad by improving platform performance, scalability, maintainability, and operational efficiency, ensuring a robust foundation for future feature development and long-term platform growth.", target: "15%" },
        { title: "Launchpad Backend Enhancement & Platform Optimization", metric: "mplement end-to-end user activity tracking across MentorUnion by enhancing backend logging, audit capabilities, and workflow visibility to improve operational monitoring, troubleshooting, and business insights.", target: "40%" },
        { title: "MentorUnion User Activity Tracking & Auditability", metric: "trengthen the MentorUnion backend by implementing architectural, performance, and scalability improvements that support SaaS readiness, multi-organization growth, and a reliable, maintainable platform for future expansion.", target: "15%" }
      ] },
      { id: "cf28526", code: "28526", name: "Kushal Kumar Banyal", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf28528", code: "28528", name: "Gurkaran Singh", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf28531", code: "28531", name: "Shagun Garg", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28494", empType: "Full-time", kras: [
        { title: "Term 0 Email Automation for TETR", metric: "Enhance the overall user interface and user experience of the Dinero Dashboard.\r\nImprove visual consistency across different pages and components.\r\nEnsure the dashboard is responsive and works smoothly across different devices and screen sizes.", target: "20%" },
        { title: "Improve Ui of Dinero Dashboard", metric: "Develop and implement new features based on business and product requirements.\r\nEnhance and maintain existing modules to improve functionality and user experience.\r\nIdentify and resolve technical issues to ensure system stability and reliability.", target: "20%" },
        { title: "TETR Development, Enhancement & System Optimization", metric: "Develop and implement new features and functionalities based on business requirements.\r\nEnhance and maintain existing modules to support evolving product needs.\r\nResolve technical issues and bugs to ensure smooth and stable platform performance.", target: "20%" },
        { title: "Masters’ Union (MU) Development, Maintenance & Feature Enhancements", metric: "Develop and enhance MU Library features to improve overall functionality and usability.\r\nMaintain existing modules and implement changes based on business requirements.", target: "20%" },
        { title: "MU Library Development, Enhancement & System Stability", metric: "Develop and maintain backend services and functionalities based on project requirements.\r\nImplement and enhance APIs to support new and existing application features.\r\nIdentify and resolve backend issues to ensure system stability and reliability.\r\nOptimize backend performance and maintain high code quality while ensuring timely delivery.", target: "20%" }
      ] },
      { id: "cf28522", code: "28522", name: "Mridul", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28396", empType: "Full-time", kras: [
        { title: "1. PGP RISE - and Other pages", metric: "1. Program Ownership & Delivery \r\n2. Code Quality & Bug Prevention \r\n3. Performance & Optimization \r\n4. Collaboration & Dependency Handling \r\n5. Productivity & Ownership Mindset", target: "100%" },
        { title: "1. Website Development & Delivery", metric: "Masters' Union website\r\n\r\n1. Building and delivering assigned website features and pages with responsive, pixel-perfect UI and on-time completion.\r\n2. Handling ongoing enhancements and new page builds.", target: "40%" },
        { title: "2. Code Quality & Performance", metric: "Writing clean, reusable, well-documented code following team standards and the shared component library.", target: "20%" },
        { title: "3. AI-Assisted Development", metric: "Using AI dev tools (Claude / Copilot / Cursor) to speed up development and improve code quality.", target: "15%" },
        { title: "4. Testing & Bug Fixing", metric: "Fixing bugs promptly and supporting QA by writing and maintaining tests for own features.", target: "15%" },
        { title: "5. Ownership & Collaboration", metric: "Collaborating with design and QA, giving clear progress updates, and taking ownership of assigned modules.", target: "10%" }
      ] },
      { id: "cf28530", code: "28530", name: "Akanksha Bairagi", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "UDO SMS Templates", metric: "Work on create and update flow for SMS templates with Unique Digital Outreach (UDO). Cover draft and live templates, DLT mapping, variables, and template status handling in Template Manager.", target: "70%" },
        { title: "Bulk SMS Sending", metric: "Work on test and bulk SMS send through UDO, including queue workers, recipient batches, mobile number format, and message content with dynamic variables for single and mass outreach.", target: "50%" },
        { title: "SMS Webhook Integration", metric: "Work on UDO webhook handling for SMS delivery reports and template approval status. Include payload mapping, queue processing, and status updates so delivery and template state stay in sync with the system.", target: "50%" },
        { title: "Campaign Manager Testing", metric: "Work on Campaign Manager data checks — dashboard metrics, filters (date, school, org), lead conversion numbers, and data accuracy so campaign reports match expected lead and application counts.", target: "90%" }
      ] },
      { id: "cf28364", code: "28364", name: "Sharoz Ali Khan", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29487", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Creative Producer. . and above shoot fulfilment for every Non-Fiction shoot.", target: "100%" }
      ] },
      { id: "cf28525", code: "28525", name: "Vishal Kumar", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28454", empType: "Full-time", kras: [
        { title: "1. TETR Website and Mobile App", metric: "1. Ensure zero critical production defects in TETR Website and Mobile App releases .\r\n2. Execute and maintain regression testing for every release .\r\n3. Complete functional, UI, and staging validation for all assigned features .\r\n4. Document and track all defects with complete details within 24 hours .\r\n5. Enhance QA skills and product knowledge through continuous learning .", target: "100%" }
      ] },
      { id: "cf28529", code: "28529", name: "Osheen Sharma", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28384", empType: "Full-time", kras: [
        { title: "1. LeadMatrix", metric: "1. Complete all assigned LeadMatrix frontend modules by Q3\r\n2. Pass code reviews with fewer than 3 comments per PR\r\n3. Explore and implement email system automation to optimize workflows and improve productivity.\r\n4. Design and implement emails (Newsletters,offer letters,Events, reminders,payments, invoices, confirmations) with responsive and consistent UI.", target: "100%" }
      ] },
      { id: "cf28462", code: "28462", name: "Kritika Sharma", title: "Associate Program Manager", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf28589", code: "28589", name: "Samir Saren", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28394", empType: "Full-time", kras: [
        { title: "1. Zoom MentorUnion Integration", metric: "Complete Zoom MentorUnion Integration with all scheduled features and bug fixes.", target: "40%" },
        { title: "2. Outbound Email Logs", metric: "Implement dinero email logs.", target: "20%" },
        { title: "3. Dinero Flow Automation", metric: "Automate the Dinero workflow to reduce manual intervention and improve processing efficiency.", target: "30%" },
        { title: "4. Email Analysis", metric: "Manage email templates & monitor email delivery", target: "10%" }
      ] },
      { id: "cf28591", code: "28591", name: "MD Shahnawaz", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28394", empType: "Full-time", kras: [
        { title: "Pathfinder Program\r\nGIEP Program", metric: "Perform end-to-end QA for Pathfinder & GIEP, validating application flow, LeadSquared & Dinero syncing, email triggers, and successful production launch.", target: "30%" },
        { title: "Program Validation", metric: "Remove the existing restrictions that prevent users from applying to multiple programs. Also, handle scenarios where a user has multiple applications or wants to create additional applications from the dashboard.", target: "20%" },
        { title: "Influencer Page Widget", metric: "Perform end-to-end QA testing of the widget across all influencer pages, validating functionality, data syncing.", target: "10%" },
        { title: "Tetr app community", metric: "Community section in the app for user engagement and interaction.", target: "25%" },
        { title: "Application V2 Release", metric: "Ensure Application V2 is production-ready by validating user flows, integrations, and UI/UX.", target: "15%" }
      ] },
      { id: "cf28465", code: "28465", name: "Antra", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Ensure quality assurance of course delivery — Conduct quality assurance reviews of course delivery across faculty as part of the Learning Committee.", target: "15%" }
      ] },
      { id: "cf28475", code: "28475", name: "Bhasker Malu", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf28491", code: "28491", name: "Nitin Shridhar", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28183", empType: "Full-time", kras: [
        { title: "Mentorship via MentorUnion", metric: "Identify, engage and onboard [X] high-quality domestic and international mentors aligned to programme demand and priority network gaps.", target: "35%" },
        { title: "Mentorship via MentorUnion", metric: "Activate [Y]% of newly onboarded mentors within 7 days through profile completion, LOE readiness, programme mapping and at least one bookable slot.", target: "25%" },
        { title: "Mentorship via MentorUnion", metric: "Secure [A] qualified B2B or B2I discovery meetings with institutions or enterprises exploring mentorship, placement, career-services or L&D solutions.", target: "30%" },
        { title: "Internship/Placement Facilitation", metric: "Identify and progress [W] qualified student opportunities through mentor and institutional relationships.", target: "10%" }
      ] },
      { id: "cf28483", code: "28483", name: "Saurabh Saran", title: "Program Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30341", empType: "Full-time", kras: [] },
      { id: "cf28480", code: "28480", name: "Md Zakaullah", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28764", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Producer. Coordinate production for Fiction shoots.", target: "100%" }
      ] },
      { id: "cf28592", code: "28592", name: "Swati", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28395", empType: "Full-time", kras: [
        { title: "1. Orbit + CRM (Web + Mobile)", metric: "1. Develop Contract Management Module Frontend (Web + Mobile) \r\n2. Perform Travel Module UI Optimization & Frontend Enhancements \r\n3. Enhance Reimbursement Process Frontend Functionality & UI", target: "100%" }
      ] },
      { id: "cf28506", code: "28506", name: "Gaurang Khanna", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Writer Director. Write and direct 5x ads every month.\r\nWriter or AD for 1x brand film this quarter.", target: "100%" }
      ] },
      { id: "cf28539", code: "28539", name: "Abhishek Rathore", title: "Manager", dept: "c3", bu: "Central Functions", subDept: "FP&A", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf28536", code: "28536", name: "Shatakshi Rastogi", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing (Mayank)", managerId: "cf27768", empType: "Full-time", kras: [] },
      { id: "cf28540", code: "28540", name: "Dhiren Madhok", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Travel", managerId: "cfx7", empType: "Full-time", kras: [] },
      { id: "cf28543", code: "28543", name: "Lovely Gupta", title: "Program Manager", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf28548", code: "28548", name: "Mohammad Zaid", title: "Associate Program Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf28553", code: "28553", name: "Neha Shrivastava", title: "Program Manager", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf28554", code: "28554", name: "Anurag Karmshil", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Photographer. Fulfil event photography requests.", target: "100%" }
      ] },
      { id: "cf28563", code: "28563", name: "Mohit Soni", title: "Executive", dept: "c3", bu: "Central Functions", subDept: "Accounts Receivables", managerId: "cf1205", empType: "Full-time", kras: [] },
      { id: "cf28570", code: "28570", name: "Paras Choudhary", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Career Coach | Apply Form | Resume Score\r\n2. Resume Score | Applicant List | Career Coach | Bulk Upload\r\n3. Career Coach | Apply Form | Last Resume Page\r\n4. Career Coach | Job List | Delete Job with Reason\r\n5. Career Coach | Job List | Column Addition\r\n6. Floating Job to Multiple Programs\r\n7, Application Rate Table\r\n8. Job Deadline | Emailer | Coach LMS\r\n9. Career Coach | Share Interest | Post Deadline Window\r\n10. Career Coach | Applicants | ZIP Folder Download\r\n11. Career Coach | Students List | Primary Domain Resume\r\n12. Nationality | Eligibility Additions | Post Job | Admin | Career Coach\r\n13. Work Authorization Filter | Eligibility Additions | Post Job | Admin | Career Coach\r\n14. Google Calendar Invitation\r\n15. Admin > Company Create | Delete Functionality Handling\r\n16. Career Coach | Interview AI | API Need & N8N\r\n17. Eligibility Change Logs\r\n18. Career Coach | UI/UX Revamp\r\n19. Admin Panel | Career Coach | Job Details | Add Company Link Field\r\n20. Schedule Placement Status | Admin Panel\r\n21. Career Coach | Offers Page | Upload/Download Excel", target: "100%" }
      ] },
      { id: "cf28594", code: "28594", name: "Uday Shankar Mishra", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Procurement Module Development", metric: "Architected and developed the end-to-end PR-to-PO Procurement workflow, introducing scalable Goods/Service bifurcation, multi-item procurement, role-based approvals, category hierarchy, school/organization-based access, budget and pricing controls, vendor document management, and service period/event support.", target: "30%" },
        { title: "Recipient & Vendor Management — KYC verification and organizational hierarchy", metric: "Re-architected the Recipient module for staff/student and vendor onboarding, covering creation, listings, filters, previews, and detail views. Integrated real-time PAN/GST KYC verification with auto-filled details, duplicate validation, international vendor support, approval notifications, and hierarchy-based recipient management. Extended backend services, reporting, and CSV exports with enhanced validation and organizational hierarchy support.", target: "20%" },
        { title: "Card Management System — top-up workflow & role-based card access", metric: "Building the card top-up workflow — TopUpRequestDetailPopup, top-up status utilities, role-based finance/approval menu routing, statement-page binding & filters, and role-based card visibility + transaction access on the backend (card_topup_request model, creator/updatedBy in timeline).", target: "30%" },
        { title: "Travel module reliability & multi-segment trips", metric: "Enhanced the Travel module with multi-segment trip support, advanced date validation, expense allocation, category controls, improved error handling, and mobile fixes. Optimized backend performance, migrated claim breakup handling, and improved travel request retrieval.", target: "10%" },
        { title: "Zoho vendor sync & expense-category / GL / term engine", metric: "Synced Orbit recipients/vendors with Zoho and drove the org-based category engine — FinanceExpenseCategoriesNew (MU vs TETR), glAllowTags department-based category visibility, categoryDates/glDate-based cohort & program visibility, term-based school-program breakup, and blocking category-2 selection at user level in MU (finance selects before Zoho push).", target: "10%" }
      ] },
      { id: "cf28583", code: "28583", name: "Ankit Singh Yadava", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Compliance", metric: "TA ops. Achieve . compliance with hiring documentation.", target: "80%" },
        { title: "Process", metric: "Process excelence MU/TETR. Drove process excellence by optimizing recruitment workflows, reducing manual effort, and ensuring a seamless hiring experience for stakeholders.", target: "20%" }
      ] },
      { id: "cf28610", code: "28610", name: "Aditi Sharma", title: "Manager", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf28598", code: "28598", name: "Dinesh Tehlan", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Visa", managerId: "cfx8", empType: "Full-time", kras: [] },
      { id: "cf28996", code: "28996", name: "Poornima Rai", title: "Associate Director", dept: "c10", bu: "Central Functions", subDept: "New Initiatives", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "cf28649", code: "28649", name: "Manas Ranjan Panda", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Parent-Dashboard on v2", metric: "Enhance the Parent dashboard with more upcoming requirements that are under discussion right now. Show the fee details and history of payment on the dashboard. Enable to download the receipt of each payment from this dashboard. In v2, the dashboard will be available for multiple childs for same parent as well.", target: "35%" },
        { title: "Parent-Dashboard on Anandi-Form - on both v1 and v2", metric: "Build a spin-off of the registration form of Anandi-Bengaluru, which will help in generating leads.", target: "10%" },
        { title: "Anandi-Gurgram lead generation(registration) form", metric: "The details that filled in the Anandi-form by the parents/guradians will be shown on the student-profile-details. If anything can be updated from here by the admin. Earlier in V1, there were only 2 steps here. Now, will have 8 steps as Anandi form has got more new steps here.", target: "10%" },
        { title: "Update the student-profile section for both v1 and v2", metric: "Needs to integrate the EPPS form so that the data can be captured, be persistent throughout the changes and saves", target: "5%" },
        { title: "Integrate \"Executive Presence and Public Speaking\" form", metric: "The Anandi-form will have more post-enrollment steps to get the better student-details as per requirement. We will have to have fields to collect around 10 documents post-enrollment and also sign the terms and condition, hence these steps will be added in both v1 and v2.", target: "40%" }
      ] },
      { id: "cf28620", code: "28620", name: "Ankit Kumar", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf28650", code: "28650", name: "Gaurav Singh", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28387", empType: "Full-time", kras: [
        { title: "Add 3 more steps in the Anandi-form ; both in v1 and v2", metric: "Lead the end-to-end development of the Super Admin module.(Frontend+ Backend)", target: "50%" },
        { title: "Super Admin Development (Mentorunion)", metric: "Implement and integrate the Razorpay payment gateway, including the credit purchase workflow and comprehensive payment logging.", target: "20%" },
        { title: "Credit Hub Development and Payment Integration (Mentorunion)", metric: "Integrate Orbit into the Mentor Portal to support invoicing operations and streamline invoicing workflows.", target: "15%" },
        { title: "Invoicing Integration with Orbit (Mentorunion)", metric: "Perform backend optimizations to enhance the scalability, performance, and reliability of the SaaS platform.", target: "15%" }
      ] },
      { id: "cf28651", code: "28651", name: "Rohit Basant Yadav", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "D2C Brand BootCamp Form", metric: "Built and shipped a new end-to-end D2C Brand BootCamp application form from scratch, enabling the program to start accepting student applications.Integrated the multi-step apply-to-pay journey (profile → academics → post-admission Razorpay payment) with UnionStack file uploads, delivering a complete working flow.", target: "10%" },
        { title: "PGP General Management Form", metric: "Built the PGP Global Management (Executive Education) application form, extending the multi-step form framework to a new executive-education program.Fixed the payment and redirection issues in the executive flow so admitted candidates complete payment and land on the correct dashboard reliably.", target: "10%" },
        { title: "PGP Europe Form (incl. Europe–India variant)", metric: "Stabilized the PGP Europe form by resolving multiple production bugs — current country/state autofill, UG academic fields, result-await input hiding, and application-percentage logic. Supported the single-form Europe (USD) + Europe-India (INR) variant with correct currency/programId handling, and fixed the Download/PDF and My Profile sections.", target: "10%" },
        { title: "File-Upload Migration (Filestack → UnionStack)", metric: "Migrated file uploads across the new forms from Filestack to UnionStack, including env/API-key configuration and stored-URL handling. Fixed upload edge cases (max file size, direct-key auth) to keep document submission reliable across programs.", target: "10%" },
        { title: "Multi-Org WhatsApp Template Token System", metric: "Built a token catalog API (/getWhatsappTemplateTokens) that returns canonical common fields plus each org/school's own dynamic lead columns, each tagged with its data source (fieldType).Implemented a send-time resolver that maps each template variable to its correct value using a cascade (canonical lead → extension → org's own table), with common fields always read from the canonical table to prevent stale/empty data.Added a WhatsApp-safe formatter that sanitizes values (strips control chars, formats dates) and blocks sends on empty params, eliminating provider delivery failures (error 707).Created an org-extension side-loader to batch-load school-specific lead rows generically, removing the need for hardcoded models per school.", target: "60%" }
      ] },
      { id: "cf28637", code: "28637", name: "Ananya Dengri", title: "Senior Manager - I", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Brand Initiatives", metric: "36 newsletters this quarter: 4x Pratham Mittal, 4x Swati Ganeti, 4x Nandini Seth every month.\r\nReddit: manage hate on ads and spends, push SEO and LLM ranking, hold 4.5 Google rating. Quora: keep building the repository.\r\nPartnerships live: Hyrox Delhi (24 to 25 July), INC42 and Pint of View.\r\nSecond airport OOH burst across Tier-1 cities. Non Zero as execution partner.\r\nIn-house brand measurement system live, tracking reach and sentiment across every platform.\r\nGenerate 5L revenue through merch this quarter.\r\n2x major releases every month (MUIF, MU Ventures, University release).\r\nMU website creative direction and central prospectus at ..\r\n30 research calls for PG cohort consideration (15 prospects, 15 enrolments).", target: "100%" }
      ] },
      { id: "cf28652", code: "28652", name: "Shilpa Kumari", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28384", empType: "Full-time", kras: [
        { title: "end-to-end delivery of frontend features", metric: "1. Own the end-to-end delivery of frontend features from design review to production deployment.", target: "25%" },
        { title: "Reduce duplicate code", metric: "2. Reduce duplicate code, maintain minimal code review rework, and achieve high code quality standards.", target: "25%" },
        { title: "Optimize rendering performance", metric: "3. Optimize rendering performance, bundle size, and user experience.", target: "25%" },
        { title: "consistent UI/UX across all dashboards", metric: "4. Ensure consistent UI/UX across all dashboards by standardizing fonts, typography, spacing, reusable components, and design patterns, reducing UI inconsistencies in new feature development.", target: "25%" },
        { title: "learn and apply modern frontend technologies", metric: "5. Continuously learn and apply modern frontend technologies and best practices", target: "25%" }
      ] },
      { id: "cf28656", code: "28656", name: "Abhishek Singh", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "DOP. Shoot 1x Built at MU long-form video every month.\r\nSupport Off Campus shoots as DOP, 2x videos every month.", target: "100%" }
      ] },
      { id: "cf28657", code: "28657", name: "Harsh Purohit", title: "Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28716", empType: "Full-time", kras: [
        { title: "Masters' Union Website - Sprint", metric: "Complete all assigned MU Website screens within sprint timelines", target: "20%" },
        { title: "Cycle Revisions Website", metric: "Reduce design revision cycles through thorough self-review checklist", target: "20%" },
        { title: "Figma Proficiency Website", metric: "Improve Figma proficiency — auto-layout and components on all tasks", target: "20%" },
        { title: "Log Task", metric: "Log daily task updates in Orbit without reminders", target: "20%" },
        { title: "Learning & Development", metric: "Complete 1 advanced Figma course", target: "20%" },
        { title: "1. Masters Union Website", metric: "1. Deliver high-quality, consistent designs across all Masters' Union website projects by adhering to established design standards and reusable patterns .\r\n2. Improve website UX and delivery efficiency through requirement alignment, regular UX audits, and usability best practices .\r\n3. Design and develop new webpages using AI tools such as Lovable to accelerate prototyping and implementation .\r\n4. Create and maintain a centralized repository of reusable assets, including faculty images, logo variants, and other website resources .\r\n5.Contribute to team growth through documentation, knowledge sharing, design critiques, and continuous skill development initiatives .", target: "100%" }
      ] },
      { id: "cf28786", code: "28786", name: "Jaya Sharma", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28716", empType: "Full-time", kras: [
        { title: "Website Page", metric: "Complete all assigned MU Website page designs on time", target: "20%" },
        { title: "Token System", metric: "Use design system tokens and components on . of deliverables", target: "20%" },
        { title: "Design Review", metric: "Participate in at least 2 design reviews per month", target: "20%" },
        { title: "TL review", metric: "Submit for TL review 1 day before deadline consistently", target: "20%" },
        { title: "Learning & Development", metric: "Complete Figma fundamentals certification", target: "20%" },
        { title: "1. Masters Union Website", metric: "1. Website Design & Feature Delivery (25%)\r\n2. AI-Enabled Design Workflow .\r\n3. Design System & Quality Assurance .\r\n4. UX Research & Product Improvement .\r\n5. Cross-functional Collaboration & Delivery .\r\n6. Learning, Innovation & Knowledge Sharing .", target: "100%" }
      ] },
      { id: "cf28684", code: "28684", name: "Navisha Baid", title: "Senior Manager - I", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf28692", code: "28692", name: "Gunjan Sharma", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Onboard senior industry leaders and practitioners for curriculum delivery across the Strategic Business Management (SBM) and Sustainability programs, aligned with the programs' learning objectives and evolving industry needs.", target: "40%" },
        { title: "Student Satisfaction", metric: "Maintain strong learner feedback for case-based and discussion-led sessions by proactively addressing quality gaps.", target: "30%" },
        { title: "Accessibility of Interactions", metric: "Enable CXO talks, leadership sessions, and industry interactions that strengthen student exposure and professional networks.", target: "15%" },
        { title: "New Initiatives and Experiments", metric: "Design and pilot new leadership-focused or industry-engagement formats within SBM.", target: "15%" }
      ] },
      { id: "cf28694", code: "28694", name: "Manish Kumar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "House Keeping", managerId: "cf28208", empType: "Full-time", kras: [] },
      { id: "cf28751", code: "28751", name: "Tarun - Gupta", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Travel Module UI Optimisation", metric: "Enhance the user interface of the Travel Module to improve usability, accessibility, and overall user experience. Ensure the design aligns with product requirements and design standards.", target: "25%" },
        { title: "Contract Management Module Design", metric: "Design intuitive and user-friendly screens for the Contract Management Module based on business requirements. Ensure consistency with the overall product design system and user workflows.", target: "25%" },
        { title: "Reimbursement Process UI Update", metric: "Revamp the reimbursement process interface to simplify user interactions and improve process efficiency. Incorporate stakeholder feedback to enhance usability and reduce friction.", target: "20%" },
        { title: "Orbit Platform Documentation", metric: "Prepare and maintain comprehensive design documentation for the Orbit platform, including design guidelines, workflows, and component specifications. Ensure documentation remains updated and easily accessible.", target: "20%" },
        { title: "User Flow & Process Optimisation", metric: "Review and optimize end-to-end user flows across key modules to improve navigation, reduce complexity, and enhance the overall user experience. Collaborate with stakeholders to implement process improvements effectively.", target: "10%" }
      ] },
      { id: "cf28714", code: "28714", name: "Parinita Kaur", title: "Deputy Director", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf28752", code: "28752", name: "Vishal - Chaudhari", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28716", empType: "Full-time", kras: [
        { title: "Anandi Site Speed", metric: "Improve Anandi site speed and Core Web Vitals", target: "25%" },
        { title: "Page Schedule", metric: "Deliver Masters' Union pages on schedule, matched to their brand guidelines", target: "15%" },
        { title: "Library", metric: "Build a reusable Framer component library for both projects", target: "20%" },
        { title: "CMS and Code", metric: "Learn Framer's CMS and code overrides properly", target: "15%" },
        { title: "Documentation", metric: "Document handoffs (specs, style notes) to cut down revisions", target: "10%" },
        { title: "Track Traffic", metric: "Track traffic/bounce data on my pages and report it", target: "15%" },
        { title: "1. Anandi Website", metric: "1. Improve Anandi site speed and Core Web Vitals \r\n2. Deliver Masters' Union pages on schedule, matched to their brand guidelines \r\n3. Build a reusable Framer component library for both projects \r\n4. Learn Framer's CMS and code overrides properly \r\n5. Document handoffs (specs, style notes) to cut down revisions \r\n6. Track traffic/bounce data on my pages and report it", target: "90%" },
        { title: "2. Masters Union website", metric: "1.Run a Core Web Vitals audit on all live Anandi pages\r\n2.Fix LCP issues (compress images, lazy-load below-fold content)\r\n3.Reduce CLS by locking in element sizes before load\r\n4.Re-test and confirm page speed score above 90", target: "10%" }
      ] },
      { id: "cf28716", code: "28716", name: "Shristi", title: "Team Lead", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Website Design( MU & Anandi)", metric: "Masters' Union and Anandi website\r\n\r\n1. Maintain high-quality, consistent design standards across all digital products \r\n2. Improve UX and delivery efficiency through audits, stakeholder alignment, and usability best practices \r\n3. Support team growth through mentorship and professional development initiatives\r\n4. Use AI tools to streamline design, prototyping, and delivery while maintaining high-quality user experiences", target: "30%" },
        { title: "AI Integration in design", metric: "1. Improve design consistency across all MU and Anandi digital products through design system governance.\r\n2. Reduce design rework by ensuring requirement clarity and stakeholder alignment before design execution.", target: "20%" },
        { title: "Team Management and Escalation Handling", metric: "1. Leverage AI tools such as Claude, Lovable and Gemini to design and launch AI-powered web experiences, improving design speed, streamlining ideation, wireframing, prototyping and execution, while maintaining high-quality user experiences.", target: "20%" },
        { title: "Quality Control", metric: "1. Conduct monthly UX audits using AI tools and identify improvement opportunities across MU & Anandi websites\r\n2. Maintain a high standard of design quality by conducting regular design critiques and feedback sessions", target: "20%" },
        { title: "Learning & Innovation", metric: "1. Improve user experience by incorporating usability best practices into all key website journeys.\r\n2. Foster team growth through mentorship, knowledge-sharing sessions, and skill development initiatives.", target: "10%" },
        { title: "1. Website Design( MU & Anandi)", metric: "Masters' Union and Anandi website\r\n\r\n1. Maintain high-quality, consistent design standards across all digital products \r\n2. Improve UX and delivery efficiency through audits, stakeholder alignment, and usability best practices \r\n3. Support team growth through mentorship and professional development initiatives\r\n4. Use AI tools to streamline design, prototyping, and delivery while maintaining high-quality user experiences", target: "30%" },
        { title: "2. AI Integration in design", metric: "1. Improve design consistency across all MU and Anandi digital products through design system governance.\r\n2. Reduce design rework by ensuring requirement clarity and stakeholder alignment before design execution.", target: "20%" },
        { title: "3. Team Management and Escalation Handling", metric: "1. Leverage AI tools such as Claude, Lovable and Gemini to design and launch AI-powered web experiences, improving design speed, streamlining ideation, wireframing, prototyping and execution, while maintaining high-quality user experiences.", target: "20%" },
        { title: "4. Quality Control", metric: "1. Conduct monthly UX audits using AI tools and identify improvement opportunities across MU & Anandi websites\r\n2. Maintain a high standard of design quality by conducting regular design critiques and feedback sessions", target: "20%" },
        { title: "5. Learning & Innovation", metric: "1. Improve user experience by incorporating usability best practices into all key website journeys.\r\n2. Foster team growth through mentorship, knowledge-sharing sessions, and skill development initiatives.", target: "10%" }
      ] },
      { id: "cf30488", code: "30488", name: "Rachit Jain", title: "Associate Director", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf28753", code: "28753", name: "Ekta Bhardwaj", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf28754", code: "28754", name: "Jiten - Verma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28387", empType: "Full-time", kras: [
        { title: "Backend Optimizations for SaaS Platform (Mentorunion)", metric: "Integrate Zoom as the meeting provider for one-on-one mentor-mentee sessions using the Zoom SDK, enabling seamless meeting scheduling, secure session management, and a reliable virtual mentoring experience.", target: "40%" },
        { title: "Zoom Integration for 1:1 Meetings (Mentorunion)", metric: "Implement updated platform policies across mentor and mentee workflows, including enhanced analytics, refined earnings calculations, and policy-driven business logic to improve reporting accuracy, transparency, and alignment with platform requirements.", target: "20%" },
        { title: "Platform Policy Implementation for Mentor and Mentee Workflows (Mentorunion)", metric: "Extend the existing Zoom meeting infrastructure to support group calling capabilities, enabling multi-participant mentor-mentee sessions while ensuring a scalable, reliable, and consistent virtual meeting experience.", target: "30%" },
        { title: "Group Calling Feature for Mentor and Mentee Sessions(Mentorunion)", metric: "Integrate Lead Matrix with MentorUnion to streamline lead management, automate lead synchronization, and improve the flow of prospect data across systems, supporting more efficient lead tracking.", target: "10%" }
      ] },
      { id: "cf28755", code: "28755", name: "Shahnwaj - Alam", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "PGP Bharat Form (including USA-India Variant),", metric: "Build and implement the PGP Bharat Form (including the USA-India Variant) to enable prospective applicants to submit their information seamlessly. The form should support dynamic fields, comprehensive validation, conditional rendering based on the selected program variant, responsive design, secure data handling, and smooth integration with backend APIs for submission and tracking. The objective is to provide a consistent, user-friendly application experience across both the Bharat and USA-India program variants.", target: "20%" },
        { title: "Bloomberg Equity Research Programme", metric: "Develop and implement the Bloomberg Equity Research Programme application form to provide a seamless application experience. The form should include dynamic field rendering, comprehensive input validation, responsive design, secure data handling, and backend API integration for submission and application tracking. The goal is to ensure an intuitive, reliable, and efficient application process for prospective candidates.", target: "20%" },
        { title: "Application Activity tracker", metric: "Design and implement the Application Activity Tracker to record application lifecycle events, including application form start, submission, stage changes, counsellor actions, and payment updates. Ensure seamless backend integration, accurate event logging, optimized performance, and reliable activity tracking across all application workflows.", target: "20%" },
        { title: "PGP Rise: Owners & Promoters Management Form", metric: "Build and implement the PGP Rise: Owners & Promoters Management Form to enable owners and promoters to seamlessly submit and manage their application information. The form should support dynamic field rendering, comprehensive validation, conditional workflows, responsive design, secure data handling, file uploads, and backend API integration. Ensure a smooth end-to-end application experience with reliable performance and production-ready deployment.", target: "20%" },
        { title: "PGP in Entrepreneurship & Business Acceleration", metric: "Build and implement the PGP in Entrepreneurship & Business Acceleration application form to provide a seamless application experience for aspiring entrepreneurs. The form should support dynamic field rendering, comprehensive validation, conditional workflows, responsive design, secure data handling, file uploads, payment integration (if applicable), and backend API integration. Ensure a smooth end-to-end application journey with reliable performance and production-ready deployment.", target: "20%" }
      ] },
      { id: "cf28756", code: "28756", name: "Devansh - Chauhan", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28400", empType: "Full-time", kras: [
        { title: "Implementation of socket", metric: "Implement real-time socket integration in the Travel Module to enable instant data synchronization across users, eliminating the need for manual page refreshes and improving collaboration, coordination, and overall user experience.", target: "30%" },
        { title: "Implementation of sockets in Travel Module", metric: "Implement and deliver the enhancements for EduSpace, including weekly schedule copy-paste, bulk classroom booking, direct classroom selection for users, an improved weekly calendar view, and visibility of pending booking requests to enhance the overall booking experience, usability, and scheduling efficiency.", target: "20%" },
        { title: "Implement and deliver new functionalities of Eduspace", metric: "Implement and deliver new functionalities for the Campus Ops Audit Platform, including issue flagging, assignment comments, tracking the resolution status of flagged issues, and monitoring assignment outcomes such as completed, incorrect, or pending.", target: "10%" },
        { title: "Implement and deliver new functionalities of Campus ops audit platform", metric: "Implement the end-to-end Travel Request to Purchase Order (PO) workflow, enabling the Operations team to create POs directly from approved travel requests while handling key scenarios such as budget updates, ticket cancellations, and other workflow edge cases to improve operational efficiency.", target: "20%" },
        { title: "Travel requests to purchase order flow and implementation", metric: "Build and deliver the Bloomberg Labs platform for the Alumni team, enabling them to assign labs to users through a workflow similar to Makers Lab, with additional enhancements tailored to the Alumni team's requirements", target: "10%" },
        { title: "Build and deliver the Bloomberg Labs for alumni's", metric: "Build and deliver the Bloomberg Labs for alumni's", target: "10%" }
      ] },
      { id: "cf28757", code: "28757", name: "Sameer Ahmad Mir", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cfx9", empType: "Full-time", kras: [
        { title: "Mentor Union , Tetr 2.0", metric: "Help students to connect with Team and issue raised during there journey", target: "100%" }
      ] },
      { id: "cf28737", code: "28737", name: "Nikhil Rawal", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. AMA Sessions\r\n2. Weekly Calls\r\n3. Content Mangement\r\n4. Support", target: "100%" }
      ] },
      { id: "cf28764", code: "28764", name: "Abhishek Mishra", title: "General Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Executive Producer Fiction. . and above shoot fulfilment for every Fiction shoot.\r\nTrack and document budget for every Fiction project.", target: "100%" }
      ] },
      { id: "cf28759", code: "28759", name: "Raja Kumar", title: "Senior Manager - I", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Write, shoot and direct 12x Builders.mu videos every month.", target: "100%" }
      ] },
      { id: "cf28787", code: "28787", name: "Biman Gharai", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cfx9", empType: "Full-time", kras: [
        { title: "Designed Fully scalabele community backend", metric: "Help students to connect to counselors 1:1 and join the community", target: "100%" }
      ] },
      { id: "cf28783", code: "28783", name: "Aditya Kulashri", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Ensure quality assurance of course delivery — Conduct quality assurance reviews of course delivery across faculty as part of the Learning Committee.", target: "15%" }
      ] },
      { id: "cf28785", code: "28785", name: "Sourabh Chanchal", title: "General Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf28126", code: "28126", name: "Divyam Amit Goenka", title: "Associate Director", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "vcf", empType: "Full-time", kras: [
        { title: "1. YouTube IPs (TOFU)", metric: "Upload 2x Off Campus videos every month, now directly under Ishika after Megha's sub-pod closed.\r\nUpload 2x Bharat.mu long-form videos every month (Sabhya's IP).\r\nUpload 1x Built at MU long-form video every month (with Reknown).", target: "18%" },
        { title: "1. YouTube Machine Gun", metric: "16x long-form videos every month across Series C, Classes at MU, Capital Markets and Trading, and Family Business. Naveen leads. Hold the 1 rupee per view rule.", target: "25%" },
        { title: "2. Content (Short form / Long form)", metric: "Ship 10x performance ads every month, the factory. Brand team owns every UG, PG and Exec creative.\r\nShip 1x marquee brand film this quarter.\r\nShip 2x micro brand films this quarter.\r\nShip 1x moonshot this quarter, the big swing. Banda Kaam Ka.\r\nUpload 12x Builders.mu videos every month (Raja's pod under Non-Fiction).\r\nUpload 2x Off Campus shorts every month.\r\nUpload 4x Elevator Pitch reels every month.", target: "24%" },
        { title: "3. Media & Production", metric: ". and above request fulfilment for event coverage. Foto Owl live for 24 hour photo turnaround.\r\n. and above request fulfilment for every shoot (Fiction: Abhishek Mishra, Non-Fiction: Sharoz Khan).\r\nTrack and document the budget for every project.", target: "10%" },
        { title: "4. Socials", metric: "Post 120 stories each month on the main MU page.\r\nUpload 8x carousels every month. Track to 250K followers by March 2027.\r\n8x creator campaigns live every month, driving 15M views a month.\r\nTrack to 15K followers by March 2027. Institution as a founder voice. Inagiffy and Arnav execute.", target: "12%" },
        { title: "5. Brand Initiatives", metric: "36 newsletters this quarter: 4x Pratham Mittal, 4x Swati Ganeti, 4x Nandini Seth every month.\r\nReddit: manage hate on ads and spends, push SEO and LLM ranking, hold 4.5 Google rating. Quora: keep building the repository.\r\nSecond airport OOH burst across Tier-1 cities (Non Zero executes).\r\nHyrox Delhi activation live (24 to 25 July), INC42 and Pint of View running.\r\nIn-house brand measurement system live, tracking reach and sentiment across every platform.\r\nGenerate 5L revenue through merch this quarter.\r\n2x major releases every month (MUIF, MU Ventures, University release).\r\nMU website creative direction and central prospectus at ..\r\n30 research calls for PG cohort consideration (15 prospects, 15 enrolments).", target: "13%" },
        { title: "6. Offline Events", metric: "Execute the flagship 5,000-person event build for October. Venue ops with DLF Cyber Park, run of show, builder fair, speakers and ticketing ready by end September.\r\nRun 4-6 events this quarter (path to 10 mid-size and 10 small a year).", target: "5%" },
        { title: "7. New Initiatives", metric: "Ship Project Bran live by 31 August and drive team adoption. Sudeep leads.\r\nAkash owns Project A-Team end-to-end. First competition wins this quarter, building to 10 at IITs and IIMs plus 20 at Tier 2 and 3.\r\nAt least 2 student teams to YC by year-end, pipeline pushed this quarter (Cohesivity cleared round 1).\r\n10+ students past 10K followers by year-end (Prisha x Reebok was the POC).\r\nBuild and run ai.mu with Spandana. First student co-built page live with a weekly content cadence.", target: "25%" },
        { title: "8. Director's Office", metric: "Pratham Nagpal builds the Operations Dashboard. Auto-triggered MIS in 3 months.", target: "25%" },
        { title: "9. Team Building", metric: "Close priority hires this quarter across leadership and pods (via Neha).", target: "25%" }
      ] },
      { id: "cf28810", code: "28810", name: "Pratibha Christeena Masih", title: "Deputy Director", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf1255", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "A minimum of new, unique industry Masters to the MU network within the fiscal year for contributing across teaching, workshops, and mentorships", target: "50%" },
        { title: "Student Satisfaction", metric: "Achieve an average student satisfaction score of 4.6/5 on the relevance and effectiveness of Master-led sessions and interventions, as measured by post-session feedback.", target: "15%" },
        { title: "Accessibility of Interactions", metric: "Organize direct interactive opportunities for students across programs (AMA, focused GD, Founder-Investor Mixers, Offcampus shoots, Factory Visits, etc)", target: "15%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Speakers for Quorum, B2B L&Ds, etc", target: "10%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate a minimum of new internship or placement opportunities for students through the Master Relations network.", target: "10%" }
      ] },
      { id: "cf28804", code: "28804", name: "Talat Anjum", title: "Senior Program Manager - I", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Identify and onboard industry Masters for the RISE, OPM, and EBAP programs, ensuring alignment with program learning outcomes, learner profiles, and overall program objectives. Additionally, manage the SMG and HROS programs through a managed resource.", target: "40%" },
        { title: "Student Satisfaction", metric: "Ensure high-quality and relevant learning experiences by monitoring feedback, aligning session expectations, and resolving delivery concerns.", target: "30%" },
        { title: "Accessibility of Interactions", metric: "Enable AMAs, expert sessions, and industry interactions that enhance real-world exposure and student engagement.", target: "15%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate internships or live project opportunities through Master networks to support applied learning outcomes.", target: "15%" }
      ] },
      { id: "cf28805", code: "28805", name: "Samar Ansari", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Social Media Creator. Bangalore-led shoots, support 120 stories every month.", target: "100%" }
      ] },
      { id: "cf28809", code: "28809", name: "Karan", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf26293", empType: "Full-time", kras: [
        { title: "Performance marketing Ads", metric: "Performance Marketing Ads (For All Programmes)\r\n\r\n* Create templates for Ads and Carousel \r\n* Create multiple ads for marketing team\r\n* Webinar Ad Set", target: "40%" },
        { title: "Digital Collaterals", metric: "Digital Collaterals (For All Programmes)\r\n\r\n* Webinar Creatives (TV Screens and Digital Standees)\r\n* Brochures ( 1-Pager, 4-Pager )\r\n* E-Communication Creatives", target: "20%" },
        { title: "Printing Collaterals", metric: "Print Collaterals (For All Programmes)\r\n\r\n* Brochures \r\n* Flyers\r\n* Programme Reports (Short & Detailed)\r\n* Cohort Profiles", target: "30%" },
        { title: "Handbooks", metric: "Handbook (For All Programmes)\r\n\r\n* Create new template for Handbooks and cheatsheet", target: "10%" }
      ] },
      { id: "cf28816", code: "28816", name: "Pavit Singh Gujral", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Academic Delivery", metric: "Ensure effective course delivery — Provide clear, engaging instruction across assigned modules.", target: "30%" },
        { title: "Scholarly Contribution", metric: "Contribute to research and knowledge creation — Undertake research initiatives and publish findings.", target: "25%" },
        { title: "Learner Outcomes", metric: "Track and improve student performance — Monitor outcomes and deliver targeted interventions.", target: "20%" },
        { title: "Course Design & Assessment", metric: "Develop course outlines and assessments — Create rigorous, outcome-aligned assessment frameworks.", target: "15%" },
        { title: "Faculty Collaboration", metric: "Collaborate on interdisciplinary initiatives — Partner across courses on shared academic projects.", target: "10%" }
      ] },
      { id: "cf28814", code: "28814", name: "Harish", title: "Associate Program Manager", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf28826", code: "28826", name: "Parul Tayal", title: "Senior Manager - I", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf27683", empType: "Full-time", kras: [
        { title: "Central MU Design", metric: "\"1. Leading design execution across all MU depts, ensuring timely delivery across digital and print.\r\n2. Manage end-to-end design requirements for Orbit and coordinate with stakeholders.\r\n3. Ensure all deliverables align with MU's brand identity and business objectives.\r\n4. Plan and prioritize design requests to maintain quality and efficiency.\"", target: "15%" },
        { title: "Quality Control", metric: "1. Reviewing creative deliverables to ensure accuracy, consistency, and adherence to brand guidelines.\r\n2. Provide timely feedback to improve overall design quality.\r\n3. Maintain high quality standards across digital, print, motion, and presentation assets.\r\n4. Ensure final outputs met stakeholder expectations before delivery.", target: "20%" },
        { title: "Process Building/Team Management", metric: "1. Streamline design workflows and improve task management for smoother execution.\r\n2. Align Team Leads and teams on priorities and project goals.\r\n3. Manage resource allocation and balance workloads across projects.\r\n4. Mentor the team and supported their day-to-day growth and performance.", target: "25%" },
        { title: "Creative Direction", metric: "1. Guide visual concepts and layouts to align with MU's brand identity.\r\n2. Review creatives and provide direction to maintain high design standards.\r\n3. Collaborate with stakeholders to develop impactful creative solutions.\r\n4. Encourage innovation through new design approaches and AI tools.", target: "20%" },
        { title: "Escalation Handling - 20%", metric: "1. Manage urgent requests and stakeholder escalations to ensure timely delivery.\r\n2. Resolve project challenges through effective coordination and prioritization.\r\n3. Balance shifting priorities while maintaining quality and timelines.\r\n4. Improve stakeholder communication and proactively addressing execution challenges.", target: "20%" }
      ] },
      { id: "cf28822", code: "28822", name: "Akshay Shrivastava", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Edit 2x Off Campus long-form videos every month (edit now sits here after Megha closed).", target: "60%" },
        { title: "Content (Short form / Long form)", metric: "Edit 2x Off Campus shorts every month.", target: "40%" }
      ] },
      { id: "cf28827", code: "28827", name: "Aryan Gupta", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Assistant Cinematographer. Support Built at MU and Bharat.mu shoots.", target: "100%" }
      ] },
      { id: "cf28832", code: "28832", name: "Kunal Malhan", title: "Senior Manager - I", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf28837", code: "28837", name: "Manik", title: "Executive", dept: "c8", bu: "Central Functions", subDept: "Designer", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Masters Relation", metric: "Masters Relation-\r\n1. The Next Gene Event Ads\r\n2. The Next Gene Brochure\r\n3. The Next Gene Print Collaterals", target: "40%" },
        { title: "Bharat Programmes", metric: "Bharat Programmes-\r\n1. PGP Bharat & BSF Ads\r\n2. PGP Bharat & BSF Brochures and Reports\r\n3. PGP Bharat & BSF Orientation Collaterals", target: "40%" },
        { title: "Founders Office", metric: "Founders Office-\r\n1. Scratch Magazine Article Work", target: "10%" },
        { title: "Special Events", metric: "HYROX Event\r\n* CDR Files for print", target: "10%" },
        { title: "Masters Relation", metric: "Masters Relation-\r\n1. The Next Gene Event Ads\r\n2. The Next Gene Brochure\r\n3. The Next Gene Print Collaterals", target: "40%" },
        { title: "Bharat Programmes", metric: "Bharat Programmes-\r\n1. PGP Bharat & BSF Ads\r\n2. PGP Bharat & BSF Brochures and Reports\r\n3. PGP Bharat & BSF Orientation Collaterals", target: "40%" },
        { title: "Founders Office", metric: "Founders Office-\r\n1. Scratch Magazine Article Work", target: "10%" },
        { title: "Special Events", metric: "HYROX Event\r\n* CDR Files for print", target: "10%" }
      ] },
      { id: "cf28841", code: "28841", name: "Somye Verma", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Career Coach | Apply Form | Resume Score\r\n2.Career Coach | Job List | Delete Job with Reason\r\n3.Career Coach | Job List | Column Addition\r\n4.Floating Job to Multiple Programs", target: "100%" }
      ] },
      { id: "cf28860", code: "28860", name: "Hritik Garg", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf28859", code: "28859", name: "Aman Singh", title: "Program Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30341", empType: "Full-time", kras: [] },
      { id: "cf28863", code: "28863", name: "Sabhya Sharma", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Write, direct and present 2x Bharat.mu long-form videos every month.", target: "100%" }
      ] },
      { id: "cf28862", code: "28862", name: "Mahima Pandey", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30091", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned design tasks delivered on time .", target: "35%" },
        { title: "Engineering Quality", metric: "Design accuracy & rework rate (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "Usability & visual quality score (out of 5)", target: "25%" },
        { title: "Team Capability & Development", metric: "Participation in reviews & learning sessions", target: "15%" }
      ] },
      { id: "cf28878", code: "28878", name: "Avi Malhotra", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28832", empType: "Full-time", kras: [] },
      { id: "cf28881", code: "28881", name: "Ratnam Kalra", title: "Senior Manager - I", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Associate Creative Director. Write, shoot and direct 6x Builders.mu videos every month.", target: "100%" }
      ] },
      { id: "cf28874", code: "28874", name: "Shailja Kaushik", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf1255", empType: "Full-time", kras: [] },
      { id: "cf28885", code: "28885", name: "Vidisha", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf26279", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite, align and execute a minimum of [Y] CXO led podcasts, fireside chats annually (including high profile Forbes leaders, Parliamentary Guests, etc for Series C Podcasts, fireside chats - super aspirational names)", target: "30%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Foreign Speakers, CMO Roundtable, Golf Sessions", target: "30%" },
        { title: "Student Satisfaction", metric: "Achieve an average student satisfaction score of 4.8/5 on the relevance and effectiveness of Master-led sessions and interventions, as measured by post-session feedback.", target: "10%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate 2 internship, live project, or placement-linked opportunities for students through CXO, VC, content creator, and operator networks built via sessions and Outclass engagements.", target: "10%" }
      ] },
      { id: "cf28907", code: "28907", name: "Rohit Wadhwa", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cfx7", empType: "Full-time", kras: [] },
      { id: "cf28904", code: "28904", name: "Vivek", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28860", empType: "Full-time", kras: [] },
      { id: "cf28916", code: "28916", name: "Piyush Mishra", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30087", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned frontend tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Frontend bugs & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "Page load, runtime & performance adherence (Lighthouse, load time) Score >=85", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf28962", code: "28962", name: "Pratham Nagpal", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Director's Office", metric: "Build the Masters' Union Creative Studio Operations Dashboard. Auto-triggered MIS in 3 months.\r\nMVP of in-house brand measurement system, reach and sentiment across platforms.\r\nSaturday 12 PM weekly pulse and End-of-Month report across every pod.", target: "100%" }
      ] },
      { id: "cf28964", code: "28964", name: "Devika Richaria", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf29189", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Identify, qualify, and close [X] accounts for new CoEs/ Labs per year, aligned to emerging domains (AI, Cyber, Makers, FinTech, Sustainability)", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Identify, Plan, and Execute [Y] Immersion in the fiscal year", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Ensure atleast [Z] no of courses are taught by top Industry brands, partners, and leaders in a fiscal year across programmes", target: "30%" },
        { title: "Student Satisfaction", metric: "Track and maintain feedback mechanism and achieve avg. satisfaction score of 4.6 and above", target: "10%" }
      ] },
      { id: "cf28967", code: "28967", name: "Sakshi", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf26150", empType: "Full-time", kras: [] },
      { id: "cf28993", code: "28993", name: "Salil Narkar", title: "Program Manager", dept: "c10", bu: "Central Functions", subDept: "Special Projects", managerId: "vcf", empType: "Full-time", kras: [] },
      { id: "cf29004", code: "29004", name: "Devpriyo Ray", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Foster faculty development and research initiatives", metric: "Drive research policy and support researcher productivity — Contribute to research policy making and ensure researchers face no hurdles in research activities as part of the Research Committee.", target: "15%" }
      ] },
      { id: "cfC0018", code: "C0018", name: "Bhavika Bali", title: "Consultant", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf29027", code: "29027", name: "Varchasvi Mahajan", title: "Team Lead", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Social Media Lead. Drive 120 stories every month on the main MU page.\r\nSupport the IG content calendar across MU, Builders.mu and Bharat.mu.", target: "100%" }
      ] },
      { id: "cf29042", code: "29042", name: "Tanya Jain", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Masters In Residence", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29056", code: "29056", name: "Yash Sharma", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf26150", empType: "Full-time", kras: [] },
      { id: "cf29065", code: "29065", name: "Priya Jaswal", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28684", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29071", code: "29071", name: "Khushbu", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29087", code: "29087", name: "Keerat Kaur", title: "Senior Manager - I", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29106", code: "29106", name: "Aakriti Bhatnagar", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28832", empType: "Full-time", kras: [] },
      { id: "cf29117", code: "29117", name: "Aashish Yadav", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "UG form integration", metric: "UG form integration in LM", target: "25%" },
        { title: "Tetr competition enhancement", metric: "Tetr competition and quizes enhancment according to new cohorts", target: "25%" },
        { title: "Tetr quiz advance filteration", metric: "advanced filtering capabilities for the quiz module to enable efficient search and better content management", target: "25%" },
        { title: "LM counsellor query management system", metric: "In progress - query management system for counsellors to streamline query tracking, assignment, and resolution workflows", target: "25%" }
      ] },
      { id: "cfInt048", code: "Int048", name: "Gaurav Singh Chauhan", title: "Intern", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [] },
      { id: "cf29796", code: "29796", name: "Samarth Wadhera", title: "Associate Director", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 2", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf29126", code: "29126", name: "Ishika Aggarwal", title: "Senior Manager - I", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "2x Off Campus videos every month, owned directly after Megha closed (Abhishek Singh on camera, Akshay on edit).\r\n2x Bharat.mu long-form videos every month (via Sabhya).\r\n1x Built at MU long-form video every month, owned directly.\r\nDecoded by MU and Insights: 50x videos every month and 2.5M views (via Dhirendra).", target: "100%" }
      ] },
      { id: "cf29144", code: "29144", name: "Sayan Chakraborty", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf26279", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite, align and execute a minimum of [Y] CXO workshops/masterclass ( folks from top brands - senior management)", target: "40%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Speakers for Quorum, B2B L&Ds, AI Summit, etc", target: "10%" },
        { title: "Student Satisfaction", metric: "Achieve an average student satisfaction score of 4.8/5 on the relevance and effectiveness of Master-led sessions and interventions, as measured by post-session feedback.", target: "10%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate 2 internship, live project, or placement-linked opportunities for students through CXO, VC, content creator, and operator networks built via sessions and Outclass engagements.", target: "10%" }
      ] },
      { id: "cf29148", code: "29148", name: "Shaik Shabeer", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29152", code: "29152", name: "Gauri Dixit", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28491", empType: "Full-time", kras: [
        { title: "Mentorship via MentorUnion", metric: "Ensure [W]% of newly credited mentees complete their first MentorUnion booking within 30 days of receiving platform access.", target: "30%" },
        { title: "Mentorship via MentorUnion", metric: "Close [X]% of mentee support cases within the approved SLA across login, credits, discovery, booking, rescheduling, cancellation and session access.", target: "30%" },
        { title: "Mentorship via MentorUnion", metric: "Convert [Y] recurring mentee issues into documented product or process improvements with Product Ops and Tech.", target: "20%" },
        { title: "Student Satisfaction", metric: "Maintain a mentee satisfaction score of [Z] by improving booking support, mentor access and session-issue resolution.", target: "20%" }
      ] },
      { id: "cf29137", code: "29137", name: "Naina Duggal", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29159", code: "29159", name: "Deeksha Singh", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Ensure high-quality student learning outcomes", metric: "Support student progress tracking and follow-ups — Assist in monitoring student performance and coordinating academic support for assigned cohorts.", target: "30%" },
        { title: "Optimize academic operations and processes", metric: "Coordinate academic scheduling and session logistics — Manage timetabling, session coordination, and resource arrangements.", target: "30%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Support course material preparation and upkeep — Assist faculty in preparing and updating course content and learning material.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Coordinate guest sessions and external engagements — Handle scheduling and coordination for guest lectures and industry interactions.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Maintain academic records and reporting — Keep academic data, trackers, and reports accurate and up to date.", target: "10%" }
      ] },
      { id: "cf29170", code: "29170", name: "Suraj Sharma", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30085", empType: "Full-time", kras: [] },
      { id: "cf29172", code: "29172", name: "Muskan Katyal", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf27399", empType: "Full-time", kras: [] },
      { id: "cf29189", code: "29189", name: "Aparna Handa", title: "General Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf1255", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Build and establish [X] new CoEs/ Labs per year; operational activities of running and keeping the lab alive, etc", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Ensure atleast a min of [Y] Immersions being planned and executed in a fiscal year", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Plan and execute atleast [Z] no of courses are by top Industry brands, partners, and leaders in a fiscal year across programmes", target: "30%" },
        { title: "Student Satisfaction", metric: "Track and maintain feedback mechanism and achieve avg. satisfaction score of 4.6 and above", target: "10%" }
      ] },
      { id: "cf29214", code: "29214", name: "Yugal Tamang", title: "General Manager", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 1", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf29215", code: "29215", name: "Mohamed Salman K", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Academic Operations & Course Delivery", metric: "- Ensure timely coordination with masters to understand course requirements, evaluation structures, and session expectations, enabling smooth academic delivery and preparedness for all courses.\r\n- Ensure . timely upload of pre-reads, course materials, and learning resources on the LMS before scheduled sessions, maintaining accessibility and readiness for students.\r\n- Maintain timely and accurate communication of class schedules, evaluations, deadlines, and academic updates to students, ensuring clear dissemination of information with minimal communication gaps.- Conduct . of examinations, quizzes, and evaluations as per academic guidelines, ensuring smooth execution, proper invigilation, and adherence to examination protocols.\r\n- Coordinate effectively with masters for assessments, quizzes, and evaluation processes, ensuring timely sharing of examination materials and support for accurate evaluation completion.\r\n- Maintain ≥99.5% accuracy in grade sheet preparation, score compilation, and academic data consolidation, ensuring error-free records and timely submission of results.\r\n- Ensure seamless coordination with operations teams and stakeholders for classroom requirements, session logistics, and academic support, minimizing operational disruptions during classes and evaluations.\r\n- Maintain a disciplined and professional classroom environment during academic sessions and examinations, ensuring adherence to classroom protocols and a conducive learning atmosphere for students and masters.", target: "100%" }
      ] },
      { id: "cf29213", code: "29213", name: "Nikhil Periwal", title: "Executive", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cf1205", empType: "Full-time", kras: [] },
      { id: "cf29225", code: "29225", name: "Sachin Sharma", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf29224", code: "29224", name: "Shishta Vashishtha", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28874", empType: "Full-time", kras: [] },
      { id: "cf29226", code: "29226", name: "Avanindra Pratap Tewari", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2.Student - Career Coach UIUX mobile app\r\n3.photo gallery improvement using gdrive", target: "100%" }
      ] },
      { id: "cf30326", code: "30326", name: "Vinay Kumar", title: "Associate Director", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf29239", code: "29239", name: "Virendra Khimji Rathod", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Edit 6x Builders.mu videos every month.", target: "100%" }
      ] },
      { id: "cf29250", code: "29250", name: "Aditi Anand", title: "Executive", dept: "c8", bu: "Central Functions", subDept: "Design", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "MentorUnion", metric: "Mentor Union\r\n*Daily Social media ads & Crousals \r\n*Meta ads\r\n*Newsletters \r\n*Reel covers & Thumbnails", target: "50%" },
        { title: "Master Relations", metric: "Master Relations\r\n*The Next Gene Event - TV Creatives, Tickets, Emailers, Ads \r\n*Event Marchandise\r\n*Guest Banner Set", target: "50%" },
        { title: "MentorUnion", metric: "Mentor Union\r\n*Daily Social media ads & Crousals \r\n*Meta ads\r\n*Newsletters \r\n*Reel covers & Thumbnails", target: "50%" },
        { title: "Master Relations", metric: "Master Relations\r\n*The Next Gene Event - TV Creatives, Tickets, Emailers, Ads \r\n*Event Marchandise\r\n*Guest Banner Set", target: "50%" }
      ] },
      { id: "cf29253", code: "29253", name: "Shubham Singh", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30087", empType: "Full-time", kras: [] },
      { id: "cf29298", code: "29298", name: "Palak Pruthi", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28684", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29311", code: "29311", name: "Shiva Singh", title: "Associate", dept: "c11", bu: "Central Functions", subDept: "New Initiatives", managerId: "cf27374", empType: "Full-time", kras: [] },
      { id: "cf29328", code: "29328", name: "Meera Simon C", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29338", code: "29338", name: "Nishant Singh", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "DOP. Shoot 12x Builders.mu videos every month.", target: "100%" }
      ] },
      { id: "cf29346", code: "29346", name: "Kundan Kumar Pandey", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf26222", empType: "Full-time", kras: [] },
      { id: "cf29349", code: "29349", name: "Pratik Sharma", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Edit 6x Builders.mu videos every month.", target: "100%" }
      ] },
      { id: "cf29373", code: "29373", name: "Swarnim Singh", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Creative Producer. Produce 4x brand films this quarter.\r\nProducer support for 10x ads every month.", target: "100%" }
      ] },
      { id: "cf29372", code: "29372", name: "Anant Kumar Prasad", title: "Associate", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29189", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Deliver [X] Teaching hours on courses around Robotics, Drones, IoT etc in a fiscal year", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Execute [Y] workshops, competitions, challenges, etc in a fiscal year", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Identify, Plan, and Prep for course development, engagements across multiple domains of the Innovation Lab", target: "20%" },
        { title: "Student Satisfaction", metric: "Track and maintain feedback mechanism and achieve avg. satisfaction score of 4.6 and above", target: "20%" }
      ] },
      { id: "cf29358", code: "29358", name: "Shivam Sharma", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf29392", code: "29392", name: "Kartik Bhardwaj", title: "Senior Manager - I", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Identify and onboard specialised industry Masters aligned to capital markets and trading curriculum requirements.", target: "40%" },
        { title: "Student Satisfaction", metric: "Ensure sessions are application-driven and market-relevant by monitoring feedback and aligning delivery expectations.", target: "25%" },
        { title: "Accessibility of Interactions", metric: "Enable expert AMAs, practitioner sessions, and market-facing interactions for students.", target: "20%" },
        { title: "Internship/Placement Facilitation", metric: "Facilitate internships, live projects, or applied exposure opportunities through Master and industry relationships.", target: "15%" }
      ] },
      { id: "cf29421", code: "29421", name: "Vanshika Sinha", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "", managerId: "cfx1", empType: "Full-time", kras: [] },
      { id: "cf29446", code: "29446", name: "Mohit Kumar", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Design", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Master Relations", metric: "Masters Relation-\r\n1. The Next Gene Print Collaterals\r\n2. MR. monthly event collaterals\r\n3. Social media posters", target: "45%" },
        { title: "Brand Marketing Team", metric: "Brand Marketing Team-\r\n1. Brand Deck\r\n2. Linkdin & Social media Posters\r\n2. hyrox Jersy design\r\n3. Hyrox degital Event collaterals\r\n4. Hyrox Print Event collaterals", target: "45%" },
        { title: "Ops, HR", metric: "Ops, HR - .-\r\n1. Monthly News letters\r\n2. darwin box Posters\r\n3 Social Media Post\r\n4. Insider edition", target: "10%" },
        { title: "Master Relations", metric: "Masters Relation-\r\n1. The Next Gene Print Collaterals\r\n2. MR. monthly event collaterals\r\n3. Social media posters", target: "45%" },
        { title: "Brand Marketing Team", metric: "Brand Marketing Team-\r\n1. Brand Deck\r\n2. Linkdin & Social media Posters\r\n2. hyrox Jersy design\r\n3. Hyrox degital Event collaterals\r\n4. Hyrox Print Event collaterals", target: "45%" },
        { title: "Ops, HR", metric: "Ops, HR - .-\r\n1. Monthly News letters\r\n2. darwin box Posters\r\n3 Social Media Post\r\n4. Insider edition", target: "10%" }
      ] },
      { id: "cf29464", code: "29464", name: "Mani Sharma", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Social Media Creator. Support 120 stories every month and IG content shoots.", target: "100%" }
      ] },
      { id: "cf29453", code: "29453", name: "Shipra Jaiswal", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29455", code: "29455", name: "Sharad Kumar Goutam", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf29225", empType: "Full-time", kras: [] },
      { id: "cf29454", code: "29454", name: "Vinay Nain", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Design", managerId: "cf28396", empType: "Full-time", kras: [
        { title: "1. Masters' Union Website - \r\nDay-to-day Tasks", metric: "1. Program Ownership & Delivery \r\n2. Code Quality & Bug Prevention \r\n3. Performance & Optimization \r\n4. Collaboration & Dependency Handling \r\n5. Productivity & Ownership Mindset", target: "100%" },
        { title: "1. Website Development & Delivery", metric: "Masters Camp website + shared components\r\n\r\n1. Building and delivering assigned website features and pages with responsive, pixel-perfect UI and on-time completion.\r\n2. Handling ongoing enhancements and new page builds.", target: "40%" },
        { title: "2. Code Quality & Performance", metric: "Writing clean, reusable, well-documented code following team standards and the shared component library.", target: "20%" },
        { title: "3. AI-Assisted Development", metric: "Using AI dev tools (Claude / Copilot / Cursor) to speed up development and improve code quality.", target: "15%" },
        { title: "4. Testing & Bug Fixing", metric: "Fixing bugs promptly and supporting QA by writing and maintaining tests for own features.", target: "15%" },
        { title: "5. Ownership & Collaboration", metric: "Collaborating with design and QA, giving clear progress updates, and taking ownership of assigned modules.", target: "10%" }
      ] },
      { id: "cf29487", code: "29487", name: "Arun Rengaswamy", title: "General Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Lead Non-Fiction. 2x Off Campus videos every month (via Ishika).\r\n2x Bharat.mu long-form videos every month (via Ishika and Sabhya).\r\n1x Built at MU long-form video every month (via Ishika).", target: "30%" },
        { title: "Content (Short form / Long form)", metric: "4x Elevator Pitch reels every month.", target: "10%" },
        { title: "Media & Production", metric: ". and above request fulfilment for event coverage (via Shashank).", target: "15%" },
        { title: "Content (Short form / Long form)", metric: "12x Builders.mu videos every month (via Raja).", target: "15%" },
        { title: "Media & Production", metric: ". and above shoot fulfilment for Non-Fiction (via Sharoz).\r\nTrack and document budget across Non-Fiction projects.", target: "30%" }
      ] },
      { id: "cf29488", code: "29488", name: "Ishita Chauhan", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf27990", empType: "Full-time", kras: [] },
      { id: "cf29485", code: "29485", name: "Anas Khan", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28764", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Production Manager. Manage on-ground execution for Fiction shoots.", target: "100%" }
      ] },
      { id: "cf29486", code: "29486", name: "Lishika Chaursia", title: "Senior Executive", dept: "c8", bu: "Central Functions", subDept: "Design", managerId: "cf28399", empType: "Full-time", kras: [
        { title: "PGP and UG print collaterals", metric: "PGP and UG print collaterals\r\n1. Designed branding for orientation\r\n2. Standee Design\r\n3. Booklet Design\r\n4. UG branding Collaterals", target: "35%" },
        { title: "Marketing ad Creatives", metric: "Marketing ad Creatives\r\n1. PGP AI Ads\r\n2. PGP Social Media Creatives\r\n3. PGP Performance Marketing Ads\r\n4. UI/UX & AI Product Design Performance Ads\r\n5. PGP Career Evaluation Ads", target: "35%" },
        { title: "UG/PG Digital collaterals", metric: "UG/PG Digital collaterals\r\n1. Digital & Event-Related Design\r\n2. YouTube Thumbnails \r\n3. Newsletter & Mailer Design", target: "15%" },
        { title: "UG/PG Event Related Creatives", metric: "UG/PG Event Related Creatives\r\n1. UG Orientation Brading\r\n2. UG VIP Demo Day – Digital & Event Creatives", target: "15%" },
        { title: "PGP and UG print collaterals", metric: "PGP and UG print collaterals\r\n1. Designed branding for orientation\r\n2. Standee Design\r\n3. Booklet Design\r\n4. UG branding Collaterals", target: "35%" },
        { title: "Marketing ad Creatives", metric: "Marketing ad Creatives\r\n1. PGP AI Ads\r\n2. PGP Social Media Creatives\r\n3. PGP Performance Marketing Ads\r\n4. UI/UX & AI Product Design Performance Ads\r\n5. PGP Career Evaluation Ads", target: "35%" },
        { title: "UG/PG Digital collaterals", metric: "UG/PG Digital collaterals\r\n1. Digital & Event-Related Design\r\n2. YouTube Thumbnails \r\n3. Newsletter & Mailer Design", target: "15%" },
        { title: "UG/PG Event Related Creatives", metric: "UG/PG Event Related Creatives\r\n1. UG Orientation Brading\r\n2. UG VIP Demo Day – Digital & Event Creatives", target: "15%" }
      ] },
      { id: "cf29507", code: "29507", name: "Nishkarsh Kaushik", title: "General Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf29530", code: "29530", name: "Indresh Giri", title: "Associate", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf29529", code: "29529", name: "Annie Choudhary", title: "Team Lead", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29528", code: "29528", name: "Jai Singh Rawat", title: "Associate", dept: "c3", bu: "Central Functions", subDept: "Accounts", managerId: "cf1205", empType: "Full-time", kras: [] },
      { id: "cf29525", code: "29525", name: "Gul Bhatnagar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "MIS", managerId: "cf28785", empType: "Full-time", kras: [] },
      { id: "cf29520", code: "29520", name: "Rishav Raj", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28785", empType: "Full-time", kras: [] },
      { id: "cf29556", code: "29556", name: "Gaurav Gupta", title: "Senior Manager - I", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29547", code: "29547", name: "Priyansh Gupta", title: "Associate", dept: "c10", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf28993", empType: "Full-time", kras: [] },
      { id: "cf29549", code: "29549", name: "Vaishali Soni", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29546", code: "29546", name: "Devendra Singh Jhala", title: "Associate", dept: "c8", bu: "Central Functions", subDept: "Developer", managerId: "cf28431", empType: "Full-time", kras: [
        { title: "Founder's Office", metric: "1. End-to-End Scratch Magazine", target: "100%" },
        { title: "Founder's Office", metric: "1. End-to-End Scratch Magazine", target: "100%" }
      ] },
      { id: "cf29554", code: "29554", name: "Jyoti Rajendra Kumar Sulakhe", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Perform end-to-end testing of Procurement module mobile responsiveness across different screen sizes and browsers, validate user flows, identify and track defects, and support successful production deployment.", metric: "Perform end-to-end testing of Procurement module mobile responsiveness across different screen sizes and browsers, validate user flows, identify and track defects, and support successful production deployment.", target: "20%" },
        { title: "Procurement Management System – Mobile View Enhancement", metric: "Execute functional and responsive testing of the Reimbursements module on mobile devices, validate forms and workflows, perform regression testing, and ensure production readiness.", target: "20%" },
        { title: "Reimbursements Module – Mobile View Enhancement", metric: "Conduct end-to-end testing of Vendor Payments mobile view, including responsive UI, forms, pop-ups, and payment workflows, and support defect resolution and production deployment.", target: "20%" },
        { title: "Vendor Payments Module – Mobile View Enhancement", metric: "Perform functional, integration, and regression testing of multi-level approver workflows across Request Management, Procurement, Reimbursements, and Vendor Payments modules, including approval status tracking and activity logs.", target: "15%" },
        { title: "Multi Approvers Workflow Testing Across Modules", metric: "Validate the business rule change for auto-rejection from 5 working days to 30 days by executing end-to-end scenarios, regression testing, and verifying request lifecycle behavior before production deployment.", target: "25%" }
      ] },
      { id: "cf29557", code: "29557", name: "Prachi Malik", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Social Media Creator. Support 120 stories every month.", target: "100%" }
      ] },
      { id: "cf29558", code: "29558", name: "Dinesh Raut", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf26222", empType: "Full-time", kras: [] },
      { id: "cf29567", code: "29567", name: "Atul Kumar", title: "Senior Manager - I", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "ug29571", code: "29571", name: "Vaishnavi Singh", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "cf1202", empType: "Full-time", kras: [
        { title: "Program Planning & Execution", metric: "Plan and execute program deliverables — Own end-to-end delivery of assigned programs.", target: "25%" },
        { title: "Stakeholder Management", metric: "Coordinate across faculty, students, and teams — Align stakeholders on program goals.", target: "25%" },
        { title: "Operational Efficiency", metric: "Streamline program operations and processes — Reduce friction and improve throughput.", target: "20%" },
        { title: "Quality & Compliance", metric: "Ensure program quality and adherence — Maintain standards and process compliance.", target: "15%" },
        { title: "Reporting & Insights", metric: "Track program metrics and report to leadership — Provide actionable performance insights.", target: "15%" }
      ] },
      { id: "cf29579", code: "29579", name: "Shiril Saju", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Ensure quality assurance of course delivery — Conduct quality assurance reviews of course delivery across faculty as part of the Learning Committee.", target: "15%" }
      ] },
      { id: "cf29578", code: "29578", name: "Shreya Sharda", title: "Program Manager", dept: "c1", bu: "Central Functions", subDept: "", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Optimize academic operations and processes", metric: "Execute day-to-day academic operations — Support smooth running of academic activities, documentation, and coordination.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Assist in student support and query resolution — Address and route student and faculty queries in a timely manner.", target: "30%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Support content and assessment logistics — Assist in organizing course materials, assessments, and academic resources.", target: "20%" },
        { title: "Optimize academic operations and processes", metric: "Maintain trackers, records, and reporting — Keep operational trackers and reports updated and accurate.", target: "10%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Coordinate logistics for academic events and sessions — Support scheduling and logistics for events, workshops, and guest sessions.", target: "10%" }
      ] },
      { id: "cf29586", code: "29586", name: "Kumari Nani", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [] },
      { id: "cf29580", code: "29580", name: "Devesh Singh Chauhan", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2", target: "100%" },
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2. Ask To resubmit resources\r\n3. Student Month View Calendar\r\n4. Assignment UI\r\n5. Course Page UI | Admin | Coach LMS\r\n6. Coach LMS | Admin App | Improvements\r\n7.Student Holiday Preview | Holidays | Admin & Coach LMS\r\n8.Faculty Performance | Admin | Coach LMS\r\n9.Admin Mobile App\r\n10.Recent course update\r\n11.Ai course/ session/ creation", target: "100%" }
      ] },
      { id: "cf29582", code: "29582", name: "Mohit Narang", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf29583", code: "29583", name: "Akash Vishwakarma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "Product Delivery – CoachLMS", target: "100%" }
      ] },
      { id: "cf29587", code: "29587", name: "Vanshika Kalra", title: "Program Associate", dept: "c10", bu: "Central Functions", subDept: "", managerId: "cf27778", empType: "Full-time", kras: [] },
      { id: "cf29581", code: "29581", name: "Nidhi Pandey", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30500", empType: "Full-time", kras: [] },
      { id: "cf29615", code: "29615", name: "Satyajit Roy", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29625", code: "29625", name: "Chetan Anand Soni", title: "Program Manager", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 1", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Onboard school partners for Bloom", metric: "10 schools as B2B partners by quarter-end\r\nGet both Career Labs live with at least 1 partner school each and detailed launch and GTM for Expedition Trail: Global, push to take the domestic live at least for 1 cohort with minimum 20 students", target: "50%" },
        { title: "Launch at least 3 bootcamp cohorts", metric: "Define the Program Flow, Learning Journey and Outcome\r\nCoordinate across teams and Launch Bootcamp\r\nEnroll a minimum of 50 students each\r\nLaunch the cohort with benchmark of CSAT, NPS above 4.0+", target: "50%" }
      ] },
      { id: "cf29646", code: "29646", name: "Pulak verma", title: "Senior manager - I", dept: "c7", bu: "Central Functions", subDept: "HR Ops", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf29623", code: "29623", name: "Prabhleen Kaur Gujral", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Cohort Performance Tracking", metric: "Monitor learning outcomes and follow-ups — Maintain up-to-date performance data for assigned cohorts.", target: "30%" },
        { title: "Operational Process Management", metric: "Streamline recurring academic-ops workflows — Improve efficiency of routine processes.", target: "25%" },
        { title: "Guest Engagement Coordination", metric: "Organize guest sessions and interactions — Manage scheduling and coordination with external speakers.", target: "25%" },
        { title: "Reporting & Analytics", metric: "Prepare academic reports and dashboards — Deliver accurate, timely periodic reporting.", target: "20%" }
      ] },
      { id: "cfInt125", code: "Int125", name: "Arun Subramanian", title: "Intern", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf29652", code: "29652", name: "Deepak Singh", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" },
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2", target: "100%" },
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2. Coach LMS | Student Experience\r\n3. Initial onboarding UI\r\n4.Career Coach | Job List | Delete Job with Reason\r\n5. Student Portal | Career Coach v2 - Part 1\r\n6.Floating Job to Multiple Programs\r\n7.Application Rate table\r\n8. Admin Portal | Career Coach v2 - Part 2\r\n9..Student Portal | Career Coach V2 - Part 3\r\n10.Admin Mobile App\r\n11.Ai course/ session/ creation", target: "100%" }
      ] },
      { id: "cf29654", code: "29654", name: "Nitika Sharma", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29189", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Identify, plan, and execute [X] no of courses in the Makers Lab per year across the programmes and externally", target: "20%" },
        { title: "Strengthening Corporate Alliances", metric: "Identify, plan, and execute [Y] no of workshops in the Makers Lab per year across the programmes and externally", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Ideate and excute [A] no of initiatives (Industry Naming of the lab, revenue generation ideas, Makers Lab Club, Student-led projects, etc)", target: "30%" },
        { title: "Student Satisfaction", metric: "Manage all activities of the Lab and student feedback mechanism (social comms, repairs, etc) with atleast [B] satisfaction levels", target: "20%" }
      ] },
      { id: "cf29656", code: "29656", name: "Bhawana Kothari", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29660", code: "29660", name: "Shivang Singh", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HR Ops", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf29669", code: "29669", name: "Paras Tripathi", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29189", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Identify, qualify, and close [X] accounts for new CoEs/ Labs per year, aligned to emerging domains (AI, Cyber, Makers, FinTech, Sustainability)", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Identify, Plan, and Execute [Y] Immersion in the fiscal year", target: "30%" },
        { title: "Strengthening Corporate Alliances", metric: "Ensure atleast [Z] no of courses are taught by top Industry brands, partners, and leaders in a fiscal year across programmes", target: "30%" },
        { title: "Student Satisfaction", metric: "Track and maintain feedback mechanism and achieve avg. satisfaction score of 4.6 and above", target: "10%" }
      ] },
      { id: "cf29671", code: "29671", name: "Rushali Agarwal", title: "Program Manager", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 1", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Drive App growth", metric: "2,000 App downloads in the first quarter post-launch\r\n10% of new signups coming through a referral feature by quarter-end", target: "40%" },
        { title: "Launch Marketplace/E-commerce", metric: "Onboard 20 businesses onto Marketplace by quarter-end\r\nDrive 200 orders processed through Marketplace by quarter-end", target: "30%" },
        { title: "Track performance and course-correct", metric: "Maintain a live weekly dashboard across App and K12, flagging any metric lagging behind target within 1 week\r\nShip (Go live) 2 new revenue-generating features by quarter-end", target: "30%" }
      ] },
      { id: "cf29684", code: "29684", name: "Shruti Pandey", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf27441", empType: "Full-time", kras: [
        { title: "Podcast with CXO Guests", metric: "Invite, align and execute a minimum of [Y] CXO workshops/masterclass ( folks from top brands - senior management)", target: "30%" },
        { title: "Student Satisfaction", metric: "Maintain an average student satisfaction score of 4.8/5 or above across all sessions by ensuring strong speaker alignment, timely coordination etc", target: "20%" },
        { title: "Accessibility of Interactions", metric: "Organize and execute [A] off campus shoots | Align Industry Partners for ODCs | Align VCs/Content Creators/Dropshippers etc as per the requirement and fitment", target: "30%" },
        { title: "New Initiatives and Experiments", metric: "New ideas recommended by Pratham in the discussions, such as Speakers for Quorum, B2B L&Ds, AI Summit, etc", target: "20%" }
      ] },
      { id: "cf29686", code: "29686", name: "Arindam Bhattacharjee", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29687", code: "29687", name: "Shreyansh Chaurasiya", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Ensure quality assurance of course delivery — Conduct quality assurance reviews of course delivery across faculty as part of the Learning Committee.", target: "15%" }
      ] },
      { id: "cf29688", code: "29688", name: "Akshay Dhuria", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Foster faculty development and research initiatives", metric: "Drive research policy and support researcher productivity — Contribute to research policy making and ensure researchers face no hurdles in research activities as part of the Research Committee.", target: "15%" }
      ] },
      { id: "cf29694", code: "29694", name: "Muskan Chandel", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf26150", empType: "Full-time", kras: [] },
      { id: "cf29702", code: "29702", name: "Gunjan Agarwal", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf29703", code: "29703", name: "Rahul", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf28411", empType: "Full-time", kras: [
        { title: "Request Auto-Rejection Timeline Enhancement", metric: "Conduct comprehensive end-to-end testing across all modules of Lead Matrix v2, ensuring functional accuracy, system stability, and adherence to defined requirements. This includes testing all functional modules of the system, along with dedicated role and permission-based testing to validate that access controls, user roles, and permission levels function as intended. Identify, log, and report bugs to the development team in a timely manner.", target: "20%" },
        { title: "End-to-End Testing of Lead Matrix v2", metric: "Perform thorough end-to-end testing of all v2 application forms across Desktop, Android, and iOS platforms to validate consistent functionality, UI/UX behavior, and data integrity. Ensure a seamless and uninterrupted experience for students filling out application forms, regardless of the device or platform used", target: "20%" },
        { title: "Cross-Platform Testing of v2 Forms", metric: "Take ownership of testing for all newly launching programs, ensuring thorough validation of functionality, and user experience prior to go-live, thereby minimizing post-launch issues and ensuring a smooth rollout.", target: "20%" },
        { title: "Testing of New Program Launches", metric: "Proactively test all upcoming features and enhancements released for the Lead Matrix v2, ensuring thorough functional validation, identifying edge cases, and confirming readiness before deployment to ensure a stable and error-free experience.", target: "20%" },
        { title: "Testing of Upcoming Lead Matrix v2 Features", metric: "Working as the point of contact (POC) for addressing and resolving issues reported by users of Lead Matrix, ensuring prompt diagnosis, effective troubleshooting, and timely closure of reported concerns to maintain system reliability", target: "10%" },
        { title: "POC for Lead Matrix Issue/query Resolution", metric: "Design, develop, and implement an automated solution for Google Workspace account creation, same like Co-Work automation, with the objective of reducing manual effort and eliminating human errors in the account creation process.", target: "10%" }
      ] },
      { id: "cf29707", code: "29707", name: "Rimika Prasad", title: "Associate Program Manager", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 1", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Ship the app live", metric: "Lead partnership in app experience for all 4 tabs (Pulse, Learn, Mentors, Marketplace) live by week 10\r\nApp available for download in app stores by quarter-end\r\nPricing strategy and business model development (into forecast) post app", target: "20%" },
        { title: "Drive early mentors engagement", metric: "100+ Mentors bookings in the first 4 weeks post-launch\r\nPortfolio review add-on generating paid bookings within this quarter", target: "40%" },
        { title: "K12 growth and scaling", metric: "Pricing strategy and business model development (into forecast) post launch\r\nProduct review and strategy, add-on generating revenue verticals within this quarter", target: "40%" }
      ] },
      { id: "cf29733", code: "29733", name: "Sudeep Purwar", title: "Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "AI Lead. Ship Project Bran live by 31 August and drive team adoption as a co-pilot for everyone.\r\n10 student startups in active mentorship. Pull at least 2 into the YC pipeline (Cohesivity cleared round 1).\r\nDrive Bran usage across the studio this quarter.", target: "100%" }
      ] },
      { id: "cf29734", code: "29734", name: "Kreeti Jha", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29727", code: "29727", name: "Parikshit Pandey", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Program Delivery Support", metric: "Support smooth delivery of assigned programs — Coordinate day-to-day academic execution.", target: "30%" },
        { title: "Resource Coordination", metric: "Manage academic resources and logistics — Ensure availability of materials and infrastructure.", target: "25%" },
        { title: "Quality Assurance", metric: "Ensure accuracy of academic records and materials — Maintain data integrity across systems.", target: "25%" },
        { title: "Student Query Resolution", metric: "Handle and route student queries — Resolve or escalate queries within agreed timelines.", target: "20%" }
      ] },
      { id: "cf29732", code: "29732", name: "Payal Khurana", title: "General Manager", dept: "c11", bu: "Central Functions", subDept: "New Initiatives 1", managerId: "cfx11", empType: "Full-time", kras: [
        { title: "Ship Masterclass episodes", metric: "Publish 15 of the 40+ planned episodes this quarter\r\nLock all 5 in-conversation SMEs into confirmed shoot dates. Lead schedules, curriculum, scripting and shoot coordination", target: "60%" },
        { title: "Migrate all IP into the App", metric: "Get 100% of approved content live in the Learn tab by app launch\r\nOrganize every episode by business case and topic so related episodes can be suggested to viewers automatically", target: "40%" }
      ] },
      { id: "cf29735", code: "29735", name: "Simran Pannu", title: "General Manager", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf29738", code: "29738", name: "Salman Ali", title: "Associate", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29654", empType: "Full-time", kras: [
        { title: "Strengthening Corporate Alliances", metric: "Support and Prep the Educator to execute trainings, workshops, and competitions - with approx [X] hrs in a fiscal year", target: "40%" },
        { title: "Strengthening Corporate Alliances", metric: "Mentor during the sessions and in office hours to atleast [Y] student projects per year", target: "20%" },
        { title: "Strengthening Corporate Alliances", metric: "Ensure . operational uptime for all machines, safety checklist adherence per session/workshop, inventory trackers maintained, etc at 4.8 and above NPS", target: "20%" },
        { title: "Student Satisfaction", metric: "Track and maintain feedback mechanism and achieve avg. satisfaction score of 4.6 and above", target: "20%" }
      ] },
      { id: "cf29739", code: "29739", name: "Ashok Tirkey", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28764", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Production Assistant. On-ground support for Fiction shoots.", target: "100%" }
      ] },
      { id: "cf29740", code: "29740", name: "Sharwan Kumar", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28116", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Production Assistant. On-ground support for Non-Fiction shoots.", target: "100%" }
      ] },
      { id: "cfC0056", code: "C0056", name: "Nikita", title: "Consultant", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29778", code: "29778", name: "JAHANVI RANA", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28874", empType: "Full-time", kras: [] },
      { id: "cf29788", code: "29788", name: "Prerna Sud", title: "Senior Manager - II", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf29794", code: "29794", name: "Avinash Mohan Dev", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cf26129", empType: "Full-time", kras: [
        { title: "Zoom policy update and enhancement", metric: "Developed an Admin Email Deployer with audience segmentation (Mentors/Mentees) and an integrated email template editor, enabling efficient and customized platform-wide email communication.", target: "20%" },
        { title: "Email Deployer Admin Side (Mentorunion)", metric: "Optimized the mentee-side Mentor Discovery experience by implementing Redis caching across mentor listing pages, significantly improving page load times, search performance, and overall mentor discovery.", target: "20%" },
        { title: "MentorUnion Mentor discovery Enhancement", metric: "Developed the Organization Admin frontend for MentorUnion by integrating backend APIs and implementing optimized data rendering for improved performance and user experience.", target: "30%" },
        { title: "Front-end Organization Admin Mentorunion", metric: "Developed the Organization-sub Admin frontend for MentorUnion by integrating backend APIs and implementing optimized data rendering for improved performance and user experience.", target: "30%" }
      ] },
      { id: "cf29793", code: "29793", name: "Aakanksha Mishra", title: "Senior Executive", dept: "c1", bu: "Central Functions", subDept: "Academics & Curriculum", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Operations Management", metric: "Oversee day-to-day academic operations — Ensure smooth running of assigned activities.", target: "30%" },
        { title: "Process Optimization", metric: "Improve efficiency of academic workflows — Identify and implement process improvements.", target: "25%" },
        { title: "Student Support Services", metric: "Ensure timely resolution of student needs — Coordinate responsive academic support.", target: "25%" },
        { title: "Data Management & Reporting", metric: "Maintain accurate data and reporting — Keep trackers and reports current.", target: "20%" }
      ] },
      { id: "cf29813", code: "29813", name: "Prateek Shekhawat", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Ask To resubmit resources", target: "100%" }
      ] },
      { id: "cf29819", code: "29819", name: "Anand Shekhar", title: "Senior Executive", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Academic Coordination", metric: "Coordinate academic activities and schedules — Align sessions, resources, and calendars.", target: "30%" },
        { title: "Logistics & Event Management", metric: "Manage logistics for academic events — Own planning and execution of event operations.", target: "25%" },
        { title: "Documentation & Compliance", metric: "Maintain records and ensure compliance — Keep documentation accurate and audit-ready.", target: "25%" },
        { title: "Cross-team Collaboration", metric: "Support cross-functional initiatives — Partner with teams on shared academic goals.", target: "20%" }
      ] },
      { id: "cf29820", code: "29820", name: "Shikhar Bhardwaj", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29826", code: "29826", name: "Sagnik Ganguly", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Cinematographer. Fulfil event cinematography requests.", target: "100%" }
      ] },
      { id: "cf29822", code: "29822", name: "Anubha Shokhand", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cfInt151", code: "Int151", name: "Tomiris Serik", title: "Intern", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf29827", code: "29827", name: "Tarun Pratap Singh", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28832", empType: "Full-time", kras: [] },
      { id: "cf29882", code: "29882", name: "Kunal Biswas", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cfInt152", code: "Int152", name: "Rishu Shiwakoti", title: "Intern", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf29913", code: "29913", name: "Mrittika Maitra", title: "Associate", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Writer Director. Write and direct 3x ads every month.\r\nWriter or AD support on brand films this quarter.", target: "100%" }
      ] },
      { id: "cf29916", code: "29916", name: "Mohd Shees", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cf29931", code: "29931", name: "Sukanya Kumari Roy", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29932", code: "29932", name: "Daisy Kataria", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Director's Office", metric: "Co-build Project Bran with Sudeep. Tag, structure and maintain the source of truth.\r\nRun cadence between founder's office, brand team and Creative Studio.\r\nCoordinate the Universal Brand Deck rollout (HR onboarding, recruiter pitches).", target: "100%" }
      ] },
      { id: "cf29939", code: "29939", name: "Irmeen Ansari", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28052", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "Brand Executive. Brand and content support for Project A-Team.", target: "100%" }
      ] },
      { id: "cf29940", code: "29940", name: "Ayushi Kumari", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28637", empType: "Full-time", kras: [
        { title: "Brand Initiatives", metric: "Brand Executive. Generate 5L revenue through merch this quarter.\r\nCoordinate with Inagiffy on Reddit and Quora.\r\nSupport delivery of 36 newsletters this quarter.", target: "100%" }
      ] },
      { id: "cf29941", code: "29941", name: "Rochak Khandelwal", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29944", code: "29944", name: "Narenthren Manoharan", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "25%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Lead curriculum design and vetting — Lead curriculum design and review faculty course outlines as Associate Director overseeing the Curriculum Team.", target: "20%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Lead quality assurance of course delivery — Lead quality assurance reviews of course delivery across faculty as Associate Director overseeing the Learning Committee.", target: "20%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf29946", code: "29946", name: "Priyanshu Kashyap", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf29735", empType: "Full-time", kras: [] },
      { id: "cf29975", code: "29975", name: "Naveen Kumar", title: "General Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "YouTube Machine Gun", metric: "Lead the Machine Gun. Series C Podcast: 4x long-form every month.\r\nClasses at MU: 4x long-form every month.\r\nCapital Markets and Trading: 4x long-form every month.\r\nFamily Business with Rajiv Sir: 4x long-form every month. Hold the 1 rupee per view rule.", target: "100%" }
      ] },
      { id: "cf29977", code: "29977", name: "Arijit Bose", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "Socials", metric: "Own LinkedIn execution. 8x carousels every month, track to 250K by March 2027.\r\nOwn Twitter/X execution. Track to 15K by March 2027, institution as a founder voice.", target: "100%" }
      ] },
      { id: "cf29984", code: "29984", name: "Piyush Bansal", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf1255", empType: "Full-time", kras: [
        { title: "Operational Excellence", metric: "Drive operational excellence across the Master Relations function by standardizing processes, creating SOPs, improving governance frameworks, and ensuring consistent execution across teams.", target: "25%" },
        { title: "New Initiatives and Experiments", metric: "Lead and execute strategic initiatives from the Director's Office by coordinating with internal stakeholders, tracking milestones, mitigating risks, and ensuring timely project delivery.", target: "25%" },
        { title: "Leadership and Business Support", metric: "Enable leadership effectiveness through executive coordination, reporting, dashboard management, calendar planning, meeting governance, documentation, and follow-up on key business priorities.", target: "25%" },
        { title: "Stakeholder Experience", metric: "Manage venue operations, institutional partnerships, executive visits, speaker logistics, and event execution while delivering a seamless stakeholder experience across internal and external engagements.", target: "25%" }
      ] },
      { id: "cf29989", code: "29989", name: "Jitesh", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28860", empType: "Full-time", kras: [] },
      { id: "cf29998", code: "29998", name: "Mukul", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf29999", code: "29999", name: "Ankesh Kumar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf30000", code: "30000", name: "Karimul Hoque", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf30001", code: "30001", name: "Mehandi Hasan", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30341", empType: "Full-time", kras: [] },
      { id: "cfInt161", code: "Int161", name: "Aryan Popli", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28637", empType: "Full-time", kras: [] },
      { id: "cf29991", code: "29991", name: "Pragya Rastogi", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28637", empType: "Full-time", kras: [
        { title: "Brand Initiatives", metric: "Assistant Brand Manager. Coordinate 36 newsletters and 6 PR releases this quarter.\r\nCoordinate Hyrox Delhi, INC42 and Pint of View partnerships.\r\nProject manage MU website and central prospectus with design.", target: "100%" }
      ] },
      { id: "cf29992", code: "29992", name: "Sudhanshu Kumar", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Builder and Engineer. Design and build the physical experiments and moonshots for Builders.mu.", target: "100%" }
      ] },
      { id: "cf30048", code: "30048", name: "Ananya Singh", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf28637", empType: "Full-time", kras: [
        { title: "Brand Initiatives", metric: "Brand Manager Special Projects. Own the second airport OOH burst brief with Non Zero.", target: "100%" }
      ] },
      { id: "cf30049", code: "30049", name: "Amisha Sharma", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf29733", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "Coordinate Road to YC. Support 10 student startups in mentorship.\r\nSupport Project Bran build and adoption.", target: "100%" }
      ] },
      { id: "cf30052", code: "30052", name: "Garima Babbar", title: "Executive", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Optimize academic operations and processes", metric: "Execute day-to-day academic operations — Support smooth running of academic activities, documentation, and coordination.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Assist in student support and query resolution — Address and route student and faculty queries in a timely manner.", target: "20%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Support content and assessment logistics — Assist in organizing course materials, assessments, and academic resources.", target: "20%" },
        { title: "Optimize academic operations and processes", metric: "Maintain trackers, records, and reporting — Keep operational trackers and reports updated and accurate.", target: "15%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Coordinate logistics for academic events and sessions — Support scheduling and logistics for events, workshops, and guest sessions.", target: "15%" }
      ] },
      { id: "cf30142", code: "30142", name: "Gouri Sankar Sahoo", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Acadmics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf30143", code: "30143", name: "Tathagata Bhowmik", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Acadmics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf30085", code: "30085", name: "Gaurav Yadav", title: "Manager", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30084", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Roadmap items & PRDs delivered to engineering on time .", target: "25%" },
        { title: "Engineering Quality", metric: "Requirement rework due to unclear / incomplete PRDs (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "Product usability & clarity feedback score (out of 5)", target: "20%" },
        { title: "Team Capability & Development", metric: "Product/process alignment or knowledge sessions per quarter", target: "15%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Product roadmap, delivery & risk updates per quarter", target: "15%" }
      ] },
      { id: "cf30086", code: "30086", name: "Arvind", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30087", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned frontend tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Frontend bugs & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "Page load, runtime & performance adherence (Lighthouse, load time) Score >=85", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30087", code: "30087", name: "Lalit", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30090", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Frontend sprint deliverables completed on time .", target: "25%" },
        { title: "Engineering Quality", metric: "Frontend defect leakage & code quality issues (max %)", target: "20%" },
        { title: "System Reliability & Performance", metric: "Frontend performance metrics (Lighthouse, load time) Score >=85", target: "20%" },
        { title: "UX & User Satisfaction", metric: "UI implementation quality score (out of 5)", target: "15%" },
        { title: "Team Capability & Development", metric: "Reusable components & standards contributions", target: "10%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Frontend delivery & risk updates per quarter", target: "10%" }
      ] },
      { id: "cf30088", code: "30088", name: "Adarsh Mishra", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30089", code: "30089", name: "Rahul Kumar", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30084", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Engineering sprint commitments delivered on time .", target: "25%" },
        { title: "Engineering Quality", metric: "Critical & high-severity production bugs (max count per product)", target: "20%" },
        { title: "System Reliability & Performance", metric: "System uptime & performance SLA adherence .", target: "20%" },
        { title: "UX & User Satisfaction", metric: "Engineering contribution to UX stability (out of 5)", target: "10%" },
        { title: "Team Capability & Development", metric: "Technical mentoring, reviews & documentation sessions", target: "10%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Delivery, risk & dependency updates per quarter", target: "15%" }
      ] },
      { id: "cf30090", code: "30090", name: "Tajinder Singh", title: "General Manager", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30084", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "UI/UX deliverables completed within sprint timelines .", target: "25%" },
        { title: "Engineering Quality", metric: "Design-related rework during development (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "UX audit / usability feedback score (out of 5)", target: "20%" },
        { title: "Team Capability & Development", metric: "Design reviews, mentoring & skill sessions per quarter", target: "15%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Design progress & dependency updates per quarter", target: "15%" }
      ] },
      { id: "cf30091", code: "30091", name: "Surbhi Goel", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30090", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned design tasks delivered within sprint timelines .", target: "30%" },
        { title: "Engineering Quality", metric: "Design clarity & reduction in dev clarifications (max %)", target: "20%" },
        { title: "UX & User Satisfaction", metric: "UX quality score for owned modules (out of 5)", target: "25%" },
        { title: "Team Capability & Development", metric: "Design system enablement & reviews per quarter", target: "15%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Design updates shared with PMs & leads per quarter", target: "10%" }
      ] },
      { id: "cf30092", code: "30092", name: "Ashish Kumar", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30089", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Backend sprint commitments delivered on time .", target: "25%" },
        { title: "Engineering Quality", metric: "Backend defects & production issues (max count per product)", target: "20%" },
        { title: "System Reliability & Performance", metric: "API uptime, latency & error-rate adherence .", target: "20%" },
        { title: "UX & User Satisfaction", metric: "Average UX/NPS or feedback score (out of 5)", target: "10%" },
        { title: "Team Capability & Development", metric: "Code reviews, mentoring & documentation sessions", target: "10%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Delivery & risk updates per quarter", target: "15%" }
      ] },
      { id: "cf30093", code: "30093", name: "Tushar Goel", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30089", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Backend sprint commitments delivered on time .", target: "25%" },
        { title: "Engineering Quality", metric: "Backend defects & production issues (max count per product)", target: "20%" },
        { title: "System Reliability & Performance", metric: "API uptime, latency & error-rate adherence .", target: "20%" },
        { title: "UX & User Satisfaction", metric: "Average UX/NPS or feedback score (out of 5)", target: "10%" },
        { title: "Team Capability & Development", metric: "Code reviews, mentoring & documentation sessions", target: "10%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Delivery & risk updates per quarter", target: "15%" }
      ] },
      { id: "cf30094", code: "30094", name: "Priyanka Rani", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30087", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned frontend tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Frontend bugs & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "Page load, runtime & performance adherence (Lighthouse, load time) Score >=85", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30095", code: "30095", name: "Harmandeep", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30093", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30096", code: "30096", name: "Varun Sharma", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30084", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Strategic design initiatives delivered as per roadmap (count)", target: "25%" },
        { title: "Engineering Quality", metric: "Reduction in design-led rework impacting development (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "Overall experience quality score across products (out of 5)", target: "20%" },
        { title: "Team Capability & Development", metric: "Design leadership coaching / mentoring sessions per quarter", target: "15%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Design reviews with leadership & cross-functional teams per quarter", target: "15%" }
      ] },
      { id: "cf30097", code: "30097", name: "Pushap Raj", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30087", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned frontend tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Frontend bugs & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "Page load, runtime & performance adherence (Lighthouse, load time) Score >=85", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30098", code: "30098", name: "Manish Yadav", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30091", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned design tasks delivered on time .", target: "35%" },
        { title: "Engineering Quality", metric: "Design accuracy & rework rate (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "Usability & visual quality score (out of 5)", target: "25%" },
        { title: "Team Capability & Development", metric: "Participation in reviews & learning sessions", target: "15%" }
      ] },
      { id: "cf30099", code: "30099", name: "Aseem", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30096", empType: "Full-time", kras: [] },
      { id: "cf30100", code: "30100", name: "Anuj Narula", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30101", code: "30101", name: "Monika Sharma", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30084", empType: "Full-time", kras: [] },
      { id: "cf30103", code: "30103", name: "Vaibhav Porwal", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30105", code: "30105", name: "Shaurya Dhaka", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30106", code: "30106", name: "Shubham Amrawat", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30107", code: "30107", name: "Shubham Sharma", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30108", code: "30108", name: "Nikhil Vij", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30092", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned sprint tasks delivered on time .", target: "40%" },
        { title: "Engineering Quality", metric: "Defect leakage & code quality issues (max %)", target: "30%" },
        { title: "System Reliability & Performance", metric: "API & system reliability adherence .", target: "20%" },
        { title: "Team Capability & Development", metric: "Code reviews, learning & documentation", target: "10%" }
      ] },
      { id: "cf30110", code: "30110", name: "Sushmita Khosla", title: "Senior Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "cf30091", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "Assigned design tasks delivered on time .", target: "35%" },
        { title: "Engineering Quality", metric: "Design accuracy & rework rate (max %)", target: "25%" },
        { title: "UX & User Satisfaction", metric: "Usability & visual quality score (out of 5)", target: "25%" },
        { title: "Team Capability & Development", metric: "Participation in reviews & learning sessions", target: "15%" }
      ] },
      { id: "cf26129", code: "26129", name: "Rajat Puri", title: "Associate Director", dept: "c2", bu: "Central Functions", subDept: "Tech (Rajat)", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf30112", code: "30112", name: "Prince", title: "Team Lead", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30111", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2. Coach LMS | Marketplace | Detailed View\r\n3. Recent course update\r\n4. AI Session Notes Improvements\r\n5. Ask To resubmit resources\r\n6. Coach LMS | Student Experience\r\n7. Attendance: Display in tabular format, organized term-wise.\r\n8. Student Month View Calendar\r\n9. Admin LMS | Masters' Profiles | Update linkedin and Profile picture\r\n10. Bridge Courses\r\n11. Assignment UI\r\n12. Initial onboarding UI\r\n13. Course Page UI | Admin | Coach LMS\r\n14. Placed Students Scoring | PRS | Admin | Coach LMS\r\n15. Career Coach | Apply Form | Resume Score\r\n16. Student Direct POC | Coach LMS\r\n17. Parent Mobile App\r\n18. Concerns raised from different pages (Attendance, Assignments)\r\n19. Student & Parent Leave List Visibility in mobile app\r\n20. Video Proctoring | Logic Update\r\n21. Parent Leave Apprval\r\n22. TETR Term Report\r\n23. Tools on the App Dashboard\r\n24. Attendance Exemption | User Mgment | Admin Panel\r\n25. Mutiple Popup UX\r\n26. Career Coach | Job List | Delete Job with Reason\r\n27. Career Coach | InterviewAI | API Need & N8N\r\n28. Coach LMS | Leaderboard | UIUX Bugs\r\n29. Super Admin >> Monitor Requests\r\n30. Launch Pad Integration\r\n31. Coach LMS | Admin App | Improvements\r\n32. Student Portal | Career Coach v2 - Part 1\r\n33. Career Coach | Job List | Column Addition\r\n34. Floating Job to Multiple Programs\r\n35. Application Rate table\r\n36. Student - Career Coach UIUX\r\n37. Analytics UI UX Improvements\r\n38. Feature Request\r\n39. Coach LMS | Edit Cohort UX\r\n40. Admin Portal | Career Coach v2 - Part 2\r\n41. Student Portal | Career Coach V2 - Part 3\r\n42. Student Holiday Preview | Holidays | Admin & Coach LMS\r\n43. Security Issues: Both student side and Admin side\r\n44. Completion Rate | NPS | Admin Panel\r\n45. Events (Sync with G Calendar) | Student\r\n46. Faculty Performance | Admin | Coach LMS\r\n47. WhatsApp & Mail Reply | Help & Support | LMS & Admin\r\n48. Coach LMS | Admin Notifications Control\r\n49. Mobile Phone Detection Addition | Video Proctoring\r\n50. Parents Concerns Changes | Parent Mobile & Web\r\n51. Interview tool with Career Coach\r\n52. Faculty Performance\r\n53. Fee Scholarship\r\n54. Coach Activity Dashboard\r\n55. Multiple consent form\r\n56. photo gallery improvement using gdrive\r\n57. Ally Rewamp\r\n58. Cost Optimisation aws \r\n59. Ai course/ session/ creation\r\n60. Session reording upload \r\n61.Session resource bulk upload\r\n62. Assignment Save & Draft\r\n63.PM email detailed stats (Leaders Email | Admin | Coach LMS)\r\n64.Notification control admin \r\n65.Ai Resume Control\r\n66.Parent Notifications\r\n67.Improved Amazon RDS performance.\r\n68.Enhanced Amazon ElastiCache performance.\r\n69.Developed an AWS Operations Console to monitor costs and resources in one centralized location.\r\n70.Implemented bulk resume downloads using AWS Lambda.\r\n71.Session lambda function for thumb generater\r\n72.Event addition questions\r\n73.Attendance page change\r\n74.PRS Rewamp\r\n75.Admin Mobile App\r\n76.UBI Grading\r\n77.Mobile App Assignment Submission by Camera\r\n78.Student Login, Logout & Session Management\r\n79.Grades Emailer | Grades | Admin Panel", target: "100%" }
      ] },
      { id: "cf30113", code: "30113", name: "Bhupinder", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Coach LMS | Student Experience\r\n2. Attendance: Display in tabular format, organized term-wise.\r\n3.Student Month View Calendar\r\n4.Concerns raised from different pages (Attendance, Assignments\r\n5.Mutiple Popup UX\r\n6.Coach LMS | Leaderboard | UIUX Bugs\r\n7.Admin Mobile App", target: "100%" }
      ] },
      { id: "cf30114", code: "30114", name: "Parmvir Singh", title: "Executive", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2. Student Month View Calendar\r\n3. Ask To resubmit resources\r\n4. Recent course update\r\n5. Placed Students Scoring | PRS | Admin | Coach LMS\r\n6. Attendance Exemption | User Mgment | Admin Panel\r\n7. Mutiple Popup UX\r\n8. Coach LMS | Leaderboard | UIUX Bugs\r\n9. Coach LMS | Admin App | Improvements\r\n10. Coach LMS | Edit Cohort UX\r\n11.Security Issues: Both student side and Admin side\r\n12. Coach LMS | Admin Notifications Control\r\n13.Coach Activity Dashboard\r\n14.Assignment Save & Draft\r\n15.PM email detailed stats (Leaders Email | Admin | Coach LMS)\r\n16.PRS Rewamp\r\n17.Admin Mobile App\r\n18.Student Login, Logout & Session Management\r\n19.UBI Grading\r\n20.Grades Emailer | Grades | Admin Panel", target: "100%" }
      ] },
      { id: "cf30115", code: "30115", name: "Vikas Kumar", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Recent course update\r\n2.Student Holiday Preview | Holidays | Admin & Coach LMS", target: "100%" }
      ] },
      { id: "cf30116", code: "30116", name: "Dinky", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Attendance: Display in tabular format, organized term-wise.\r\n2.Student Month View Calendar\r\n3.Coach LMS | Leaderboard | UIUX Bugs\r\n4.Multiple consent form", target: "100%" }
      ] },
      { id: "cf30117", code: "30117", name: "Amanpreet Kaur", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2. Student Month View Calendar\r\n3.Parent Mobile App\r\n4.Tools on the App Dashboard\r\n5. Admin>Configuration: add limit for flag name and description\r\n6. Attendance page change", target: "100%" }
      ] },
      { id: "cf30118", code: "30118", name: "Gagandeep Kaur", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Student Mobile App v2\r\n2.Recent course update\r\n3.Coach LMS | Student Experience mobile app\r\n4.Parent Mobile App\r\n5.Student & Parent Leave List Visibility in mobile app", target: "100%" }
      ] },
      { id: "cf30120", code: "30120", name: "Shashank", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1. Coach LMS | Marketplace | Detailed View\r\n2.AI Session Notes Improvements\r\n3.Ask To resubmit resources\r\n4.Video Proctoring | Logic Update\r\n5.Analytics UI UX Improvements\r\n6.Mobile Phone Detection Addition | Video Proctoring\r\n7.Ai course/ session/ creation\r\n8.Event addition questions", target: "100%" }
      ] },
      { id: "cf30121", code: "30121", name: "Mojahid Ul Haque", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "cf30112", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "1.Feature Request\r\n2.Security Issues: Both student side and Admin side\r\n3.photo gallery improvement using gdrive\r\n4.Cost Optimisation aws \r\n5. Improved Amazon RDS performance.\r\n6.Enhanced Amazon ElastiCache performance.\r\n7.Developed an AWS Operations Console to monitor costs and resources in one centralized location.\r\n8.Implemented bulk resume downloads using AWS Lambda.\r\n9.Session lambda function for thumb generater\r\n10..WhatsApp & Mail Reply | Help & Support | LMS & Admin lambda function", target: "100%" }
      ] },
      { id: "cf30155", code: "30155", name: "Shubhangi Dhar", title: "Team Lead", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf29567", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf30176", code: "30176", name: "Spandana Guduru", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf28126", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "Launch ai.mu and hold a weekly content cadence. First student co-built page.\r\nGrow the ai.mu following this quarter.", target: "100%" }
      ] },
      { id: "cf30177", code: "30177", name: "Dhananjay Jain", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf29733", empType: "Full-time", kras: [
        { title: "New Initiatives", metric: "Engineer and tester. Build and test Project Bran to ship live by 31 August.", target: "100%" }
      ] },
      { id: "cfInt171", code: "Int171", name: "Trisha Das", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28071", empType: "Full-time", kras: [] },
      { id: "cf30179", code: "30179", name: "AJAY SHARMA", title: "Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28183", empType: "Full-time", kras: [
        { title: "Mentorship via MentorUnion", metric: "Identify, document, and close at least [W] product-operations improvements across the mentee journey, mentor journey, booking flow, notifications, support flows, admin workflows and reporting", target: "40%" },
        { title: "Mentorship via MentorUnion", metric: "Convert at least [X] recurring platform issues or user pain points into clear product requirement notes, tech tickets, process fixes or support-flow improvements", target: "30%" },
        { title: "Mentorship via MentorUnion", metric: "Complete [Y] UAT and release-readiness checks for new MentorUnion features, bug fixes, admin changes, notification updates or workflow improvements before rollout", target: "20%" },
        { title: "Student Satisfaction", metric: "Resolve or improve at least [Z] recurring mentor or mentee experience gaps by coordinating with tech, product, design, support, and operations teams.", target: "10%" }
      ] },
      { id: "cfInt172", code: "Int172", name: "Prince koshiya", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28071", empType: "Full-time", kras: [] },
      { id: "cfInt170", code: "Int170", name: "Aryan Sagar", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [] },
      { id: "cf30185", code: "30185", name: "Raushan Kumar", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf27442", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Identify, engage, onboard, and prepare industry Masters aligned to TBM/YLC /HROS curriculum needs and overall program outcomes, ensuring clarity on expectations and readiness before engagement. In addition, manging logistics and operation including payments end to end.", target: "60%" },
        { title: "Student Satisfaction", metric: "Ensure Masters deliver structured, relevant, and outcome-oriented sessions by aligning expectations, tracking feedback trends, and addressing delivery gaps across modules.", target: "40%" }
      ] },
      { id: "cf30178", code: "30178", name: "Tushar Singh", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf30447", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Editor and AD support. Support ad and brand film production under Mrittika.", target: "100%" }
      ] },
      { id: "cfInt173", code: "Int173", name: "Abhishek Ghosh", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29733", empType: "Full-time", kras: [] },
      { id: "cf30180", code: "30180", name: "Raghav Srivastava", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28810", empType: "Full-time", kras: [
        { title: "Master Onboarding", metric: "Onboard Masters through structured demo evaluations, ensuring alignment with different Programs' standards, learner maturity, and curriculum goals.\r\nDSAI and PGP Bharat are the key allocation from June -Aug", target: "40%" },
        { title: "Student Satisfaction", metric: "Ensure consistent teaching quality across programs by tracking feedback and supporting Masters with clear guidance and expectations.", target: "25%" },
        { title: "Accessibility of Interactions", metric: "Enable guest talks, mentoring sessions, and industry exposure activities appropriate for learners.", target: "20%" },
        { title: "New Initiatives and Experiments", metric: "Experiment with new teaching formats, demo frameworks, or engagement models to improve learning effectiveness and scalability.", target: "15%" }
      ] },
      { id: "cf30220", code: "30220", name: "Nikita Ghule", title: "Senior Manager - I", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf30225", code: "30225", name: "Dhirendra Kumar", title: "Manager", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf29126", empType: "Full-time", kras: [
        { title: "Youtube IPs (TOFU)", metric: "Own Decoded by MU and Insights. 50x videos every month.\r\nHit 2.5M views a month on Decoded and Insights.", target: "100%" }
      ] },
      { id: "cf30233", code: "30233", name: "Prabhakar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf30237", code: "30237", name: "Vikash Pandit", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf28012", empType: "Full-time", kras: [
        { title: "Media & Production", metric: "Producer. Coordinate on-ground production for Fiction shoots.", target: "100%" }
      ] },
      { id: "cf30238", code: "30238", name: "Naman Satija", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf28315", empType: "Full-time", kras: [] },
      { id: "cf30239", code: "30239", name: "Avneesh Arya", title: "Team Lead", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "24+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf30240", code: "30240", name: "Rubal Singh", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Events and Ops", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cf30262", code: "30262", name: "Deepthi K", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Ensure high-quality student learning outcomes", metric: "Support student progress tracking and follow-ups — Assist in monitoring student performance and coordinating academic support for assigned cohorts.", target: "25%" },
        { title: "Optimize academic operations and processes", metric: "Coordinate academic scheduling and session logistics — Manage timetabling, session coordination, and resource arrangements.", target: "25%" },
        { title: "Enhance academic excellence and curriculum delivery", metric: "Support course material preparation and upkeep — Assist faculty in preparing and updating course content and learning material.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Coordinate guest sessions and external engagements — Handle scheduling and coordination for guest lectures and industry interactions.", target: "15%" },
        { title: "Optimize academic operations and processes", metric: "Maintain academic records and reporting — Keep academic data, trackers, and reports accurate and up to date.", target: "15%" }
      ] },
      { id: "cf30265", code: "30265", name: "Komal Saini", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf29582", empType: "Full-time", kras: [] },
      { id: "cfInt148", code: "Int148", name: "Anuj Paliwal", title: "Intern", dept: "c11", bu: "Central Functions", subDept: "New Initiatives", managerId: "cf29214", empType: "Full-time", kras: [] },
      { id: "cfInt180", code: "Int180", name: "Harpreet Singh", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28071", empType: "Full-time", kras: [] },
      { id: "cf30287", code: "30287", name: "Tejal Dua", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28137", empType: "Full-time", kras: [
        { title: "Content (Short form / Long form)", metric: "Writer. Write scripts for ads and brand films with the Fiction pod.", target: "100%" }
      ] },
      { id: "cf30294", code: "30294", name: "Yaashi Shah", title: "Program Associate", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cf28993", empType: "Full-time", kras: [] },
      { id: "cf30284", code: "30284", name: "Dr. Soumya Mudgal", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [
        { title: "Enhance academic excellence and curriculum delivery", metric: "Deliver high-quality lectures and course content — Ensure engaging and effective delivery of academic content to students.", target: "30%" },
        { title: "Foster faculty development and research initiatives", metric: "Participate in research projects and publications — Contribute to research initiatives and publish findings in reputed journals.", target: "30%" },
        { title: "Ensure high-quality student learning outcomes", metric: "Monitor and improve student performance — Provide feedback and support to students to enhance their learning outcomes.", target: "20%" },
        { title: "Strengthen academic collaborations and partnerships", metric: "Collaborate with industry experts for guest lectures — Organize and facilitate guest lectures and workshops with industry professionals.", target: "10%" },
        { title: "Optimize academic operations and processes", metric: "Streamline course planning and delivery — Ensure efficient planning and execution of academic courses.", target: "10%" }
      ] },
      { id: "cf30314", code: "30314", name: "Vivek Bhardwaj", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf30317", code: "30317", name: "Ashish Kumar Saxena", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf30334", code: "30334", name: "Diksha Dubey", title: "Associate Program Manager", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cf28993", empType: "Full-time", kras: [] },
      { id: "cf30324", code: "30324", name: "Dr. Bhavika Bali", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30325", code: "30325", name: "Paankhi Jain", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [
        { title: "Delivery", metric: "45+ joinings per Quarter", target: "80%" },
        { title: "Candidate Experience", metric: "TAT : Measures the average time taken to close roles, maintained below 30 days across all categories.(<=30 Days)", target: "10%" },
        { title: "Process Efficiency", metric: "Candidate NPS indicates candidate satisfaction with the hiring experience. (>=4.5/5)", target: "10%" }
      ] },
      { id: "cf30341", code: "30341", name: "Gaurav Khanna", title: "Senior Manager - I", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cfx13", empType: "Full-time", kras: [] },
      { id: "cf30344", code: "30344", name: "Mukul Kumar Verma", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28209", empType: "Full-time", kras: [] },
      { id: "cf30329", code: "30329", name: "Nitesh Kumar", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28540", empType: "Full-time", kras: [] },
      { id: "cf30345", code: "30345", name: "Bhavay Batra", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Marketing", managerId: "cf29126", empType: "Full-time", kras: [] },
      { id: "cf30084", code: "30084", name: "Naman Kareer", title: "Associate Director", dept: "c2", bu: "Central Functions", subDept: "Tech (Naman)", managerId: "vcf", empType: "Full-time", kras: [
        { title: "Product Delivery & Roadmap", metric: "On-time delivery of quarterly roadmap items .", target: "25%" },
        { title: "Engineering Quality", metric: "Reduce critical production bugs (target count per product)", target: "20%" },
        { title: "System Reliability & Performance", metric: "Maintain average system uptime .", target: "15%" },
        { title: "UX & User Satisfaction", metric: "Average UX/NPS or feedback score (out of 5)", target: "15%" },
        { title: "Team Capability & Development", metric: "Number of team training/knowledge sessions per quarter", target: "10%" },
        { title: "Stakeholder Alignment & Reporting", metric: "Number of structured reviews/updates with leadership per quarter", target: "15%" }
      ] },
      { id: "cf30357", code: "30357", name: "Bhoomika Rajauria", title: "Admission Counsellor - II", dept: "c6", bu: "Central Functions", subDept: "Conversion", managerId: "cf28183", empType: "Full-time", kras: [] },
      { id: "cf30367", code: "30367", name: "Harshita Panwar", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf29735", empType: "Full-time", kras: [] },
      { id: "cf30354", code: "30354", name: "Raunak Kevin Sigler", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "HRBP", managerId: "cf29735", empType: "Full-time", kras: [] },
      { id: "cf30377", code: "30377", name: "Abhishek Kumar Ray", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf26222", empType: "Full-time", kras: [] },
      { id: "cf30382", code: "30382", name: "Shaikh Madiha", title: "Executive", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30383", code: "30383", name: "Ankit Kumar", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf30314", empType: "Full-time", kras: [] },
      { id: "cf30111", code: "30111", name: "Tarun Gupta", title: "Associate Director", dept: "c2", bu: "Central Functions", subDept: "Tech (Tarun)", managerId: "vcf", empType: "Full-time", kras: [
        { title: "Product Delivery – CoachLMS", metric: "Product Delivery – CoachLMS", target: "100%" }
      ] },
      { id: "cf30396", code: "30396", name: "Prince Chaudhary", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf29225", empType: "Full-time", kras: [] },
      { id: "cf30402", code: "30402", name: "Komolika Yadav", title: "Admission Counsellor - I", dept: "c6", bu: "Central Functions", subDept: "Conversion", managerId: "cf28183", empType: "Full-time", kras: [] },
      { id: "cf30404", code: "30404", name: "Apurav Sehgal", title: "Senior Manager - I", dept: "c11", bu: "Central Functions", subDept: "New Initiatives (Central)", managerId: "cf29796", empType: "Full-time", kras: [] },
      { id: "cf30405", code: "30405", name: "Rohit Jha", title: "Senior Executive", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf30406", code: "30406", name: "Rahul Kumar Pandey", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28620", empType: "Full-time", kras: [] },
      { id: "cf30443", code: "30443", name: "Maniesh K Khatri", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf26222", empType: "Full-time", kras: [] },
      { id: "cf30447", code: "30447", name: "Ashirbad Panda", title: "Manager", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30478", code: "30478", name: "Deepak Phogat", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28804", empType: "Full-time", kras: [] },
      { id: "cf30479", code: "30479", name: "Kamya Jain", title: "Senior Manager - I", dept: "c11", bu: "Central Functions", subDept: "New Initiatives (Central)", managerId: "cf29796", empType: "Full-time", kras: [] },
      { id: "cf30480", code: "30480", name: "Gaurav Yadav", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28208", empType: "Full-time", kras: [] },
      { id: "cf30500", code: "30500", name: "Charu Verma", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cfC0106", code: "C0106", name: "Dipankar Rai", title: "Consultant", dept: "c11", bu: "Central Functions", subDept: "New Initiatives (Central)", managerId: "cf29214", empType: "Full-time", kras: [] },
      { id: "cf30507", code: "30507", name: "Priyanshu Bharadwaj", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf30326", empType: "Full-time", kras: [] },
      { id: "cf30509", code: "30509", name: "Gaurav Pratap Singh", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf28039", empType: "Full-time", kras: [] },
      { id: "cf30529", code: "30529", name: "Sunil Kumar", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf26222", empType: "Full-time", kras: [] },
      { id: "cf30535", code: "30535", name: "Mohit keelka", title: "Executive", dept: "c11", bu: "Central Functions", subDept: "New Initiatives (Central)", managerId: "cf29796", empType: "Full-time", kras: [] },
      { id: "cf30537", code: "30537", name: "Deepak Negi", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf29126", empType: "Full-time", kras: [] },
      { id: "cf30538", code: "30538", name: "Ajay Bharti", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "vcf", empType: "Full-time", kras: [] },
      { id: "cfInt186", code: "Int186", name: "Karan Yadav", title: "Intern", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28874", empType: "Full-time", kras: [] },
      { id: "cf30539", code: "30539", name: "Archit Dubey", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "Leadership", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30573", code: "30573", name: "Astha Mehrotra", title: "Executive", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28684", empType: "Full-time", kras: [] },
      { id: "cf30564", code: "30564", name: "Ankit Yadav", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf27529", empType: "Full-time", kras: [] },
      { id: "cf30577", code: "30577", name: "Ravi Karm Singh", title: "General Manager", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cfInt187", code: "Int187", name: "Sahil Chahar", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28759", empType: "Full-time", kras: [] },
      { id: "cf30576", code: "30576", name: "Nikhil Tomar", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30567", code: "30567", name: "Aaryan Agarwal", title: "Associate Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf26279", empType: "Full-time", kras: [] },
      { id: "cf30632", code: "30632", name: "Md. Akram", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "Operations", managerId: "cf28860", empType: "Full-time", kras: [] },
      { id: "cf30637", code: "30637", name: "Khemendra Saini", title: "Manager", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Full-time", kras: [] },
      { id: "cf30648", code: "30648", name: "Rajnish Kumar", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [] },
      { id: "cf30650", code: "30650", name: "Jatin Chugh", title: "Senior Manager - II", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf30653", code: "30653", name: "Sahil", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "Brand", managerId: "cf28012", empType: "Full-time", kras: [] },
      { id: "cf30565", code: "30565", name: "Deepali Gupta", title: "Associate Director", dept: "c11", bu: "Central Functions", subDept: "New Initiatives", managerId: "cfx11", empType: "Full-time", kras: [] },
      { id: "cf30609", code: "30609", name: "Manya Soni", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cfx4", empType: "Full-time", kras: [] },
      { id: "cf30651", code: "30651", name: "Abhisekh Chhetri", title: "Senior Executive", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30652", code: "30652", name: "Raunak Kumar", title: "Senior Executive", dept: "c1", bu: "Central Functions", subDept: "Academics", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cfInt190", code: "Int190", name: "Vertika Rahar", title: "Intern", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf28874", empType: "Full-time", kras: [] },
      { id: "cf30655", code: "30655", name: "Triditpal Kumar Terang", title: "Associate", dept: "c1", bu: "Central Functions", subDept: "NA", managerId: "cf29137", empType: "Full-time", kras: [] },
      { id: "cf30677", code: "30677", name: "Shaily Mishra", title: "Senior Executive", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30675", code: "30675", name: "Sumit Kumar", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cfx1", code: "—", name: "Yashika Hasija", title: "", dept: "c5", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Inferred", kras: [] },
      { id: "cfx2", code: "—", name: "Sakshi Girdhar", title: "", dept: "c2", bu: "Central Functions", subDept: "Leadership", managerId: "cf26129", empType: "Inferred", kras: [] },
      { id: "cfx3", code: "—", name: "Rohit Gujral", title: "", dept: "c9", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Inferred", kras: [] },
      { id: "cfx4", code: "—", name: "Twesha Handa", title: "", dept: "c6", bu: "Central Functions", subDept: "Leadership", managerId: "cf1255", empType: "Inferred", kras: [] },
      { id: "cfx5", code: "—", name: "Ojasvi Ghosal", title: "", dept: "c3", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Inferred", kras: [] },
      { id: "cfx7", code: "—", name: "Sonia Sharma", title: "", dept: "c5", bu: "Central Functions", subDept: "Leadership", managerId: "cfx1", empType: "Inferred", kras: [] },
      { id: "cfx8", code: "—", name: "Rajit Meena", title: "", dept: "c5", bu: "Central Functions", subDept: "Leadership", managerId: "cfx1", empType: "Inferred", kras: [] },
      { id: "cfx9", code: "—", name: "Paras Chaudhary", title: "", dept: "c2", bu: "Central Functions", subDept: "Leadership", managerId: "cf26129", empType: "Inferred", kras: [] },
      { id: "cft1", code: "TBH", name: "Open role", title: "Community Engagement Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cfx4", empType: "Open role", kras: [] },
      { id: "cft2", code: "TBH", name: "Open role", title: "Events Operations", dept: "c6", bu: "Central Functions", subDept: "CXO relations", managerId: "cf26279", empType: "Open role", kras: [] },
      { id: "cft3", code: "TBH", name: "Open role", title: "DSAI", dept: "c6", bu: "Central Functions", subDept: "Insitutional Relationships", managerId: "cf28810", empType: "Open role", kras: [] },
      { id: "cft4", code: "TBH", name: "Open role", title: "Makers Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29189", empType: "Open role", kras: [] },
      { id: "cft5", code: "TBH", name: "Open role", title: "Makers Manager", dept: "c6", bu: "Central Functions", subDept: "Master Relations", managerId: "cf29189", empType: "Open role", kras: [] },
      { id: "cft6", code: "TBH", name: "Open role", title: "Mentorship", dept: "c6", bu: "Central Functions", subDept: "Mentor Union", managerId: "cf28183", empType: "Open role", kras: [] },
      { id: "cft7", code: "TBH", name: "Open role", title: "Intern", dept: "c6", bu: "Central Functions", subDept: "", managerId: "cf1255", empType: "Open role", kras: [] },
      { id: "cft8", code: "TBH", name: "Open role", title: "Biotech Professor", dept: "c1", bu: "Central Functions", subDept: "Academics (Central)", managerId: "cf1185", empType: "Open role", kras: [] },
      { id: "cft9", code: "TBH", name: "Open role", title: "Professor", dept: "c1", bu: "Central Functions", subDept: "Academics (Central)", managerId: "cf1185", empType: "Open role", kras: [] },
      { id: "cft10", code: "TBH", name: "Open role", title: "Academics Cordinator", dept: "c1", bu: "Central Functions", subDept: "Academics (Central)", managerId: "cf1185", empType: "Open role", kras: [] },
      { id: "cft11", code: "TBH", name: "Open role", title: "Academics Cordinator", dept: "c1", bu: "Central Functions", subDept: "Academics (Central)", managerId: "cf1185", empType: "Open role", kras: [] },
      { id: "cft12", code: "TBH", name: "Open role", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "", managerId: "cf28126", empType: "Open role", kras: [] },
      { id: "cft13", code: "TBH", name: "Open role", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "", managerId: "cf28126", empType: "Open role", kras: [] },
      { id: "cft14", code: "TBH", name: "Open role", title: "HR Lead", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cf30488", empType: "Open role", kras: [] },
      { id: "cft15", code: "TBH", name: "Open role", title: "HR Lead", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cf30488", empType: "Open role", kras: [] },
      { id: "cft16", code: "TBH", name: "Open role", title: "HR Lead", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cf30488", empType: "Open role", kras: [] },
      { id: "cft17", code: "TBH", name: "Open role", title: "PMS Lead", dept: "c7", bu: "Central Functions", subDept: "HR", managerId: "cf30488", empType: "Open role", kras: [] },
      { id: "cft18", code: "TBH", name: "Open role", title: "Senior Executive - TA", dept: "c7", bu: "Central Functions", subDept: "TA", managerId: "cf28179", empType: "Open role", kras: [] },
      { id: "cft19", code: "TBH", name: "Open role", title: "Associate Director", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cfx11", empType: "Open role", kras: [] },
      { id: "cft20", code: "TBH", name: "Open role", title: "APM - Director's Office", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cfx11", empType: "Open role", kras: [] },
      { id: "cft21", code: "TBH", name: "Open role", title: "General Manager", dept: "c10", bu: "Central Functions", subDept: "Founder's Office", managerId: "cfx11", empType: "Open role", kras: [] },
      { id: "cft22", code: "TBH", name: "Open role", title: "Admin & Campus Ops", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft23", code: "TBH", name: "Open role", title: "AV Engineer", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Open role", kras: [] },
      { id: "cft24", code: "TBH", name: "Open role", title: "AV Engineer", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Open role", kras: [] },
      { id: "cft25", code: "TBH", name: "Open role", title: "AV Engineer", dept: "c5", bu: "Central Functions", subDept: "IT Support", managerId: "cf1240", empType: "Open role", kras: [] },
      { id: "cft26", code: "TBH", name: "Open role", title: "Central Hostel & Operations Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft27", code: "TBH", name: "Open role", title: "University Partnership Manager", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft28", code: "TBH", name: "Open role", title: "PGP Cohort Manager (Visa)", dept: "c5", bu: "Central Functions", subDept: "VISA", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft29", code: "TBH", name: "Open role", title: "Executive Education Cohort Manager (Visa)", dept: "c5", bu: "Central Functions", subDept: "VISA", managerId: "cfx8", empType: "Open role", kras: [] },
      { id: "cft30", code: "TBH", name: "Open role", title: "Male Gym Trainer", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft31", code: "TBH", name: "Open role", title: "Male Gym Trainer", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft32", code: "TBH", name: "Open role", title: "Female Gym Trainer", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft33", code: "TBH", name: "Open role", title: "Female Gym Trainer", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft34", code: "TBH", name: "Open role", title: "Floor Associates/Admin Associate", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft35", code: "TBH", name: "Open role", title: "Driver", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft36", code: "TBH", name: "Open role", title: "Senior Psycologist", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft37", code: "TBH", name: "Open role", title: "Event Manager", dept: "c5", bu: "Central Functions", subDept: "Events", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft38", code: "TBH", name: "Open role", title: "General Manager – Executive Education", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "ex26447", empType: "Open role", kras: [] },
      { id: "cft39", code: "TBH", name: "Open role", title: "Regional Head – India & Dubai", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft40", code: "TBH", name: "Open role", title: "Regional Head – China & Kenya", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft41", code: "TBH", name: "Open role", title: "Regional Head – USA & Argentina", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft42", code: "TBH", name: "Open role", title: "UG Cohort Managers (Visa)", dept: "c5", bu: "Central Functions", subDept: "VISA", managerId: "cfx8", empType: "Open role", kras: [] },
      { id: "cft43", code: "TBH", name: "Open role", title: "UG Cohort Managers (Visa)", dept: "c5", bu: "Central Functions", subDept: "VISA", managerId: "cfx8", empType: "Open role", kras: [] },
      { id: "cft44", code: "TBH", name: "Open role", title: "UG Cohort Managers (Visa)", dept: "c5", bu: "Central Functions", subDept: "VISA", managerId: "cfx8", empType: "Open role", kras: [] },
      { id: "cft45", code: "TBH", name: "Open role", title: "Program Manager – 1", dept: "c5", bu: "Central Functions", subDept: "Director's Office", managerId: "cfx1", empType: "Open role", kras: [] },
      { id: "cft46", code: "TBH", name: "Open role", title: "India Hostel Manager – 1", dept: "c5", bu: "Central Functions", subDept: "Admin", managerId: "cf27567", empType: "Open role", kras: [] },
      { id: "cft47", code: "TBH", name: "Open role", title: "General Manager - MU", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cf29925", empType: "Open role", kras: [] },
      { id: "cft48", code: "TBH", name: "Open role", title: "FP&A Manager", dept: "c3", bu: "Central Functions", subDept: "Finance", managerId: "cf29925", empType: "Open role", kras: [] },
      { id: "cft49", code: "TBH", name: "Open role", title: "Legal", dept: "c9", bu: "Central Functions", subDept: "Legal", managerId: "cfx3", empType: "Open role", kras: [] },
      { id: "cfx11", code: "—", name: "Chetan Verma", title: "", dept: "c10", bu: "Central Functions", subDept: "Leadership", managerId: "vcf", empType: "Inferred", kras: [] },
      { id: "cf30685", code: "30685", name: "Shunsang Chetia Phukon", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30687", code: "30687", name: "Aashna Bakshi", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "NA", managerId: "cf28183", empType: "Full-time", kras: [] },
      { id: "cf30697", code: "30697", name: "Muazzam Ali Khan", title: "Senior Executive", dept: "c9", bu: "Central Functions", subDept: "NA", managerId: "cfx5", empType: "Full-time", kras: [] },
      { id: "cf30707", code: "30707", name: "Akshita Goyal", title: "Manager", dept: "c3", bu: "Central Functions", subDept: "NA", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf30724", code: "30724", name: "Aniket Bisen", title: "Associate Program Manager", dept: "c10", bu: "Central Functions", subDept: "NA", managerId: "cf28993", empType: "Full-time", kras: [] },
      { id: "cf30725", code: "30725", name: "Soma Charan", title: "Associate Program Manager", dept: "c10", bu: "Central Functions", subDept: "NA", managerId: "cf28993", empType: "Full-time", kras: [] },
      { id: "cf30727", code: "30727", name: "Sailesh Kodali", title: "Associate Program Manager", dept: "c11", bu: "Central Functions", subDept: "NA", managerId: "cf30565", empType: "Full-time", kras: [] },
      { id: "cf30748", code: "30748", name: "Midhila K S", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "NA", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30751", code: "30751", name: "Jaison John", title: "Executive", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30760", code: "30760", name: "Ankur Sood", title: "Senior Manager - II", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf30761", code: "30761", name: "Ashutosh Chauhan", title: "General Manager", dept: "c7", bu: "Central Functions", subDept: "Talent Acquisition", managerId: "cf28179", empType: "Full-time", kras: [] },
      { id: "cf30762", code: "30762", name: "Vivek Srivastava", title: "Manager", dept: "c3", bu: "Central Functions", subDept: "NA", managerId: "cf29925", empType: "Full-time", kras: [] },
      { id: "cf30790", code: "30790", name: "Ankita Roy", title: "Senior Executive", dept: "c7", bu: "Central Functions", subDept: "NA", managerId: "cf26150", empType: "Full-time", kras: [] },
      { id: "cf30792", code: "30792", name: "Monu Jaiswal", title: "Associate", dept: "c5", bu: "Central Functions", subDept: "NA", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cf30797", code: "30797", name: "Neil Sigler", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "NA", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf30798", code: "30798", name: "Nirbhay Rana", title: "Assistant Professor - I", dept: "c1", bu: "Central Functions", subDept: "NA", managerId: "cf1185", empType: "Full-time", kras: [] },
      { id: "cf30799", code: "30799", name: "MOKSH BAINSLA", title: "Program Manager", dept: "c6", bu: "Central Functions", subDept: "NA", managerId: "cf28810", empType: "Full-time", kras: [] },
      { id: "cf30800", code: "30800", name: "Piyush Kaura", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "NA", managerId: "cf30084", empType: "Full-time", kras: [] },
      { id: "cf30801", code: "30801", name: "Chaitanya", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "NA", managerId: "cf30084", empType: "Full-time", kras: [] },
      { id: "cf30802", code: "30802", name: "Umang Behl", title: "Associate", dept: "c2", bu: "Central Functions", subDept: "NA", managerId: "cf30084", empType: "Full-time", kras: [] },
      { id: "cf30803", code: "30803", name: "Anurag Mahor", title: "General Manager", dept: "c7", bu: "Central Functions", subDept: "NA", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "cf30834", code: "30834", name: "Sraddha Agarwal", title: "Senior Manager - II", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cf30837", code: "30837", name: "Akash Saini", title: "Senior Executive", dept: "c5", bu: "Central Functions", subDept: "NA", managerId: "cf27567", empType: "Full-time", kras: [] },
      { id: "cf30846", code: "30846", name: "S.Humz Iqbal", title: "Executive", dept: "c5", bu: "Central Functions", subDept: "NA", managerId: "cf29507", empType: "Full-time", kras: [] },
      { id: "cfInt192", code: "Int192", name: "Yash Jain", title: "Intern", dept: "c4", bu: "Central Functions", subDept: "NA", managerId: "cf28126", empType: "Full-time", kras: [] },
      { id: "cfx13", code: "—", name: "Pritish Gupta", title: "", dept: "c5", bu: "Central Functions", subDept: "Leadership", managerId: "cfx1", empType: "Inferred", kras: [] },
      { id: "ug30256", code: "30256", name: "Kamayani Sadhwani", title: "Senior Director", dept: "d1", bu: "UG Programme", subDept: "Founder's Office", managerId: "vug", empType: "Full-time", kras: [] },
      { id: "ug28970", code: "28970", name: "Aakash Takyar", title: "Senior Manager - I", dept: "c4", bu: "UG Programme", subDept: "Performance Marketing", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug29543", code: "29543", name: "Anshika Kathuria", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Social Media", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug29391", code: "29391", name: "Dhruv Singh", title: "Executive", dept: "c4", bu: "UG Programme", subDept: "Marketing", managerId: "ug29256", empType: "Full-time", kras: [] },
      { id: "ug28267", code: "28267", name: "Hardik Arora", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug28781", code: "28781", name: "Hera Ashfaque", title: "Associate Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug27827", empType: "Full-time", kras: [] },
      { id: "ug27827", code: "27827", name: "Hitakshi Mewara", title: "Senior Manager - I", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug29540", code: "29540", name: "Jatin Saluja", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug28133", code: "28133", name: "Khushi Khurana", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug29256", code: "29256", name: "Manas Katyal", title: "Manager", dept: "c4", bu: "UG Programme", subDept: "Director's Office", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug29078", code: "29078", name: "Mansi Gupta", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug28706", code: "28706", name: "Mritunjay Kumar", title: "Associate Program Manager", dept: "c4", bu: "PG Programme", subDept: "Brand", managerId: "ug28760", empType: "Full-time", kras: [] },
      { id: "ug29513", code: "29513", name: "Nupur Ratra", title: "Senior Executive", dept: "c4", bu: "UG Programme", subDept: "Marketing", managerId: "ug28136", empType: "Full-time", kras: [] },
      { id: "ug29437", code: "29437", name: "Parth Grover", title: "Associate", dept: "c4", bu: "UG Programme", subDept: "Director's Office", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug29600", code: "29600", name: "Ramyaa Grover", title: "Manager", dept: "c4", bu: "UG Programme", subDept: "Director's Office", managerId: "ug28630", empType: "Full-time", kras: [] },
      { id: "ug28630", code: "28630", name: "Shekhar Gera", title: "General Manager", dept: "c4", bu: "UG Programme", subDept: "Marketing", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug28136", code: "28136", name: "Shreya .", title: "Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug29599", empType: "Full-time", kras: [] },
      { id: "ug28746", code: "28746", name: "Shreya Raheja", title: "Associate Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug27827", empType: "Full-time", kras: [] },
      { id: "ug29052", code: "29052", name: "Stuti Jain", title: "Associate Program Manager", dept: "c4", bu: "UG Programme", subDept: "Brand", managerId: "ug27827", empType: "Full-time", kras: [] },
      { id: "ug29599", code: "29599", name: "Abhishek Jhanwar", title: "Deputy Director", dept: "d1", bu: "PG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug26426", code: "26426", name: "Anshika Chawla", title: "Program Manager", dept: "d1", bu: "UG Programme", subDept: "NA", managerId: "x2", empType: "Full-time", kras: [] },
      { id: "ug29079", code: "29079", name: "Anushka Gupta", title: "Associate Program Manager", dept: "d1", bu: "UG Programme", subDept: "NA", managerId: "ug30463", empType: "Full-time", kras: [] },
      { id: "ug30616", code: "30616", name: "Ashutosh Pandey", title: "General Manager", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug26267", code: "26267", name: "Diksha Dhawan", title: "General Manager", dept: "d1", bu: "UG Programme", subDept: "Leaderships", managerId: "cf30488", empType: "Full-time", kras: [] },
      { id: "ug28760", code: "28760", name: "Divyashish Jindal", title: "Associate Director", dept: "d1", bu: "PG Programme", subDept: "NA", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29773", code: "29773", name: "Hitesh Pandey", title: "Associate Program Manager", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30463", empType: "Full-time", kras: [] },
      { id: "ug30744", code: "30744", name: "Ishita Gupta", title: "Associate Program Manager", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug29599", empType: "Full-time", kras: [] },
      { id: "ug30589", code: "30589", name: "Krishna Kant Tiwari", title: "Deputy Director", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30463", code: "30463", name: "Kunal Singh", title: "Program Manager", dept: "d1", bu: "UG Programme", subDept: "Program Manager", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29209", code: "29209", name: "Nikita .", title: "Executive", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug27968", empType: "Full-time", kras: [] },
      { id: "ug29354", code: "29354", name: "Praneet Sawhney", title: "Senior Manager - II", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29598", code: "29598", name: "Saanya Khunger", title: "Senior Manager - II", dept: "d1", bu: "PG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29210", code: "29210", name: "Sahil Khosla", title: "General Manager", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug28760", empType: "Full-time", kras: [] },
      { id: "ug29263", code: "29263", name: "Akanksha Mishra", title: "Program Associate", dept: "d2", bu: "UG Programme", subDept: "Director's Office", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug28154", code: "28154", name: "Ananya Dhingra", title: "Program Manager", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29508", code: "29508", name: "Ankan Majumder", title: "Associate Program Manager", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug30585", code: "30585", name: "Apoorva Jain", title: "Senior Manager - II", dept: "d2", bu: "UG Programme", subDept: "Placements", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29474", code: "29474", name: "Arham Kochar", title: "Senior Manager - I", dept: "d2", bu: "UG Programme", subDept: "Admissions", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29802", code: "29802", name: "Arshiya Jain", title: "Associate Program Manager", dept: "d2", bu: "UG Programme", subDept: "Placements", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug28222", code: "28222", name: "Arunddhati Raj", title: "Program Manager", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug28749", empType: "Full-time", kras: [] },
      { id: "ug30255", code: "30255", name: "Astha Malhotra", title: "Associate Program Manager", dept: "d2", bu: "UG Programme", subDept: "Placements", managerId: "ug29475", empType: "Full-time", kras: [] },
      { id: "ug28239", code: "28239", name: "Bhapinder Kaur", title: "General Manager", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug27987", code: "27987", name: "Devika Majumdar", title: "Senior Manager - I", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug27712", code: "27712", name: "Mahima Arora", title: "Associate Program Manager", dept: "d2", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Full-time", kras: [] },
      { id: "ug29387", code: "29387", name: "Rahil Sethia", title: "Senior Manager - I", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29879", code: "29879", name: "Sanskriti Sharma", title: "Associate Program Manager", dept: "d2", bu: "UG Programme", subDept: "Placements", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug28232", code: "28232", name: "Shagun Abbey", title: "General Manager", dept: "d2", bu: "UG Programme", subDept: "Career Prep", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29475", code: "29475", name: "Shagun Gupta", title: "Deputy Director", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug29128", code: "29128", name: "Shaurya Kumar Mittal", title: "Deputy Director", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30353", code: "30353", name: "Surya Iyer", title: "Program Manager", dept: "d2", bu: "UG Programme", subDept: "Student Experience", managerId: "ug29475", empType: "Full-time", kras: [] },
      { id: "ug29566", code: "29566", name: "Yuvraj Jain", title: "Senior Executive", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Full-time", kras: [] },
      { id: "ug30736", code: "30736", name: "AMIT KUMAR", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Full-time", kras: [] },
      { id: "ug27360", code: "27360", name: "Aayushi Banotra", title: "Associate Director", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30619", code: "30619", name: "Ainie Islam", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug28595", code: "28595", name: "Alabhaya Jha", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Brand", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug29912", code: "29912", name: "Amandeep Oshan", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30214", code: "30214", name: "Aniket Singh Bhakuni", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admission", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29135", code: "29135", name: "Aprajita Mitra", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30783", code: "30783", name: "Arsh Tyagi", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30793", code: "30793", name: "Chaitanya Sundriyal", title: "Associate Program Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug28195", code: "28195", name: "Chandana Jaiswal", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29517", code: "29517", name: "Devam Chandna", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29341", empType: "Full-time", kras: [] },
      { id: "ug29609", code: "29609", name: "Deviyanka Malhotra", title: "Executive", dept: "d3", bu: "UG Programme", subDept: "Director's Office", managerId: "ug27968", empType: "Full-time", kras: [] },
      { id: "ug27912", code: "27912", name: "Dolly Singh", title: "Associate Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug30150", code: "30150", name: "Drishti Majumdar", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug27968", code: "27968", name: "Falak Saini", title: "Senior Executive", dept: "d3", bu: "UG Programme", subDept: "Growth", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug30678", code: "30678", name: "Gargi Moon", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admission", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29068", code: "29068", name: "Garima Chander", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29183", code: "29183", name: "Gazala Akhtar", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29341", empType: "Full-time", kras: [] },
      { id: "ug30221", code: "30221", name: "Harish Kumar", title: "Associate Program Manager", dept: "d3", bu: "UG Programme", subDept: "Academics", managerId: "ug27384", empType: "Full-time", kras: [] },
      { id: "ug29921", code: "29921", name: "Harsha Pirupilli", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug28270", code: "28270", name: "Harshita Kumari", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28223", empType: "Full-time", kras: [] },
      { id: "ug29515", code: "29515", name: "Iruvar Walia", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug30683", code: "30683", name: "Ishaan Singh", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29699", code: "29699", name: "Janhavi Singh", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29264", code: "29264", name: "Jasmeet Kaur", title: "Admission Counsellor - I", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "ug28760", empType: "Full-time", kras: [] },
      { id: "ug30758", code: "30758", name: "KRISHNA KUMAR SINGH", title: "Team Lead", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug30616", empType: "Full-time", kras: [] },
      { id: "ug29355", code: "29355", name: "Komal Pandey", title: "Associate", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "ug28760", empType: "Full-time", kras: [] },
      { id: "ug28081", code: "28081", name: "Krishan Agarwal", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Growth", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug28968", code: "28968", name: "Krishna Thakur", title: "Program Associate", dept: "d3", bu: "UG Programme", subDept: "K-12", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug28189", code: "28189", name: "Minati Bisht", title: "Associate Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28270", empType: "Full-time", kras: [] },
      { id: "ug27421", code: "27421", name: "Muskan Garg", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Hostel", managerId: "ug26267", empType: "Full-time", kras: [] },
      { id: "ug27862", code: "27862", name: "Muskan Singhal", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30469", code: "30469", name: "Nakul Gandhi", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30625", code: "30625", name: "Neha Samad", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Conversion", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29436", code: "29436", name: "Parth Shabyasachi", title: "Admission Counsellor - I", dept: "d3", bu: "PG Programme", subDept: "Admissions", managerId: "ug27384", empType: "Full-time", kras: [] },
      { id: "ug29184", code: "29184", name: "Prabhuti Bansal", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30499", code: "30499", name: "Pranav Liju", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug30778", code: "30778", name: "Prateek Rai", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug27724", code: "27724", name: "Pratham Jain", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "K12 Program", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug29335", code: "29335", name: "Prerna Kaushik", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug28125", code: "28125", name: "Priti Rai", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug27888", code: "27888", name: "Puja Bhuyan", title: "Associate Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28081", empType: "Full-time", kras: [] },
      { id: "ug27411", code: "27411", name: "Pummy Ralli", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Outreach", managerId: "ug29598", empType: "Full-time", kras: [] },
      { id: "ug29601", code: "29601", name: "Rachit Kumar", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Full-time", kras: [] },
      { id: "ug28156", code: "28156", name: "Raina Moitra", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Outreach", managerId: "ug27988", empType: "Full-time", kras: [] },
      { id: "ug29234", code: "29234", name: "Rajpreet Kaur", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Director's Office", managerId: "ug27988", empType: "Full-time", kras: [] },
      { id: "ug29779", code: "29779", name: "Rashi Sharma", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28270", empType: "Full-time", kras: [] },
      { id: "ug27530", code: "27530", name: "Rishika Bhatia", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "K12 Program", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29659", code: "29659", name: "Ritu Chauhan", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug29366", code: "29366", name: "Ruhi Misra", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Full-time", kras: [] },
      { id: "ug28188", code: "28188", name: "Rushali Srivastava", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug28547", code: "28547", name: "S Shyam .", title: "Deputy Director", dept: "d3", bu: "UG Programme", subDept: "K12 Program", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug30754", code: "30754", name: "Sakshi Kumari", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Full-time", kras: [] },
      { id: "ug30756", code: "30756", name: "Sandhya Sridhar", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29059", code: "29059", name: "Sanjana Deshwal", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug29448", code: "29448", name: "Sayan Mazumder", title: "Executive", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28081", empType: "Full-time", kras: [] },
      { id: "ug28223", code: "28223", name: "Shruti Jain", title: "General Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30008", code: "30008", name: "Simran Mishra", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug27988", code: "27988", name: "Snehadeep Kayet", title: "General Manager", dept: "d3", bu: "UG Programme", subDept: "Outreach", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug28288", code: "28288", name: "Soniya Jain", title: "Senior Manager - I", dept: "d3", bu: "PG Programme", subDept: "Sales", managerId: "ug28760", empType: "Full-time", kras: [] },
      { id: "ug27455", code: "27455", name: "Soumya Sahdev", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug29341", code: "29341", name: "Subham Goyal", title: "General Manager", dept: "d3", bu: "UG Programme", subDept: "Director's Office", managerId: "ug27765", empType: "Full-time", kras: [] },
      { id: "ug28899", code: "28899", name: "Sumit Gilhotra", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Sales", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug29440", code: "29440", name: "Tarun Kumar", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug30715", code: "30715", name: "Vanshika Kapoor", title: "Admission Counsellor - I", dept: "d3", bu: "UG Programme", subDept: "Admission", managerId: "ug29183", empType: "Full-time", kras: [] },
      { id: "ug27765", code: "27765", name: "Vinayak Khandelwal", title: "Associate Director", dept: "d3", bu: "UG Programme", subDept: "Strategy", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30290", code: "30290", name: "Anahita Matta", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Master Relations", managerId: "ug28150", empType: "Full-time", kras: [] },
      { id: "ug30368", code: "30368", name: "Anjali Yadav", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Student Experience", managerId: "ug29340", empType: "Full-time", kras: [] },
      { id: "ug30427", code: "30427", name: "Ankita Pattanath", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug27497", empType: "Full-time", kras: [] },
      { id: "ug29166", code: "29166", name: "Anushka Malasi", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Director's Office", managerId: "ug28749", empType: "Full-time", kras: [] },
      { id: "ug30613", code: "30613", name: "Anushka Sen", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics and Curriculum", managerId: "ug28236", empType: "Full-time", kras: [] },
      { id: "ug27384", code: "27384", name: "Anushree Poddar", title: "General Manager", dept: "d4", bu: "PG Programme", subDept: "University Partnerships", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug27463", code: "27463", name: "Apoorva Pandey", title: "Senior Manager - I", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Full-time", kras: [] },
      { id: "ug28693", code: "28693", name: "Aprajita Roy", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug28150", empType: "Full-time", kras: [] },
      { id: "ug30140", code: "30140", name: "Arushi Jain", title: "Associate Director", dept: "d4", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29804", code: "29804", name: "Aryan Jaiswal", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "cf1202", empType: "Full-time", kras: [] },
      { id: "ug30426", code: "30426", name: "Avantika Satya Vohra", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29340", empType: "Full-time", kras: [] },
      { id: "ug29443", code: "29443", name: "Darsheen Chona", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug28296", empType: "Full-time", kras: [] },
      { id: "ug30617", code: "30617", name: "Deeksha Singh", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29211", empType: "Full-time", kras: [] },
      { id: "ug30832", code: "30832", name: "Dhriti Sood", title: "Senior Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug28236", code: "28236", name: "Drishti Kanojia", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27463", empType: "Full-time", kras: [] },
      { id: "ug30074", code: "30074", name: "Edha Bhagi", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug28150", empType: "Full-time", kras: [] },
      { id: "ug29350", code: "29350", name: "Fouzia Kaukab", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28109", empType: "Full-time", kras: [] },
      { id: "ug28186", code: "28186", name: "Ganesh Naidu", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Curriculum", managerId: "ug30140", empType: "Full-time", kras: [] },
      { id: "ug30425", code: "30425", name: "Ganginee Das", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug28562", code: "28562", name: "Gauri Vishal", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27463", empType: "Full-time", kras: [] },
      { id: "ug29479", code: "29479", name: "Harneesh Makkar", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "cf1202", empType: "Full-time", kras: [] },
      { id: "ug28274", code: "28274", name: "Ila Choubey", title: "Program Manager", dept: "d4", bu: "PG Programme", subDept: "University Partnerships", managerId: "ug27384", empType: "Full-time", kras: [] },
      { id: "ug30785", code: "30785", name: "Jasreen Bhatia", title: "Manager", dept: "d4", bu: "UG Programme", subDept: "Curriculum", managerId: "ug30140", empType: "Full-time", kras: [] },
      { id: "ug30749", code: "30749", name: "Jigyasa Rawal", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug28236", empType: "Full-time", kras: [] },
      { id: "ug28296", code: "28296", name: "Juhi Dugar", title: "Associate Director", dept: "d4", bu: "UG Programme", subDept: "Curriculum", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30664", code: "30664", name: "Kirti Rajput", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28236", empType: "Full-time", kras: [] },
      { id: "ug30714", code: "30714", name: "Kriti Sharma", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug27497", empType: "Full-time", kras: [] },
      { id: "ug30222", code: "30222", name: "Manya Chaudhary", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug28749", empType: "Full-time", kras: [] },
      { id: "ug28214", code: "28214", name: "Megashree G V", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27463", empType: "Full-time", kras: [] },
      { id: "ug30738", code: "30738", name: "Mehak Gupta", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug27497", empType: "Full-time", kras: [] },
      { id: "ug30491", code: "30491", name: "Mehak Verma", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29340", empType: "Full-time", kras: [] },
      { id: "ug27497", code: "27497", name: "Muskan Sehra", title: "General Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug30494", code: "30494", name: "Nuha Akbarsah", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29211", empType: "Full-time", kras: [] },
      { id: "ug28806", code: "28806", name: "Pallavi Negi", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27713", empType: "Full-time", kras: [] },
      { id: "ug28150", code: "28150", name: "Prateek Yadav", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Master Relations", managerId: "ug30140", empType: "Full-time", kras: [] },
      { id: "ug29236", code: "29236", name: "Pratishtha Mishra", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug29340", code: "29340", name: "Priyal Asawa", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28214", empType: "Full-time", kras: [] },
      { id: "ug29668", code: "29668", name: "Priyanka Verma", title: "Admission Counsellor - II", dept: "d4", bu: "PG Programme", subDept: "Academics", managerId: "ug27384", empType: "Full-time", kras: [] },
      { id: "ug28177", code: "28177", name: "Ruhani Kalra", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Clubs", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug30205", code: "30205", name: "Sailendra Mallick", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "cf1202", empType: "Full-time", kras: [] },
      { id: "ug29211", code: "29211", name: "Saloni .", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28236", empType: "Full-time", kras: [] },
      { id: "ug30492", code: "30492", name: "Saumya Verma", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug29435", code: "29435", name: "Seerat Suri", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28109", empType: "Full-time", kras: [] },
      { id: "ug27713", code: "27713", name: "Shweta Das", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27463", empType: "Full-time", kras: [] },
      { id: "ug30424", code: "30424", name: "Snigdha Tewari", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28109", empType: "Full-time", kras: [] },
      { id: "ug28749", code: "28749", name: "Sonali Jakhar", title: "Senior Executive", dept: "d4", bu: "UG Programme", subDept: "Curriculum", managerId: "ug30140", empType: "Full-time", kras: [] },
      { id: "ug30508", code: "30508", name: "Suranjita Ray Barman", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29340", empType: "Full-time", kras: [] },
      { id: "ug29548", code: "29548", name: "Tanmaya Dhingra", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug30831", code: "30831", name: "Tejas Tuli", title: "Senior Manager - I", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug30140", empType: "Full-time", kras: [] },
      { id: "ug28036", code: "28036", name: "Toral Jain", title: "Program Manager", dept: "d4", bu: "PG Programme", subDept: "University Partnerships", managerId: "ug27384", empType: "Full-time", kras: [] },
      { id: "ug30428", code: "30428", name: "Uzma Siddiqui", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug29211", empType: "Full-time", kras: [] },
      { id: "ug28109", code: "28109", name: "Vaishali Somani", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug28214", empType: "Full-time", kras: [] },
      { id: "ug29880", code: "29880", name: "Vartika .", title: "Senior Executive", dept: "d4", bu: "UG Programme", subDept: "Academics & Curriculum", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug30075", code: "30075", name: "Vedika Anand", title: "Associate Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug28186", empType: "Full-time", kras: [] },
      { id: "ug30737", code: "30737", name: "Yashika .", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academics", managerId: "ug28562", empType: "Full-time", kras: [] },
      { id: "ug27840", code: "27840", name: "Abhay Deep Middha", title: "General Manager", dept: "d5", bu: "UG Programme", subDept: "Outclass", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug28557", code: "28557", name: "Aryan Kohli", title: "Program Manager", dept: "d5", bu: "UG Programme", subDept: "Outclass", managerId: "ug27840", empType: "Full-time", kras: [] },
      { id: "ug29967", code: "29967", name: "Palak Vatwani", title: "General Manager", dept: "d5", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug29512", code: "29512", name: "Ridhima Joshi", title: "Senior Executive", dept: "d5", bu: "UG Programme", subDept: "Academics", managerId: "ug29967", empType: "Full-time", kras: [] },
      { id: "ug30288", code: "30288", name: "Sanskriti Gupta", title: "Associate Program Manager", dept: "d5", bu: "UG Programme", subDept: "Outclass", managerId: "ug29967", empType: "Full-time", kras: [] },
      { id: "ug30381", code: "30381", name: "Tisha Keswani", title: "Program Manager", dept: "d5", bu: "UG Programme", subDept: "Outclass", managerId: "ug29967", empType: "Full-time", kras: [] },
      { id: "ug27926", code: "27926", name: "Akshita Nautiyal", title: "Associate Program Manager", dept: "d7", bu: "UG Programme", subDept: "University Partnerships", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug30521", code: "30521", name: "Avinash Dharvaiya", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug28201", code: "28201", name: "Deeksha Sehgal", title: "Program Manager", dept: "d7", bu: "UG Programme", subDept: "Parent Engagement", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug30235", code: "30235", name: "Gourav Kumar", title: "Executive", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug30065", code: "30065", name: "Kavita Pal", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28893", empType: "Full-time", kras: [] },
      { id: "ug30618", code: "30618", name: "Neha Wadhwani", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug29603", code: "29603", name: "Neyoshi Sachdev", title: "Associate", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28177", empType: "Full-time", kras: [] },
      { id: "ug28695", code: "28695", name: "Piyush Bisht", title: "Associate Program Manager", dept: "d7", bu: "UG Programme", subDept: "Hostel", managerId: "ug28893", empType: "Full-time", kras: [] },
      { id: "ug26314", code: "26314", name: "Risha Komal", title: "General Manager", dept: "d7", bu: "UG Programme", subDept: "Student Operations", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug28893", code: "28893", name: "Rishab Arora", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Hostel", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug29605", code: "29605", name: "Roselin Naik", title: "Executive", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28201", empType: "Full-time", kras: [] },
      { id: "ug30031", code: "30031", name: "Roshmi Begum", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28893", empType: "Full-time", kras: [] },
      { id: "ug28503", code: "28503", name: "Sheba Solomon", title: "Senior Executive", dept: "d7", bu: "UG Programme", subDept: "Counseling and Wellness", managerId: "ug26314", empType: "Full-time", kras: [] },
      { id: "ug29602", code: "29602", name: "Urvashi Gautam", title: "Senior Executive", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug28201", empType: "Full-time", kras: [] },
      { id: "ug28245", code: "28245", name: "Daksh Gupta", title: "Senior Manager - II", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug29251", code: "29251", name: "Harsh Soni", title: "Associate Program Manager", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28930", code: "28930", name: "Kavesh Nagpal", title: "Senior Manager - II", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28035", code: "28035", name: "Nihal Joshi", title: "Program Manager", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28092", code: "28092", name: "Rahul Pradhan", title: "Senior Manager - I", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28134", code: "28134", name: "Rishabh Puri", title: "Senior Manager - I", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28542", code: "28542", name: "Sachin .", title: "Associate Director", dept: "d9", bu: "UG Programme", subDept: "Partnerships", managerId: "ug30256", empType: "Full-time", kras: [] },
      { id: "ug28297", code: "28297", name: "Sakshita Chhabra", title: "Admission Counsellor - II", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug28704", code: "28704", name: "Shivam Nagpal", title: "Senior Manager - I", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ug27409", code: "27409", name: "Simarpreet Singh Kapoor", title: "Senior Manager - I", dept: "d9", bu: "UG Programme", subDept: "Outreach", managerId: "ug28547", empType: "Full-time", kras: [] },
      { id: "ug29360", code: "29360", name: "Yash Jha", title: "Admission Counsellor - I", dept: "d9", bu: "UG Programme", subDept: "B2B Partnerships", managerId: "ug28542", empType: "Full-time", kras: [] },
      { id: "ugt1", code: "TBH", name: "Open role", title: "Associate", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt2", code: "TBH", name: "Open role", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt3", code: "TBH", name: "Open role", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt4", code: "TBH", name: "Open role", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt5", code: "TBH", name: "Open role", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt6", code: "TBH", name: "Open role", title: "Program Manager", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt7", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt8", code: "TBH", name: "Open role", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt9", code: "TBH", name: "Open role", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt10", code: "TBH", name: "Open role", title: "Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt11", code: "TBH", name: "Open role", title: "Senior Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt12", code: "TBH", name: "Open role", title: "Senior Executive", dept: "d4", bu: "UG Programme", subDept: "Academic Operations", managerId: "ug27497", empType: "Open role", kras: [] },
      { id: "ugt13", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt14", code: "TBH", name: "Open role", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt15", code: "TBH", name: "Open role", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt16", code: "TBH", name: "Open role", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt17", code: "TBH", name: "Open role", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt18", code: "TBH", name: "Open role", title: "Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt19", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt20", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt21", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt22", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt23", code: "TBH", name: "Open role", title: "Program Manager", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt24", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt25", code: "TBH", name: "Open role", title: "Deputy Director", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug27765", empType: "Open role", kras: [] },
      { id: "ugt26", code: "TBH", name: "Open role", title: "Admission Counselor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt27", code: "TBH", name: "Open role", title: "Admission Counselor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt28", code: "TBH", name: "Open role", title: "Admission Counselor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt29", code: "TBH", name: "Open role", title: "Admission Counselor - I", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt30", code: "TBH", name: "Open role", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt31", code: "TBH", name: "Open role", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt32", code: "TBH", name: "Open role", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt33", code: "TBH", name: "Open role", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt34", code: "TBH", name: "Open role", title: "Admission Counsellor - II", dept: "d3", bu: "UG Programme", subDept: "Admissions", managerId: "ug28223", empType: "Open role", kras: [] },
      { id: "ugt35", code: "TBH", name: "Open role", title: "General Manager", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Open role", kras: [] },
      { id: "ugt36", code: "TBH", name: "Open role", title: "Deputy Director", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Open role", kras: [] },
      { id: "ugt37", code: "TBH", name: "Open role", title: "Deputy Director", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Open role", kras: [] },
      { id: "ugt38", code: "TBH", name: "Open role", title: "Associate Director", dept: "d1", bu: "UG Programme", subDept: "Director's Office", managerId: "ug30256", empType: "Open role", kras: [] },
      { id: "ugt39", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d9", bu: "UG Programme", subDept: "Partnerships", managerId: "ug28542", empType: "Open role", kras: [] },
      { id: "ugt40", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Open role", kras: [] },
      { id: "ugt41", code: "TBH", name: "Open role", title: "Senior Manager - I", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Open role", kras: [] },
      { id: "ugt42", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Open role", kras: [] },
      { id: "ugt43", code: "TBH", name: "Open role", title: "Senior Manager - II", dept: "d2", bu: "UG Programme", subDept: "Career Outreach", managerId: "ug29128", empType: "Open role", kras: [] },
      { id: "ugt44", code: "TBH", name: "Open role", title: "Manager", dept: "d7", bu: "UG Programme", subDept: "Student Experience", managerId: "ug26314", empType: "Open role", kras: [] },
      { id: "ex26132", code: "26132", name: "Vikas Singha", title: "Associate Director", dept: "d3", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex27477", code: "27477", name: "Akshay Dhall", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29438", code: "29438", name: "Vishwanath Nair", title: "Associate Director", dept: "d3", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex27510", code: "27510", name: "Abhishek Ghosh", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex26132", empType: "Full-time", kras: [] },
      { id: "ex29545", code: "29545", name: "Ratan Anmol Sethi", title: "Associate Director", dept: "d3", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex28144", code: "28144", name: "Rohit Walia", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex28823", code: "28823", name: "Maria Joseph Sampath Kumar", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex28858", code: "28858", name: "Prapat Saxena", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex26132", empType: "Full-time", kras: [] },
      { id: "ex28982", code: "28982", name: "Kashyap Kapoor", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29100", code: "29100", name: "Akash Tripathi", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex29588", code: "29588", name: "Yajan Chopra", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex29743", code: "29743", name: "Junaid Shaikh", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex29777", code: "29777", name: "Aman Kumar", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex29829", code: "29829", name: "Riddhi Mukherjee", title: "Deputy Director", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex30246", code: "30246", name: "Robert Johnson", title: "General Manager", dept: "d3", bu: "Executive Education", subDept: "Conversion", managerId: "ex26132", empType: "Full-time", kras: [] },
      { id: "ex26206", code: "26206", name: "Srishti Kush", title: "Senior Executive", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex26304", code: "26304", name: "Nirbhay Daniel Singh", title: "Manager", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex28004", code: "28004", name: "Harjeet Singh", title: "Associate", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex28145", code: "28145", name: "Shivam Shekhar", title: "Associate Program Manager", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex28313", code: "28313", name: "Himanshu Kumar Dubey", title: "Senior Executive", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex28667", code: "28667", name: "Gurpreet Kaur", title: "Program Manager", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex29174", code: "29174", name: "Neeraj Singh", title: "Executive", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex29766", code: "29766", name: "Arun Arya", title: "Senior Manager - I", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex26448", empType: "Full-time", kras: [] },
      { id: "ex30055", code: "30055", name: "Souvik Deb", title: "Executive", dept: "d3", bu: "Executive Education", subDept: "Sales Ops", managerId: "ex29438", empType: "Full-time", kras: [] },
      { id: "ex26270", code: "26270", name: "Aarti Sharma", title: "Associate Professor - II", dept: "d4", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex26309", code: "26309", name: "Rinku Mahindru", title: "Associate Professor - II", dept: "d4", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex26327", code: "26327", name: "Puneet Satija", title: "Senior Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex26328", code: "26328", name: "Garvit Gupta", title: "Senior Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex26447", code: "26447", name: "Nikhil Mittal", title: "Managing Director", dept: "d1", bu: "Executive Education", subDept: "Leadership", managerId: "vex", empType: "Full-time", kras: [] },
      { id: "ex26448", code: "26448", name: "Karan Singh", title: "Deputy Director", dept: "d1", bu: "Executive Education", subDept: "Director's Office", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex27371", code: "27371", name: "Shruti Gulati", title: "Placement Manager - II", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex27385", code: "27385", name: "Shubika Sharma", title: "Senior Manager - I", dept: "c4", bu: "Executive Education", subDept: "Marketing", managerId: "ex28807", empType: "Full-time", kras: [] },
      { id: "ex27394", code: "27394", name: "Aishwarya Lakshman", title: "Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex27478", code: "27478", name: "Anshu Kapoor", title: "Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex27483", code: "27483", name: "Anish Tripathi", title: "Program Manager", dept: "d2", bu: "Executive Education", subDept: "Career Ops", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex27628", code: "27628", name: "Parimal Mandal", title: "Senior Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex27762", code: "27762", name: "Priyam Bansal", title: "Deputy Director", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex27775", code: "27775", name: "Abhishek Gaur", title: "Senior Program Manager - I", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27762", empType: "Full-time", kras: [] },
      { id: "ex27986", code: "27986", name: "Nishi Rai", title: "Placement Manager - II", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28032", code: "28032", name: "Ashmi V Tom", title: "Senior Executive", dept: "d2", bu: "Executive Education", subDept: "Career Prep", managerId: "ex28170", empType: "Full-time", kras: [] },
      { id: "ex28082", code: "28082", name: "Swati Punia", title: "Manager", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28096", code: "28096", name: "Ritika Raviprakash Prasad", title: "Manager", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28106", code: "28106", name: "Reshab Bhargav", title: "Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27628", empType: "Full-time", kras: [] },
      { id: "ex28120", code: "28120", name: "Anika Atwal", title: "Deputy Director", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex28121", code: "28121", name: "Rishabh Sharma", title: "Associate Program Manager", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26309", empType: "Full-time", kras: [] },
      { id: "ex30452", code: "30452", name: "Ishank Mehta", title: "Associate Director", dept: "d1", bu: "Executive Education", subDept: "Director's Office", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex28163", code: "28163", name: "Simran Hora", title: "Manager", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28170", code: "28170", name: "Priya Choudhary", title: "Senior Manager - I", dept: "d2", bu: "Executive Education", subDept: "Career Prep", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28294", code: "28294", name: "Aryanshi Dubey", title: "Placement Manager - I", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28329", code: "28329", name: "Rishabh Gupta", title: "Senior Manager - I", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex28120", empType: "Full-time", kras: [] },
      { id: "ex28471", code: "28471", name: "Kumkum .", title: "Associate Program Manager", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26309", empType: "Full-time", kras: [] },
      { id: "ex28464", code: "28464", name: "Riya Kumari Karn", title: "Senior Executive", dept: "d2", bu: "Executive Education", subDept: "Career Ops", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex28779", code: "28779", name: "Ishika Arora", title: "Associate Program Manager", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex28789", code: "28789", name: "Manya Kumari", title: "Associate Program Manager", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26309", empType: "Full-time", kras: [] },
      { id: "ex28853", code: "28853", name: "Ashutosh Pandey", title: "Associate Program Manager", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex28894", code: "28894", name: "Shaily Singh", title: "Manager", dept: "d2", bu: "Executive Education", subDept: "Career Prep", managerId: "ex28170", empType: "Full-time", kras: [] },
      { id: "ex28906", code: "28906", name: "Swapnil Dagur", title: "Senior Manager - I", dept: "c4", bu: "Executive Education", subDept: "Marketing", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex28945", code: "28945", name: "Yashashvi Sharma", title: "Manager", dept: "d2", bu: "Executive Education", subDept: "Career Prep", managerId: "ex28170", empType: "Full-time", kras: [] },
      { id: "ex28983", code: "28983", name: "Umika Mongia", title: "Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex28120", empType: "Full-time", kras: [] },
      { id: "ex28807", code: "28807", name: "Tara Anand Kumar", title: "Associate Director", dept: "c4", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29008", code: "29008", name: "Sarang Parashar", title: "Associate Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex29288", empType: "Full-time", kras: [] },
      { id: "ex29026", code: "29026", name: "Aakriti Jaiswal", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex28120", empType: "Full-time", kras: [] },
      { id: "ex29014", code: "29014", name: "Shreyashi Bairagi", title: "Executive", dept: "c4", bu: "Executive Education", subDept: "Design", managerId: "cf27683", empType: "Full-time", kras: [] },
      { id: "ex29055", code: "29055", name: "Divya Bohra", title: "Executive", dept: "c4", bu: "Executive Education", subDept: "Design", managerId: "cf27683", empType: "Full-time", kras: [] },
      { id: "ex29057", code: "29057", name: "Niharika.", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27775", empType: "Full-time", kras: [] },
      { id: "ex29072", code: "29072", name: "Manish Panchal", title: "Senior Executive", dept: "c4", bu: "Executive Education", subDept: "Design", managerId: "cf27683", empType: "Full-time", kras: [] },
      { id: "ex29107", code: "29107", name: "Aditya Raj", title: "Executive", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex29130", code: "29130", name: "Riya Sehgal", title: "Senior Executive", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "cf28996", empType: "Full-time", kras: [] },
      { id: "ex29227", code: "29227", name: "Muskaan Khanna", title: "General Manager", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29242", code: "29242", name: "Ashwat Jain", title: "Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex28120", empType: "Full-time", kras: [] },
      { id: "ex29288", code: "29288", name: "Noopur Maheshwari", title: "Deputy Director", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29393", code: "29393", name: "Priyanshi Verma", title: "Manager", dept: "c4", bu: "Executive Education", subDept: "Marketing", managerId: "ex28807", empType: "Full-time", kras: [] },
      { id: "ex29369", code: "29369", name: "Himanshu Kumar", title: "Associate", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex29442", code: "29442", name: "Shashank Kushwaha", title: "Associate", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex29476", code: "29476", name: "Diksha Goklani", title: "Manager", dept: "c4", bu: "Executive Education", subDept: "Marketing", managerId: "ex28807", empType: "Full-time", kras: [] },
      { id: "ex29532", code: "29532", name: "Tista Talwar", title: "Manager", dept: "d9", bu: "Executive Education", subDept: "B2B Enterprise", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex29519", code: "29519", name: "Sunil Sharma", title: "Associate", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex27423", code: "27423", name: "Gaurav Kumar Sharma", title: "Associate Director", dept: "d2", bu: "Executive Education", subDept: "Leadership", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29575", code: "29575", name: "Vidhi", title: "Executive", dept: "d2", bu: "Executive Education", subDept: "Career Ops", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex29589", code: "29589", name: "Anushka Biswas", title: "Associate", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26270", empType: "Full-time", kras: [] },
      { id: "ex29710", code: "29710", name: "Divya Dagar", title: "Program Associate", dept: "d4", bu: "Executive Education", subDept: "Academics Ops", managerId: "ex26309", empType: "Full-time", kras: [] },
      { id: "ex29715", code: "29715", name: "Gursimran Kaur", title: "Senior Manager - I", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27762", empType: "Full-time", kras: [] },
      { id: "ex29722", code: "29722", name: "Rishabh Singla", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex29288", empType: "Full-time", kras: [] },
      { id: "ex29745", code: "29745", name: "Silvy Kalra", title: "General Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex26447", empType: "Full-time", kras: [] },
      { id: "ex29848", code: "29848", name: "Suman Dubey", title: "Program Associate", dept: "d2", bu: "Executive Education", subDept: "Career Ops", managerId: "ex27423", empType: "Full-time", kras: [] },
      { id: "ex29907", code: "29907", name: "Yashvi Modi", title: "Associate", dept: "d2", bu: "Executive Education", subDept: "Outreach", managerId: "ex27628", empType: "Full-time", kras: [] },
      { id: "ex30010", code: "30010", name: "Anamika Mani", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27762", empType: "Full-time", kras: [] },
      { id: "ex30125", code: "30125", name: "Aparajita Tiwari", title: "Senior Manager - I", dept: "c4", bu: "Executive Education", subDept: "Marketing", managerId: "ex28807", empType: "Full-time", kras: [] },
      { id: "ex30248", code: "30248", name: "Gagandeep Singh", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27762", empType: "Full-time", kras: [] },
      { id: "ex30600", code: "30600", name: "Ashish", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex27762", empType: "Full-time", kras: [] },
      { id: "ex30590", code: "30590", name: "Bhanu Valecha", title: "Manager", dept: "c4", bu: "Executive Education", subDept: "Performance Marketing", managerId: "cf28315", empType: "Full-time", kras: [] },
      { id: "ex30680", code: "30680", name: "Janpreet Singh Chawla", title: "Senior Manager - I", dept: "c4", bu: "Executive Education", subDept: "Performance Marketing", managerId: "cf28315", empType: "Full-time", kras: [] },
      { id: "ex30795", code: "30795", name: "Subhadeep Mitra", title: "Program Manager", dept: "d7", bu: "Executive Education", subDept: "Delivery", managerId: "ex28120", empType: "Full-time", kras: [] }
    ]
  };
