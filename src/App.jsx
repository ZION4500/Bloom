// import Home from "./Pages/Home"
// import Posts from "./Pages/Post"
// import Cont from "./Pages/contact"
// import About from "./Pages/about"
// import Error from "./Pages/404"
// import Login from "./components/Login"
// import Register from "./components/Register"
// import Forgot from "./components/Forgot"
// import UpdatePassword from "./components/UpdatePassword"
// import ResetPassword from "./components/ResetPassword"
// import Income from "./components/income"
// import Incomes from "./components/incomes"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route>
//             <Route path="/" element={<Home />} />
//             <Route path="/posts" element={<Posts />} />
//             <Route path="/contact" element={<Cont />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot" element={<Forgot />} />
//             <Route path="/updatepassword" element={<UpdatePassword />} />
//             <Route path="/resetpassword/:token" element={<ResetPassword />} />
//             <Route path="/addincome" element={<Income />} />
//             <Route path="/incomes" element={<Incomes />} />
//             <Route path="*" element={<Error />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { useState } from "react";

const studyData = [
  {
    day: 1,
    section: "Section A – Evolution of Computing",
    topic: "History of Computing & Pre-Computing Age",
    notes: [
      "**Pre-computing tools:** Abacus (oldest), Slide Rule, Napier's Bones, Pascal Calculator, Leibnitz Multiplier, Jacquard Loom",
      "**Charles Babbage** = Father of Computer; invented Difference Engine & Analytical Engine",
      "**Hollerith Census Machine** → punched card data; **Burroughs Machine** for accounting",
      "**20th century computers:** ENIAC, EDVAC, UNIVAC I, Desktop PCs",
      "**ENIAC** = first general-purpose electronic computer (1945), used vacuum tubes",
      "**Abacus origin** = China/Middle East; still used for arithmetic"
    ],
    jamb: [
      { q: "Who is known as the Father of Computer?", a: "Charles Babbage" },
      { q: "The first computing device used by man was the ___", a: "Abacus" },
      { q: "ENIAC stands for?", a: "Electronic Numerical Integrator And Computer" },
      { q: "Babbage's Analytical Engine contained which modern computer concept?", a: "Input, Processing, Output, Storage (all 4 units)" }
    ],
    waec: [
      { q: "State TWO pre-computing devices and their uses.", a: "Abacus – arithmetic calculations; Slide Rule – multiplication/division" },
      { q: "What is the significance of the Hollerith Census Machine?", a: "Used punched cards to process US Census data; forerunner of data processing" }
    ],
    tip: "JAMB & WAEC love asking about Babbage, ENIAC tag, and Abacus origin. Memorize a timeline!"
  },
  {
    day: 2,
    section: "Section A – Evolution of Computing",
    topic: "Classification of Computing Devices",
    notes: [
      "**4 Generations:** 1st=Vacuum tubes → 2nd=Transistors → 3rd=ICs (Integrated Circuits) → 4th=VLSI/ULSI → 5th=AI/Natural Language",
      "**By Size:** Micro, Mini, Mainframe, Supercomputer",
      "**By Type:** Digital, Analog, Hybrid",
      "**By Purpose:** Special purpose vs General purpose",
      "**Devices:** PCs, Laptops, Tablets, Servers, Workstations, Wearables",
      "**Digital** = discrete data (0s & 1s); **Analog** = continuous data; **Hybrid** = both"
    ],
    jamb: [
      { q: "The 2nd generation computers used ___", a: "Transistors" },
      { q: "Which computer generation introduced Integrated Circuits?", a: "3rd generation" },
      { q: "A computer that processes both digital and analog data is called?", a: "Hybrid computer" },
      { q: "The largest and most powerful computer is called?", a: "Supercomputer" }
    ],
    waec: [
      { q: "List the 4 generations of computers and their technologies.", a: "1st-Vacuum tubes, 2nd-Transistors, 3rd-ICs, 4th-VLSI/Microprocessors" },
      { q: "Differentiate between analog and digital computers.", a: "Analog processes continuous data; Digital processes discrete data (0s & 1s)" }
    ],
    tip: "WAEC often asks the characteristic feature of each generation. Know the technology used per generation."
  },
  {
    day: 3,
    section: "Section B – Fundamentals of Computing (Part 1)",
    topic: "Computer System Components – Hardware & Software",
    notes: [
      "**Two constituents:** Hardware (physical) & Software (programs)",
      "**Hardware characteristics:** Electronic, Accurate, Reliable, Consistent, Large Storage",
      "**Input devices:** Keyboard, Mouse, Scanner, Joystick, Light pen, Voice, Digital camera",
      "**Output devices:** Monitor, Printer (Inkjet/Laser/Line), Speaker, Plotter",
      "**Keyboard keys:** Function, Numeric, Alphabetic, Cursor keys",
      "**Plotter** = used for architectural/engineering drawings; **Printer** = text/images"
    ],
    jamb: [
      { q: "Which of these is an input device? A) Monitor B) Printer C) Scanner D) Speaker", a: "C) Scanner" },
      { q: "A plotter is used for ___", a: "Drawing graphs, charts, architectural designs" },
      { q: "How many function keys are on a standard keyboard?", a: "12 (F1–F12)" },
      { q: "Which device converts handwriting to digital text?", a: "Scanner / OCR" }
    ],
    waec: [
      { q: "List at least 5 examples of input devices and their functions.", a: "Keyboard-typing, Mouse-pointing, Scanner-scanning images, Joystick-gaming, Microphone-voice input" },
      { q: "What is the difference between hardware and software?", a: "Hardware = physical components; Software = programs/instructions" }
    ],
    tip: "JAMB tests input vs output device identification. Know at least 5 examples each and their functions."
  },
  {
    day: 4,
    section: "Section B – Fundamentals of Computing (Part 2)",
    topic: "CPU, Memory Units & Storage",
    notes: [
      "**CPU parts:** ALU (arithmetic/logic), CU (Control Unit), Registers",
      "**Registers:** MDR, MAR, MBR, AC (Accumulator), PC (Program Counter), CIR",
      "**RAM** = volatile (loses data when off); **ROM** = non-volatile (permanent)",
      "**RAM types:** DRAM, SRAM; **ROM types:** PROM, EPROM, EEPROM",
      "**Secondary storage:** HDD, CD, DVD, USB, Magnetic tape, Compact disk",
      "**Storage units:** bits → nibbles → bytes → KB → MB → GB → TB → PB"
    ],
    jamb: [
      { q: "The brain of the computer is the ___", a: "CPU (Central Processing Unit)" },
      { q: "RAM is described as volatile because ___", a: "It loses its contents when power is switched off" },
      { q: "Which memory holds the BIOS?", a: "ROM" },
      { q: "1 Kilobyte = ___ bytes", a: "1024 bytes" }
    ],
    waec: [
      { q: "Distinguish between RAM and ROM.", a: "RAM = temporary/volatile, read-write; ROM = permanent/non-volatile, read-only" },
      { q: "State the functions of the ALU and Control Unit.", a: "ALU = performs arithmetic & logical operations; CU = directs/coordinates all computer operations" }
    ],
    tip: "WAEC/JAMB asks RAM vs ROM differences and storage unit conversions frequently."
  },
  {
    day: 5,
    section: "Section B – Fundamentals of Computing (Part 3)",
    topic: "Logic Circuits & Gates",
    notes: [
      "**Basic gates:** AND, OR, NOT (inverter), NAND, NOR, XOR, XNOR",
      "**AND gate:** output=1 only if ALL inputs=1",
      "**OR gate:** output=1 if ANY input=1",
      "**NOT gate:** inverts input (0→1, 1→0)",
      "**NAND = NOT+AND** (universal gate); **NOR = NOT+OR** (universal gate)",
      "**XOR:** output=1 if inputs are DIFFERENT",
      "**XNOR:** output=1 if inputs are SAME",
      "NAND & NOR are **universal gates** — can make any other gate"
    ],
    jamb: [
      { q: "Which gates are called universal gates?", a: "NAND and NOR gates" },
      { q: "An AND gate with inputs A=1, B=0 gives output ___", a: "0" },
      { q: "A NOT gate with input 1 gives ___", a: "0" },
      { q: "XOR gate gives output 1 when ___", a: "Inputs are different" }
    ],
    waec: [
      { q: "Draw the truth table for AND, OR, and NOT gates.", a: "AND: 0,0=0; 0,1=0; 1,0=0; 1,1=1 | OR: 0,0=0; 0,1=1; 1,0=1; 1,1=1 | NOT: 0=1; 1=0" },
      { q: "Why are NAND and NOR called universal gates?", a: "Because any other logic gate can be constructed using only NAND or only NOR gates" }
    ],
    tip: "Draw truth tables from scratch in exams. JAMB loves NAND and NOR."
  },
  {
    day: 6,
    section: "Section B – Fundamentals of Computing (Part 4)",
    topic: "Data & Information + Data Representation",
    notes: [
      "**Data** = raw unprocessed facts; **Information** = processed/meaningful data",
      "**Number bases:** Binary(2), Octal(8), Decimal(10), Hexadecimal(16)",
      "**Binary** uses 0 & 1 only; **Hex** uses 0-9 and A-F",
      "**Digitization:** Manual, Heads-up, Interactive tracing, Automatic",
      "**Data types:** Image, Audio, Video, Motion, Text, Multimedia",
      "**Conversion tip:** Binary 1111 = Decimal 15 = Hex F"
    ],
    jamb: [
      { q: "Convert binary 1010 to decimal.", a: "10" },
      { q: "What is the hexadecimal equivalent of decimal 255?", a: "FF" },
      { q: "The base of the hexadecimal number system is ___", a: "16" },
      { q: "Data becomes information after ___", a: "Processing" }
    ],
    waec: [
      { q: "Convert 110101 (binary) to decimal.", a: "53" },
      { q: "State the difference between data and information with examples.", a: "Data = raw facts e.g. '25'; Information = processed e.g. 'Temperature is 25°C'" }
    ],
    tip: "Practice binary↔decimal↔hex conversions. WAEC often gives conversion questions worth 5+ marks."
  },
  {
    day: 7,
    section: "Section C – Computer Application Packages (Part 1)",
    topic: "System Software & Application Software",
    notes: [
      "**System software:** OS, Utility Software, Middleware, Device Drivers, Translators",
      "**OS functions:** manages resources, provide UI (CLI and GUI)",
      "**OS examples:** MS Windows, LINUX, UNIX, Android, Blackberry, iOS",
      "**Utility software:** Editors, Anti-Virus, etc.",
      "**Translators:** Interpreter, Assembler, Compiler",
      "**Compiler** = translates whole program at once; **Interpreter** = line-by-line"
    ],
    jamb: [
      { q: "Which of these is system software? A) MS Word B) Windows OS C) Photoshop D) VLC", a: "B) Windows OS" },
      { q: "A program that translates high-level language line by line is a ___", a: "Interpreter" },
      { q: "Which OS is open-source?", a: "Linux" },
      { q: "Device drivers are classified as ___", a: "System software / Utility software" }
    ],
    waec: [
      { q: "Distinguish between system software and application software with examples.", a: "System software = manages hardware e.g. Windows; Application = solves user tasks e.g. MS Word" },
      { q: "Differentiate between a compiler and an interpreter.", a: "Compiler translates entire program at once; Interpreter translates line by line" }
    ],
    tip: "JAMB distinguishes system vs application software. Know OS examples for phones and computers separately."
  },
  {
    day: 8,
    section: "Section C – Computer Application Packages (Part 2)",
    topic: "Word Processing & Spreadsheet Packages",
    notes: [
      "**Word processors:** MS Word, WordStar, WordPerfect, Open Office Write",
      "**MS Word operations:** create, edit, save, retrieve, print, copy, move, format, mail merge",
      "**Spreadsheet examples:** MS Excel, VisiCalc, SuperCalc, SPSS, Calc",
      "**Excel uses:** worksheets, workbooks, call ranges, formulas, functions, charts",
      "**Spreadsheet uses:** Accounting, Engineering, Statistics, Calculation, What-if analysis",
      "**Excel functions:** SUM, AVERAGE, IF, COUNT, MAX, MIN"
    ],
    jamb: [
      { q: "The extension of MS Word files is ___", a: ".doc or .docx" },
      { q: "In Excel, a formula always starts with ___", a: "= (equal sign)" },
      { q: "Which function adds a range of cells in Excel?", a: "SUM" },
      { q: "Mail merge is a feature of ___", a: "Word processing software" }
    ],
    waec: [
      { q: "State FOUR operations that can be performed in MS Word.", a: "Create, Edit, Format, Save, Print, Mail Merge (any 4)" },
      { q: "What is the difference between a workbook and a worksheet in Excel?", a: "Workbook = entire Excel file; Worksheet = single sheet within workbook" }
    ],
    tip: "Know MS Word and Excel menus/ribbons. WAEC practicals often test formulas (SUM, AVERAGE, IF)."
  },
  {
    day: 9,
    section: "Section C – Computer Application Packages (Part 3)",
    topic: "Database & Graphics Packages",
    notes: [
      "**Database examples:** dBase, FoxBase, MS Access, Oracle",
      "**DB terms:** File, Record, Field, Key, Form, Table",
      "**DB organisation:** Hierarchical, Network, Relational",
      "**MS Access:** create DB, define fields (numeric/character/date/text), enter & save data",
      "**Graphics:** CorelDraw, Paint, Harvard Graphics, Autocad, Photoshop",
      "**Relational DB** = most common modern type — uses tables linked by keys"
    ],
    jamb: [
      { q: "The most common type of database organisation is ___", a: "Relational" },
      { q: "In a database, a row is called a ___", a: "Record" },
      { q: "A column in a database table is called a ___", a: "Field" },
      { q: "MS Access is an example of ___", a: "Database management software (DBMS)" }
    ],
    waec: [
      { q: "State THREE types of database organisation.", a: "Hierarchical, Network, Relational" },
      { q: "Define the terms: record, field, and table in a database.", a: "Table=collection of records; Record=row (one entity); Field=column (one attribute)" }
    ],
    tip: "WAEC asks about database organisation types well. Know Relational DB = most common."
  },
  {
    day: 10,
    section: "Section C – Computer Application Packages (Part 4)",
    topic: "Presentation & Web Design Packages",
    notes: [
      "**Presentation:** MS PowerPoint, Impress, Apple Keynotes, Micromedia Flash",
      "**PowerPoint features:** Animation Painter, Video Editor, Ribbons Toolbars, Transitions",
      "**PowerPoint operations:** create new, insert pictures/text/graphs, save, print, slide show",
      "**Web Design:** HTML, XML, Dreamweaver, Rapidweaver, Google Web Designer",
      "**HTML** = HyperText Markup Language (structure of web pages)",
      "**XML** = eXtensible Markup Language (data storage/transfer)"
    ],
    jamb: [
      { q: "PowerPoint is used for ___", a: "Creating presentations/slide shows" },
      { q: "HTML stands for ___", a: "HyperText Markup Language" },
      { q: "Which software is used for web design? A) MS Word B) Dreamweaver C) Excel D) Access", a: "B) Dreamweaver" },
      { q: "The file extension for PowerPoint is ___", a: ".ppt or .pptx" }
    ],
    waec: [
      { q: "State THREE features of MS PowerPoint.", a: "Slide transitions, Animations, Slide show, Master slides, Speaker notes (any 3)" },
      { q: "What is HTML and what is it used for?", a: "HyperText Markup Language; used to create/structure web pages" }
    ],
    tip: "JAMB tests web design elements and PowerPoint features. Know Dreamweaver is used for social media management."
  },
  {
    day: 11,
    section: "Section D – Managing Computer Files",
    topic: "File Management & Computer Security Measures",
    notes: [
      "**Web design elements:** Navigation, Visual design, Content, Web friendly, Interaction, Branding",
      "**Boot types:** Cold boot (restart from off) vs Warm boot (restart while running)",
      "**Shutdown steps:** Start → Shut down → OK",
      "**Computer maintenance:** clean system, charge batteries, clean drive lens, hardware/software maintenance",
      "**Room Management:** seating, proper placement of peripherals, dust-free, no liquids",
      "**File security methods:** PIN, Biometrics, Passwords, CCTV, labelling storage devices"
    ],
    jamb: [
      { q: "A cold boot means ___", a: "Starting the computer from a completely powered-off state" },
      { q: "Which of these is a file security measure?", a: "Password/PIN/Biometrics" },
      { q: "What does CCTV stand for?", a: "Closed Circuit Television" },
      { q: "The process of starting a computer is called ___", a: "Booting" }
    ],
    waec: [
      { q: "Differentiate between cold boot and warm boot.", a: "Cold boot = start from power-off; Warm boot = restart while power is on (Ctrl+Alt+Del)" },
      { q: "State THREE measures for computer file security.", a: "Passwords, PIN, Biometrics, CCTV, Encryption, File permissions (any 3)" }
    ],
    tip: "WAEC section on maintenance is practical. Know advantages of computer file vs manual file."
  },
  {
    day: 12,
    section: "Section E – Computer Maintenance and Safety",
    topic: "Computer Maintenance, Safety & File Protection",
    notes: [
      "**Electronic security:** PIN, Biometrics, Passwords, Encryption",
      "**Physical security:** CCTV, Physical Security, Fire Extinguisher, Smoke Alarms",
      "**Storage device maintenance:** proper labelling, dust-free environment",
      "**Advantages of software file:** speed, cost, ease of access, low cost of setup",
      "**Disadvantages:** maintenance cost, electricity dependency",
      "**Computer file vs manual file:** computer=faster/accurate; manual=no power needed"
    ],
    jamb: [
      { q: "Which of these is a physical security measure for computers?", a: "CCTV / Fire extinguisher / Lock" },
      { q: "Biometrics uses ___ for identification.", a: "Physical characteristics (fingerprint, retina, face)" },
      { q: "An advantage of electronic file storage over manual is ___", a: "Faster retrieval / Large storage capacity" },
      { q: "Encryption is used to ___", a: "Protect data by converting it to unreadable form" }
    ],
    waec: [
      { q: "Compare computer file storage vs manual file storage (3 points each).", a: "Computer: faster, larger capacity, easy retrieval; Manual: no power needed, tangible, simpler" },
      { q: "State THREE physical safety measures for a computer lab.", a: "Fire extinguisher, CCTV cameras, Smoke alarms, Proper ventilation, No food/drinks" }
    ],
    tip: "Compare computer file vs manual file clearly. Know advantages of each side."
  },
  {
    day: 13,
    section: "Section F – ICT (Part 1)",
    topic: "Communication Systems & Types of ICT",
    notes: [
      "**ICT full meaning:** Information and Communication Technology",
      "**ICT types:** Broadcasting, Telecommunication, Data Network, Information Systems, Satellite Communication",
      "**Telecoms:** PSTN, Land Line, Mobile, CSPT, Satellite, Fixed Wireless Telephone",
      "**Data Networks:** PAN, LAN, MAN, WAN, Intranet, Internet",
      "**Information Systems:** Data Processing System, GPS",
      "**PAN** < **LAN** < **MAN** < **WAN** (order by coverage area)"
    ],
    jamb: [
      { q: "LAN stands for ___", a: "Local Area Network" },
      { q: "Which network covers the largest geographical area?", a: "WAN (Wide Area Network)" },
      { q: "The Internet is an example of ___", a: "WAN / Global network" },
      { q: "PSTN stands for ___", a: "Public Switched Telephone Network" }
    ],
    waec: [
      { q: "State the coverage area of PAN, LAN, MAN, and WAN.", a: "PAN=personal/few meters; LAN=building/campus; MAN=city; WAN=country/worldwide" },
      { q: "List THREE types of ICT systems.", a: "Broadcasting, Telecommunication, Data Networks, Satellite Communication, Information Systems" }
    ],
    tip: "JAMB tests PAN/LAN/MAN/WAN coverage areas. Know each acronym and its coverage range."
  },
  {
    day: 14,
    section: "Section F – ICT (Part 2)",
    topic: "Internet, Browsers, Email & ICT Application Areas",
    notes: [
      "**Internet terms:** Internet, Browser, Chatroom, Cybercafe, Hnp, Html, ISP, Webpage",
      "**Browsers:** Internet Explorer, Opera, Firefox, Clonebird, Ubuntu, Google Chrome",
      "**Browser features:** Title Bar, Menu Bar, Tool Bar, Address Bar, Search Bar, URL",
      "**Internet services:** Email, Discussion Group, IM/Chats, FTP, WWW, Search Engines",
      "**ICT applications:** Teleconferencing, E-Learning, Telemedicine, E-Commerce, E-Government",
      "**URL** = Uniform Resource Locator (web address)"
    ],
    jamb: [
      { q: "ISP stands for ___", a: "Internet Service Provider" },
      { q: "WWW stands for ___", a: "World Wide Web" },
      { q: "Which of these is NOT a web browser? A) Firefox B) Opera C) Oracle D) Chrome", a: "C) Oracle" },
      { q: "FTP stands for ___", a: "File Transfer Protocol" }
    ],
    waec: [
      { q: "List FOUR services available on the Internet.", a: "Email, WWW, FTP, Chatrooms, Social Media, E-commerce (any 4)" },
      { q: "State THREE ICT application areas.", a: "E-Learning, Telemedicine, E-Commerce, E-Government, Teleconferencing (any 3)" }
    ],
    tip: "WAEC and JAMB both test Internet browser features. Know all toolbar names and URL structure."
  },
  {
    day: 15,
    section: "Section F – ICT (Part 3)",
    topic: "Networking, WWW & Cables",
    notes: [
      "**Network types:** PAN, LAN, WAN, MAN, Intranet, Extranet, Internet",
      "**Network topologies:** Star, Bus, Ring, Tree, Mesh (know differences!)",
      "**Network devices:** Hubs, Modems, Switches, Routers, Gateway, Repeaters, API, NIC",
      "**Cables:** Twisted Pair, Coaxial, Fibre Optics; Connectors: RJ45, RJ11, T-connectors",
      "**Acronyms:** HTTP, HTTPS, HTML, XML",
      "**Router** = directs data between networks; **Switch** = connects devices in LAN"
    ],
    jamb: [
      { q: "Which network topology connects all devices to a central hub?", a: "Star topology" },
      { q: "A modem is used to ___", a: "Modulate/demodulate signals for internet connection" },
      { q: "Fibre optic cables transmit data as ___", a: "Light signals" },
      { q: "HTTPS is more secure than HTTP because ___", a: "It uses SSL/TLS encryption" }
    ],
    waec: [
      { q: "State advantages and disadvantages of Star topology.", a: "Adv: easy to add devices, fault isolation; Disadv: depends on central hub, expensive" },
      { q: "Differentiate between a hub, switch, and router.", a: "Hub=broadcasts to all; Switch=sends to specific device; Router=connects different networks" }
    ],
    tip: "Know network topology diagrams. WAEC asks advantages/disadvantages of each topology."
  },
  {
    day: 16,
    section: "Section G – Problem Solving Skills (Part 1)",
    topic: "Programming Languages – Levels & Classification",
    notes: [
      "**PL levels:** Machine language (1GL), Assembly language (2GL), High-Level (3GL+)",
      "**HLL categories:** Scientific, General Purpose, Business, Object-oriented, Procedural, AI, Visual, etc.",
      "**HLL characteristics:** Portable, English-like, Uses data types, Easy to code/debug",
      "**Translators:** Interpreter (line-by-line) vs Compiler (whole program at once)",
      "**Examples:** BASIC, C, Java, Fortran 2008, Python, Pearl, COBOL, C+",
      "**Assembler** = translates assembly language to machine code"
    ],
    jamb: [
      { q: "Machine language uses ___", a: "0s and 1s (binary)" },
      { q: "BASIC stands for ___", a: "Beginner's All-purpose Symbolic Instruction Code" },
      { q: "Which language is closest to human language?", a: "High-Level Language (HLL)" },
      { q: "An assembler translates ___ language.", a: "Assembly language to machine code" }
    ],
    waec: [
      { q: "Differentiate between low-level and high-level programming languages.", a: "Low-level: machine/assembly, hardware-specific, fast; High-level: English-like, portable, easier" },
      { q: "State THREE characteristics of high-level languages.", a: "Portable, easy to understand, uses English-like syntax, machine-independent" }
    ],
    tip: "JAMB distinguishes Interpreter vs Compiler. Know examples of compiled vs interpreted languages."
  },
  {
    day: 17,
    section: "Section G – Problem Solving Skills (Part 2)",
    topic: "Algorithm, Flowcharts & Programming Structure",
    notes: [
      "**Algorithm:** step-by-step solution; properties: Input specified, Output specified, Definiteness, Effectiveness, Finiteness",
      "**Flowchart symbols:** Start/Stop (oval), Input/Output (parallelogram), Process (rectangle), Decision (diamond)",
      "**Programming features:** Keywords, Variable types, Constants/literals, Numeric, String/alphanumeric",
      "**Basic statements:** Input, Output, Processing, Comments, Subroutines, Iteration/Loop, Conditional",
      "**Pseudocode** = English-like description of algorithm (not real code)",
      "**Loop types:** FOR, WHILE, DO-WHILE"
    ],
    jamb: [
      { q: "The diamond shape in a flowchart represents ___", a: "Decision / Condition" },
      { q: "An oval shape in a flowchart represents ___", a: "Start / Stop (Terminal)" },
      { q: "A set of step-by-step instructions to solve a problem is called ___", a: "Algorithm" },
      { q: "Which flowchart symbol is used for input/output?", a: "Parallelogram" }
    ],
    waec: [
      { q: "Draw a flowchart to find the largest of two numbers.", a: "Start→Input A,B→Decision: A>B?→Yes: Print A→No: Print B→Stop" },
      { q: "State FIVE properties of a good algorithm.", a: "Input, Output, Definiteness, Effectiveness, Finiteness" }
    ],
    tip: "Always practice drawing flowcharts. WAEC gives flowchart drawing questions worth lots of marks."
  },
  {
    day: 18,
    section: "Section G – Problem Solving Skills (Part 3)",
    topic: "Program Development & SDLC",
    notes: [
      "**Good program characteristics:** Accuracy, Readability, Maintainability, Portability, Generality",
      "**Program development steps:** Problem definition → Problem analysis → Design → Coding → Compilation → Testing → Documentation → Maintenance",
      "**SDLC stages:** Preliminary study → Feasibility → Analysis → Design Implementation → Maintenance → Review",
      "**Interpreted languages:** BASIC, Java, Python",
      "**Compiled languages:** COBOL, FORTRAN, C, C++, Java (also compiled to bytecode)",
      "**Testing types:** Unit testing, Integration testing, System testing"
    ],
    jamb: [
      { q: "The first step in program development is ___", a: "Problem definition" },
      { q: "SDLC stands for ___", a: "System Development Life Cycle" },
      { q: "Which of these is a compiled language?", a: "COBOL / FORTRAN / C++" },
      { q: "Documentation is done ___ in program development.", a: "After testing / Throughout development" }
    ],
    waec: [
      { q: "List the stages of the SDLC.", a: "Preliminary study, Feasibility, Analysis, Design, Implementation, Maintenance, Review" },
      { q: "State FIVE characteristics of a good program.", a: "Accuracy, Readability, Maintainability, Portability, Efficiency, Generality" }
    ],
    tip: "JAMB tests SDLC stages in order. Memorize the 7 stages as a sentence or acronym: PFADIМR."
  },
  {
    day: 19,
    section: "Section H & I – AI, Robotics & Ethics",
    topic: "Artificial Intelligence, Robotics & Computer Ethics",
    notes: [
      "**AI branches:** Machine Learning (supervised/unsupervised/reinforcement), Neural Networks, Expert Systems, Fuzzy Logic, NLP, Deep Learning",
      "**AI applications:** Robotics, E-Commerce, Navigation, Healthcare, Agriculture, Automobiles, Social Media",
      "**Robotics components:** Control system, Sensors, Actuators, Power Supply, End Effectors",
      "**Robot types:** Humanoid, Autonomous, Teleoperated, Augmenting",
      "**Computer-related crimes:** Hacking, Theft, Compromising systems",
      "**Prevention:** strong passwords, user ID, antivirus, firewall"
    ],
    jamb: [
      { q: "AI stands for ___", a: "Artificial Intelligence" },
      { q: "Which AI branch involves learning from labelled data?", a: "Supervised Machine Learning" },
      { q: "A robot that resembles a human is called ___", a: "Humanoid robot" },
      { q: "NLP stands for ___", a: "Natural Language Processing" }
    ],
    waec: [
      { q: "State THREE branches of Artificial Intelligence.", a: "Machine Learning, Neural Networks, Expert Systems, Fuzzy Logic, NLP, Deep Learning (any 3)" },
      { q: "List FOUR components of a robot.", a: "Control system, Sensors, Actuators, Power Supply, End Effectors (any 4)" }
    ],
    tip: "WAEC added AI/Robotics recently. Know all 3 types of Machine Learning and their meanings."
  },
  {
    day: 20,
    section: "Section I – Computer Ethics, Security & Career Paths",
    topic: "Cyber Security, Computer Ethics & Career Prospects",
    notes: [
      "**Computer security types:** Network, Internet (cyber), Application, Data, Information, End-user security",
      "**Security tools:** Firewalls, Antivirus, Encryption, VPN, NAC, SEIM",
      "**Cyber threats:** Malware, Virus, Trojans, Spyware, Ransomware, Phishing, SQL injection, DoS",
      "**CIA triad:** Confidentiality, Integrity, Availability",
      "**Career paths:** Software Developer, Web Developer, Data Analyst, AI & Robotics, Digital Forensics, Network Engineer, ICT Manager, E-Marketer",
      "**Computer ethics:** responsible use, copyright respect, no hacking, privacy"
    ],
    jamb: [
      { q: "The CIA triad in cybersecurity stands for ___", a: "Confidentiality, Integrity, Availability" },
      { q: "A program that replicates itself and damages files is called ___", a: "Computer Virus" },
      { q: "Phishing is a type of ___", a: "Cyber attack / Social engineering" },
      { q: "A firewall is used to ___", a: "Block unauthorised network access" }
    ],
    waec: [
      { q: "State FIVE types of cyber threats.", a: "Virus, Malware, Trojan, Ransomware, Phishing, Spyware, SQL Injection, DoS (any 5)" },
      { q: "Explain the CIA triad in cybersecurity.", a: "Confidentiality=data only to authorised users; Integrity=data accuracy; Availability=data accessible when needed" }
    ],
    tip: "WAEC tests cyber security safety tips. Know the CIA triad and at least 5 types of cyber threats."
  }
];

export default function ComputerStudiesApp() {
  const [currentDay, setCurrentDay] = useState(0);
  const [activeTab, setActiveTab] = useState("notes");
  const [revealed, setRevealed] = useState({});
  const [completedDays, setCompletedDays] = useState(new Set());
  const [quizMode, setQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizType, setQuizType] = useState("jamb");

  const day = studyData[currentDay];
  const progress = Math.round((completedDays.size / 20) * 100);

  const toggleReveal = (key) => {
    setRevealed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const markComplete = () => {
    setCompletedDays(prev => new Set([...prev, currentDay]));
    if (currentDay < 19) setCurrentDay(currentDay + 1);
    setActiveTab("notes");
    setRevealed({});
  };

  const allQs = quizType === "jamb" ? day.jamb : day.waec;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 50%, #0a1628 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#e2e8f0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg, #1a1a3e 0%, #0f2744 100%)",
        borderBottom: "2px solid #3b82f6",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div>
          <div style={{ fontSize: "11px", color: "#60a5fa", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px" }}>
            JAMB & WAEC PREP
          </div>
          <h1 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>
            💻 20-Day Computer Studies Grind
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "#94a3b8" }}>PROGRESS</div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#34d399" }}>{progress}%</div>
          </div>
          <div style={{
            width: "80px", height: "8px",
            background: "#1e293b", borderRadius: "4px", overflow: "hidden"
          }}>
            <div style={{
              width: `${progress}%`, height: "100%",
              background: "linear-gradient(90deg, #3b82f6, #34d399)",
              transition: "width 0.5s ease"
            }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto", padding: "16px" }}>
        {/* Day Sidebar */}
        <div style={{
          width: "120px", flexShrink: 0, marginRight: "16px",
          display: "flex", flexDirection: "column", gap: "6px"
        }}>
          <div style={{ fontSize: "10px", color: "#64748b", letterSpacing: "2px", marginBottom: "4px", paddingLeft: "4px" }}>DAYS</div>
          {studyData.map((d, i) => (
            <button key={i} onClick={() => { setCurrentDay(i); setActiveTab("notes"); setRevealed({}); setQuizMode(false); setQuizIndex(0); }}
              style={{
                padding: "8px 4px",
                borderRadius: "8px",
                border: i === currentDay ? "1px solid #3b82f6" : "1px solid transparent",
                background: i === currentDay ? "#1e3a5f" : completedDays.has(i) ? "#0f2a1a" : "#0f172a",
                color: i === currentDay ? "#60a5fa" : completedDays.has(i) ? "#34d399" : "#64748b",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: i === currentDay ? 700 : 400,
                textAlign: "center",
                transition: "all 0.2s",
              }}>
              {completedDays.has(i) ? "✓" : `D${i + 1}`}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Day Header */}
          <div style={{
            background: "linear-gradient(135deg, #1e3a5f, #1a1a4e)",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "16px",
            border: "1px solid #2d4a7a",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <span style={{ fontSize: "11px", color: "#60a5fa", letterSpacing: "2px" }}>DAY {day.day} / 20</span>
                <h2 style={{ margin: "4px 0", fontSize: "16px", color: "#fff", fontWeight: 700 }}>{day.topic}</h2>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{day.section}</div>
              </div>
              <div style={{
                background: "#1e3a5f",
                border: "1px solid #f59e0b",
                borderRadius: "8px",
                padding: "8px 12px",
                maxWidth: "280px",
                fontSize: "11px",
                color: "#fbbf24",
              }}>
                🎯 <strong>EXAM TIP:</strong> {day.tip}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            {["notes", "jamb", "waec"].map(tab => (
              <button key={tab} onClick={() => { setActiveTab(tab); setQuizMode(false); setQuizIndex(0); setRevealed({}); }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "none",
                  background: activeTab === tab
                    ? tab === "notes" ? "#3b82f6" : tab === "jamb" ? "#7c3aed" : "#059669"
                    : "#1e293b",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}>
                {tab === "notes" ? "📝 Notes" : tab === "jamb" ? "🎓 JAMB Q&A" : "📋 WAEC Q&A"}
              </button>
            ))}
          </div>

          {/* Notes Tab */}
          {activeTab === "notes" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {day.notes.map((note, i) => {
                // Parse bold text
                const parts = note.split(/\*\*(.*?)\*\*/g);
                return (
                  <div key={i} style={{
                    background: "#0f172a",
                    border: "1px solid #1e3a5f",
                    borderLeft: "3px solid #3b82f6",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}>
                    {parts.map((part, j) =>
                      j % 2 === 1
                        ? <strong key={j} style={{ color: "#60a5fa" }}>{part}</strong>
                        : <span key={j}>{part}</span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* JAMB Q&A Tab */}
          {activeTab === "jamb" && (
            <div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                <button onClick={() => setQuizMode(!quizMode)}
                  style={{
                    padding: "7px 16px", borderRadius: "8px", border: "none",
                    background: quizMode ? "#7c3aed" : "#1e293b",
                    color: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: 600
                  }}>
                  {quizMode ? "📖 Show All" : "🧪 Quiz Mode"}
                </button>
              </div>
              {quizMode ? (
                <div>
                  {quizIndex < day.jamb.length ? (
                    <div style={{
                      background: "#0f172a", border: "1px solid #7c3aed",
                      borderRadius: "12px", padding: "24px"
                    }}>
                      <div style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "8px" }}>
                        Question {quizIndex + 1} of {day.jamb.length}
                      </div>
                      <p style={{ fontSize: "15px", fontWeight: 600, color: "#e2e8f0", marginBottom: "20px" }}>
                        {day.jamb[quizIndex].q}
                      </p>
                      {revealed[`q${quizIndex}`] ? (
                        <div>
                          <div style={{
                            background: "#0f2a1a", border: "1px solid #34d399",
                            borderRadius: "8px", padding: "12px 16px",
                            color: "#34d399", fontWeight: 600, fontSize: "14px", marginBottom: "16px"
                          }}>
                            ✅ {day.jamb[quizIndex].a}
                          </div>
                          <button onClick={() => { setQuizIndex(quizIndex + 1); setRevealed({}); }}
                            style={{
                              padding: "8px 20px", background: "#7c3aed", color: "#fff",
                              border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600
                            }}>
                            Next →
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => toggleReveal(`q${quizIndex}`)}
                          style={{
                            padding: "8px 20px", background: "#1e3a5f", color: "#60a5fa",
                            border: "1px solid #3b82f6", borderRadius: "8px", cursor: "pointer", fontWeight: 600
                          }}>
                          Reveal Answer
                        </button>
                      )}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: "32px", color: "#34d399", fontSize: "16px" }}>
                      🎉 Quiz Complete! All {day.jamb.length} JAMB questions done.
                      <br />
                      <button onClick={() => { setQuizIndex(0); setRevealed({}); }}
                        style={{
                          marginTop: "16px", padding: "8px 20px", background: "#7c3aed",
                          color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer"
                        }}>
                        Retry
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {day.jamb.map((item, i) => (
                    <div key={i} style={{
                      background: "#0f172a", border: "1px solid #2d1b69",
                      borderLeft: "3px solid #7c3aed", borderRadius: "8px", padding: "14px 16px"
                    }}>
                      <p style={{ margin: "0 0 10px", fontWeight: 600, fontSize: "14px", color: "#c4b5fd" }}>
                        Q{i + 1}: {item.q}
                      </p>
                      <button onClick={() => toggleReveal(`j${i}`)}
                        style={{
                          padding: "5px 12px", background: revealed[`j${i}`] ? "#0f2a1a" : "#1e293b",
                          color: revealed[`j${i}`] ? "#34d399" : "#94a3b8",
                          border: `1px solid ${revealed[`j${i}`] ? "#34d399" : "#334155"}`,
                          borderRadius: "6px", cursor: "pointer", fontSize: "12px"
                        }}>
                        {revealed[`j${i}`] ? `✅ ${item.a}` : "👁 Show Answer"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* WAEC Q&A Tab */}
          {activeTab === "waec" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {day.waec.map((item, i) => (
                <div key={i} style={{
                  background: "#0f172a", border: "1px solid #064e3b",
                  borderLeft: "3px solid #059669", borderRadius: "8px", padding: "14px 16px"
                }}>
                  <p style={{ margin: "0 0 10px", fontWeight: 600, fontSize: "14px", color: "#6ee7b7" }}>
                    Q{i + 1}: {item.q}
                  </p>
                  <button onClick={() => toggleReveal(`w${i}`)}
                    style={{
                      padding: "5px 12px", background: revealed[`w${i}`] ? "#0f2a1a" : "#1e293b",
                      color: revealed[`w${i}`] ? "#34d399" : "#94a3b8",
                      border: `1px solid ${revealed[`w${i}`] ? "#34d399" : "#334155"}`,
                      borderRadius: "6px", cursor: "pointer", fontSize: "12px"
                    }}>
                    {revealed[`w${i}`] ? `✅ ${item.a}` : "👁 Show Answer"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Mark Complete Button */}
          <div style={{ marginTop: "24px", display: "flex", gap: "12px", alignItems: "center" }}>
            <button onClick={markComplete}
              style={{
                padding: "12px 28px",
                background: completedDays.has(currentDay)
                  ? "linear-gradient(90deg, #059669, #047857)"
                  : "linear-gradient(90deg, #3b82f6, #2563eb)",
                color: "#fff", border: "none", borderRadius: "10px",
                fontSize: "14px", fontWeight: 700, cursor: "pointer",
                transition: "all 0.2s",
              }}>
              {completedDays.has(currentDay) ? "✓ Completed — Next Day →" : "✅ Mark Complete & Continue"}
            </button>
            {currentDay < 19 && (
              <button onClick={() => { setCurrentDay(currentDay + 1); setActiveTab("notes"); setRevealed({}); }}
                style={{
                  padding: "12px 20px", background: "#1e293b",
                  color: "#94a3b8", border: "1px solid #334155",
                  borderRadius: "10px", fontSize: "14px", cursor: "pointer"
                }}>
                Skip →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
