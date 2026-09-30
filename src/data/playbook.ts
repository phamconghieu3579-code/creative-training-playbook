export interface ConceptDetail {
  id: string;
  title: string;
  category?: string; // e.g. "Strategy", "Product Truth", "Component", "Supporting Rule", "Example"
  focusQuestion?: string;
  explanation?: string;
  whatItIncludes?: string;
  whatItHelpsUsersDo?: string;
  whatItHelpsViewersDo?: string;
  priorityChange?: string;
  priorityLabel?: string;
  doNotTestSeparately?: string;
  doNotTestLabel?: string;
  videoAdsContext?: string;
  asoContext?: string;
  supportingNote?: string;
  example?: string;
  takeaway?: string;
  badges?: string[];
}

export interface PlaybookPage {
  id: string; // e.g. "1.1", "2.1"
  chapterNumber: string; // e.g. "01", "02"
  chapterTitle: string; // e.g. "Why This Session?"
  chapterLocationTitle: string; // e.g. "WHY THIS SESSION?"
  sectionNumber: string; // e.g. "1.1"
  conceptTitle: string; // e.g. "What Success Looks Like"
  coreQuestion?: string; // e.g. "How will this help our next creative order?"
  memoryLine?: string; // e.g. "SHARED LANGUAGE TURNS PERFORMANCE DATA INTO CREATIVE DIRECTION."
  pageKey:
    | '1.1'
    | '2.1'
    | '2.2'
    | '2.3'
    | '2.4'
    | '2.5'
    | '2.6'
    | '2.7'
    | '3.1'
    | '3.2'
    | '3.3'
    | '3.4'
    | '3.5'
    | '3.6'
    | '3.7'
    | '3.8'
    | '4.1'
    | '4.2'
    | '4.3'
    | '5.1'
    | '5.2'
    | '5.3'
    | '5.4'
    | '6.1'
    | '6.2'
    | '6.3'
    | '6.4'
    | '6.5';
  details?: Record<string, ConceptDetail>;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  pages: PlaybookPage[];
}

export const PLAYBOOK_CHAPTERS: Chapter[] = [
  {
    id: '01',
    number: '01',
    title: 'Why This Session?',
    pages: [
      {
        id: '1.1',
        chapterNumber: '01',
        chapterTitle: 'Why This Session?',
        chapterLocationTitle: 'WHY THIS SESSION?',
        sectionNumber: '1.1',
        conceptTitle: 'What Success Looks Like',
        coreQuestion: 'How will this help our next creative order?',
        memoryLine: 'SHARED LANGUAGE TURNS PERFORMANCE DATA INTO CREATIVE DIRECTION.',
        pageKey: '1.1',
        details: {
          understand: {
            id: 'understand',
            title: 'UNDERSTAND A CREATIVE',
            category: 'Success Outcome',
            focusQuestion: 'What are the main components and how do they work?',
            explanation:
              'Identify the main components of a creative asset (video ad or ASO screenshots) and explain how they communicate a tangible benefit to users.',
            takeaway: 'Moves the team from subjective gut reactions to structured component analysis.',
          },
          choose: {
            id: 'choose',
            title: 'CHOOSE WHAT TO TEST',
            category: 'Success Outcome',
            focusQuestion: 'Which part do we change, and what must stay the same?',
            explanation:
              'Name the exact component you want to change, explain why that change matters to users, and explicitly identify what should stay constant to isolate the variable.',
            takeaway: 'Prevents confusing whole creative overhauls with controlled hypothesis tests.',
          },
          brief: {
            id: 'brief',
            title: 'WRITE A CLEAR BRIEF',
            category: 'Success Outcome',
            focusQuestion: 'How much direction vs. creative freedom do we give?',
            explanation:
              'Communicate your hypothesis and intended message with enough direction for CPC to write the story and enough room for Production to create the finished visual asset.',
            takeaway: 'Avoids under-briefing (guessing) and over-prescribing (micromanagement).',
          },
          feedback: {
            id: 'feedback',
            title: 'REVIEW AND GIVE FEEDBACK',
            category: 'Success Outcome',
            focusQuestion: 'Does the output deliver what was briefed?',
            explanation:
              'Check whether the output delivers the agreed brief and explain what needs to improve before testing, prioritizing issues that break the test over personal preferences.',
            takeaway: 'Focuses review on whether the asset is ready to test the hypothesis.',
          },
          'ua-role': {
            id: 'ua-role',
            title: 'UA CONTRIBUTION',
            category: 'Team Role',
            focusQuestion: 'What does UA bring to the table?',
            explanation:
              'UA brings the test question, commercial goal, audience context, and performance evidence from previous iterations.',
          },
          'cpc-role': {
            id: 'cpc-role',
            title: 'CPC CONTRIBUTION',
            category: 'Team Role',
            focusQuestion: 'What does CPC develop?',
            explanation:
              'CPC develops the angle, content components, and storytelling sequence that turn the hypothesis into a persuasive message.',
          },
          'production-role': {
            id: 'production-role',
            title: 'PRODUCTION CONTRIBUTION',
            category: 'Team Role',
            focusQuestion: 'What do Designers and Editors create?',
            explanation:
              'Designers and video editors turn the story into the finished visual asset through typography, pacing, layout, UI fidelity, and audio polish.',
          },
        },
      },
    ],
  },
  {
    id: '02',
    number: '02',
    title: 'Understand the Creative',
    pages: [
      {
        id: '2.1',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.1',
        conceptTitle: 'Creative System',
        coreQuestion: 'What is the creative made of?',
        memoryLine: 'CREATIVE IS A SYSTEM, NOT AN ACCIDENT.',
        pageKey: '2.1',
        details: {
          strategy: {
            id: 'strategy',
            title: 'STRATEGY',
            category: 'System Stage',
            focusQuestion: 'What guides the whole creative system?',
            explanation:
              'Strategy defines Goal (commercial outcome), Audience (who will see it, what matters to them, and where), and Hypothesis (what we believe will work better and why). Goal, Audience, and Hypothesis guide every choice below them across Angle, Content, Storytelling, and Production.',
            takeaway: 'Strategy guides choices across the whole creative system.',
          },
          angle: {
            id: 'angle',
            title: 'ANGLE (USER RELEVANCE)',
            category: 'System Stage',
            focusQuestion: 'Why should users care?',
            explanation:
              'Angle defines the reason users should care about the app (Need + Situation + Benefit). It represents the users’ perspective and motivation.',
            takeaway: 'Angle provides the motivation that makes the app relevant.',
          },
          product: {
            id: 'product',
            title: 'PRODUCT (TRUTH & CAPABILITY)',
            category: 'System Stage',
            focusQuestion: 'What can the app actually deliver?',
            explanation:
              'Product defines the reality of what the app can deliver (Features + UX/UI + Product Proof). It supplies material for the story and sets the limits of what we can truthfully promise.',
            takeaway: 'Product provides material and truth boundaries.',
          },
          'content-storytelling': {
            id: 'content-storytelling',
            title: 'CONTENT & STORYTELLING',
            category: 'System Stage',
            focusQuestion: 'How do we connect user relevance with product capability?',
            explanation:
              'Content and Storytelling build the bridge between what users care about (Angle) and what the app can do (Product). Content selects the message, character, situation, and proof; Storytelling arranges that material over time (video) or across screenshots (ASO).',
            takeaway: 'Connects reason to care directly to product proof.',
          },
          production: {
            id: 'production',
            title: 'PRODUCTION (ASO & VIDEO)',
            category: 'System Stage',
            focusQuestion: 'How is that communication presented?',
            explanation:
              'Production makes that communication visible, audible, and easy to follow. ASO design shapes layout, reading path, and visual hierarchy; Video production shapes pacing, shots, sound, and motion.',
            takeaway: 'Presents the communication clearly and compellingly.',
          },
        },
      },
      {
        id: '2.2',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.2',
        conceptTitle: 'Strategy & Product',
        coreQuestion: 'Where does creative begin?',
        memoryLine: 'STRATEGY GUIDES CHOICES ACROSS THE WHOLE CREATIVE; PRODUCT DEFINES THE TRUTH.',
        pageKey: '2.2',
        details: {
          goal: {
            id: 'goal',
            title: 'GOAL',
            category: 'Strategy Component',
            focusQuestion: 'What commercial or learning target do we want this creative to achieve?',
            explanation:
              'Defines the commercial, learning, or conversion metric the creative is intended to move. Setting a specific target anchors the creative in measurable data and prevents evaluating performance on subjective impressions.',
          },
          audience: {
            id: 'audience',
            title: 'AUDIENCE',
            category: 'Strategy Component',
            focusQuestion: 'Who will see it, what matters to them, and in what context?',
            explanation:
              'Identifies who will see the creative, their current mindsets, cultural contexts, and viewing environments. Audience insight dictates which benefit to highlight, which character persona to portray, which tone of voice to adopt, and how to frame the proof.',
          },
          hypothesis: {
            id: 'hypothesis',
            title: 'HYPOTHESIS',
            category: 'Strategy Component',
            focusQuestion: 'What do we believe could work better for these users, and why?',
            explanation:
              'Translates strategic intent into an actionable test proposition: “For [audience], we believe [change] may improve [outcome], because [reason].” State the observation behind the idea, make assumptions explicit, and specify the comparison metric used to verify the result. A strong hypothesis tells Creative what needs to be tested without micromanaging visual craft.',
          },
          features: {
            id: 'features',
            title: 'FEATURES',
            category: 'Product Component',
            focusQuestion: 'What users can do with the app.',
            explanation:
              'The functional capabilities and toolsets built into the app (e.g. AI portrait generator, object eraser). Features define what the app executes, but never explain why someone should install it.',
          },
          'ux-ui': {
            id: 'ux-ui',
            title: 'UX / UI',
            category: 'Product Component',
            focusQuestion: 'The real screens, interactions, and controls used to do it.',
            explanation:
              'The authentic interface screens, navigation paths, controls, and gestures used inside the app. Real UI demonstrates usability and familiarizes potential users with the product experience before install.',
          },
          'product-proof': {
            id: 'product-proof',
            title: 'PRODUCT PROOF',
            category: 'Product Component',
            focusQuestion: 'Real outputs or demonstrations that verify the capability.',
            explanation:
              'The tangible demonstrations, output samples, or before-and-after results that verify app capability. Product sets the strict boundaries of truth: creative cannot promise capabilities the product cannot deliver. Content chooses which proof to show and how to sequence it.',
          },
        },
      },
      {
        id: '2.3',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.3',
        conceptTitle: 'Angle',
        coreQuestion: 'Why should users care?',
        memoryLine: 'FEATURE ≠ BENEFIT ≠ ANGLE.',
        pageKey: '2.3',
        details: {
          'need-motivation': {
            id: 'need-motivation',
            title: 'NEED OR MOTIVATION',
            category: 'Angle Component',
            focusQuestion: 'What does the user want to achieve, feel, express, or solve?',
            explanation:
              'Angle begins with what the user desires. Need or motivation uncovers the underlying emotional desire, practical frustration, or identity expression the user seeks to resolve. Starting with the user’s need prevents the creative from becoming a dry list of features.',
          },
          'use-situation': {
            id: 'use-situation',
            title: 'USE SITUATION',
            category: 'Angle Component',
            focusQuestion: 'When does that motivation become relevant?',
            explanation:
              'Identifies the specific trigger moment or everyday context when the user’s motivation flares up (e.g. traveling alone, getting ready for a date, tax season). Grounding the creative in a recognizable situation makes the benefit instantly relatable.',
          },
          'benefit-highlight': {
            id: 'benefit-highlight',
            title: 'BENEFIT TO HIGHLIGHT',
            category: 'Angle Component',
            focusQuestion: 'Which value of the app connects to that motivation?',
            explanation:
              'The specific value or positive outcome of the app that satisfies the motivation. Formulate as: “For people who want [need], this creative highlights [benefit].” Audience insight determines which benefit will resonate most strongly.',
          },
          feature: {
            id: 'feature',
            title: 'FEATURE: WHAT CAN THE APP DO?',
            category: 'Concept Distinction',
            focusQuestion: 'What can the app do?',
            explanation:
              'A functional tool or technical capability inside the app. Features tell shoppers what the app does, but never explain why someone should install it.',
            example: 'e.g. Generate a kissing video from photos (AI Kiss), face-swap, background blur.',
          },
          benefit: {
            id: 'benefit',
            title: 'BENEFIT: WHAT DOES THIS LET THE USER DO?',
            category: 'Concept Distinction',
            focusQuestion: 'What does this let the user do?',
            explanation:
              'The direct personal value or positive outcome experienced by the user when using the capability. It answers what the feature enables for their life.',
            example: 'e.g. Create a heartwarming shared moment, celebrate an anniversary, save hours of manual editing.',
          },
          angle: {
            id: 'angle',
            title: 'ANGLE: WHY WOULD THIS AUDIENCE WANT THAT?',
            category: 'Concept Distinction',
            focusQuestion: 'Why would this particular audience want that?',
            explanation:
              'The combined reason to care tailored to a specific audience context (Need + Situation + Benefit). The exact same feature can support completely different Angles:\n• Feel closer to a long-distance partner missing them on Valentine’s Day\n• Imagine a romantic moment with a secret crush\n• Create a playful video prank for friends\n\nAlways agree on the Angle before writing copy or designing visuals.',
            example: 'e.g. Long-distance couples missing each other on Valentine’s Day creating a shared memory.',
          },
        },
      },
      {
        id: '2.4',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.4',
        conceptTitle: 'Content Components',
        coreQuestion: 'What material goes inside the creative?',
        memoryLine: 'START WITH THE MAIN MESSAGE; GIVE THE CHARACTER A PURPOSE.',
        pageKey: '2.4',
        details: {
          message: {
            id: 'message',
            title: 'MESSAGE',
            category: 'Content Component',
            focusQuestion: 'What is the main takeaway?',
            whatItIncludes: 'The single main takeaway users should understand from the creative, and the essential supporting points needed to make sense of it.',
            supportingNote: 'Start with the main message. It expresses the Angle clearly enough that we can decide what belongs in the creative.',
          },
          character: {
            id: 'character',
            title: 'CHARACTER',
            category: 'Content Component',
            focusQuestion: 'Who appears and what is their purpose?',
            whatItIncludes: 'Who appears in the creative, their role or relationship, and what they do or want.',
            supportingNote: 'Give the character a purpose. An attractive character alone does not explain why the app matters; they must represent the user, demonstrate the app, or appear in the result.',
          },
          'situation-action': {
            id: 'situation-action',
            title: 'SITUATION AND ACTION',
            category: 'Content Component',
            focusQuestion: 'Where does the idea happen and what takes place?',
            whatItIncludes: 'Where the idea happens and what takes place—the context, problem, or action that makes the benefit relevant and visible.',
            supportingNote: 'The situation should make the motivation clear without requiring lengthy explanation.',
          },
          proof: {
            id: 'proof',
            title: 'PROOF',
            category: 'Content Component',
            focusQuestion: 'What makes the promise believable?',
            whatItIncludes: 'The app result, demonstration, or visible evidence that supports the promise.',
            supportingNote: 'Choose proof that supports the promise. Showing an app screen establishes an interface exists; showing a relevant action or result proves what users can achieve.',
          },
          'copy-dialogue': {
            id: 'copy-dialogue',
            title: 'COPY AND DIALOGUE',
            category: 'Content Component',
            focusQuestion: 'What do the words communicate?',
            whatItIncludes: 'Headline, captions, on-screen text, labels, spoken lines, and voiceover script.',
            supportingNote: 'Words and visuals must communicate together. Copy clarifies what visuals show.',
          },
          emotion: {
            id: 'emotion',
            title: 'EMOTION',
            category: 'Content Component',
            focusQuestion: 'What should the viewer feel?',
            whatItIncludes: 'What we want the viewer to feel (anticipation, relief, surprise, warmth) and how that feeling supports the Angle.',
            supportingNote: 'Emotion makes the benefit memorable and motivates action.',
          },
        },
      },
      {
        id: '2.5',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.5',
        conceptTitle: 'Storytelling Components',
        coreQuestion: 'In what order does information unfold?',
        memoryLine: 'EACH PART NEEDS A CLEAR MESSAGE AND A REASON TO BE THERE.',
        pageKey: '2.5',
        details: {
          opening: {
            id: 'opening',
            title: 'OPENING',
            category: 'Storytelling Component',
            focusQuestion: 'How do we capture initial attention?',
            videoAdsContext: 'The hook captures initial attention and gives viewers a reason to keep watching.',
            asoContext: 'The first message and visual give shoppers an immediate reason to explore the app.',
            supportingNote: 'Each part needs a clear message and a reason to be there.',
          },
          'sequence-connection': {
            id: 'sequence-connection',
            title: 'SEQUENCE AND CONNECTION',
            category: 'Storytelling Component',
            focusQuestion: 'How does information unfold?',
            videoAdsContext: 'Scenes develop the idea; the body connects the hook to the app demonstration naturally.',
            asoContext: 'Headline and visual explain each other within each screenshot; screenshots connect across the set.',
            supportingNote: 'Video users follow information over time; ASO users follow a visual reading order within each screenshot and across the set.',
          },
          payoff: {
            id: 'payoff',
            title: 'PAYOFF',
            category: 'Storytelling Component',
            focusQuestion: 'What delivers on the opening expectation?',
            videoAdsContext: 'The result or answer delivers what the opening promised and resolves the tension.',
            asoContext: 'The evidence makes the benefit visible, believable, and tangible.',
            supportingNote: 'Storytelling requires a clear connection between the reason to care, the message, and the evidence.',
          },
          'next-action': {
            id: 'next-action',
            title: 'NEXT ACTION',
            category: 'Storytelling Component',
            focusQuestion: 'What should the user do next?',
            videoAdsContext: 'A closing invitation or clear call to action, where useful.',
            asoContext: 'A clear reason to install or try the app; an extra CTA button is optional.',
            supportingNote: 'The final beat must guide the viewer directly toward trying the product.',
          },
          'copy-visual-check': {
            id: 'copy-visual-check',
            title: 'COPY CHANGE → VISUAL CHECK',
            category: 'Supporting Framework',
            focusQuestion: 'Why check the visual when copy changes?',
            explanation:
              '1. Rephrases the same message → Check if existing visual still supports it and text fits.\n2. Emphasizes a different benefit → Check if visual demonstrates that benefit.\n3. Changes the situation, relationship or emotion → Check if character and scene still tell intended story.',
            takeaway: 'IF COPY CHANGES → CHECK WHETHER THE VISUAL STILL SUPPORTS THE INTENDED MESSAGE.',
          },
        },
      },
      {
        id: '2.6',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.6',
        conceptTitle: 'ASO Design Components',
        coreQuestion: 'What are the visual components of store screenshots?',
        memoryLine: 'VISUAL HIERARCHY IS THE ORDER OF ATTENTION.',
        pageKey: '2.6',
        details: {
          character: {
            id: 'character',
            title: 'CHARACTER',
            category: 'ASO Design Component',
            focusQuestion: 'Who is pictured and how are they presented?',
            whatItIncludes: 'Appearance, pose, expression, outfit, character art style, and relationship to the camera/viewer.',
            whatItHelpsUsersDo: 'Connect with an identity, persona, emotion, or story in the screenshot.',
            supportingNote: 'The character’s role belongs to the story; appearance and treatment make that role visible.',
          },
          'app-proof-visuals': {
            id: 'app-proof-visuals',
            title: 'APP AND PROOF VISUALS',
            category: 'ASO Design Component',
            focusQuestion: 'What visual proof demonstrates the app in action?',
            whatItIncludes: 'App UI screens, generated outputs, before-and-after results, and feature demonstration cards.',
            whatItHelpsUsersDo: 'See what the app actually does, how it works, and evaluate real output quality.',
            supportingNote: 'Showing an app screen establishes interface existence; showing a relevant result proves what users can achieve.',
          },
          'text-treatment': {
            id: 'text-treatment',
            title: 'TEXT TREATMENT',
            category: 'ASO Design Component',
            focusQuestion: 'How is the copy rendered visually?',
            whatItIncludes: 'Font choice, weight, sizing, styling, color, background pill/badge, and reading legibility.',
            whatItHelpsUsersDo: 'Read and comprehend headlines and callouts quickly at store display size.',
            supportingNote: 'The headline’s meaning belongs to Content; typography makes it readable at mobile phone scale.',
          },
          layout: {
            id: 'layout',
            title: 'LAYOUT',
            category: 'ASO Design Component',
            focusQuestion: 'How are elements arranged across the screenshot?',
            whatItIncludes: 'Placement of phone frame, headline position, character positioning, and overall composition across the screenshot.',
            whatItHelpsUsersDo: 'Follow a clean visual scan path from headline to device to proof.',
            supportingNote: 'Layout shapes visual storytelling. The same words and images can communicate differently when the reading path changes.',
          },
          'visual-hierarchy': {
            id: 'visual-hierarchy',
            title: 'VISUAL HIERARCHY',
            category: 'ASO Design Component',
            focusQuestion: 'How do users know where to look first and next?',
            whatItIncludes: 'Relative size, contrast, emphasis and spacing.',
            whatItHelpsUsersDo: 'Know what to look at first and next.',
            supportingNote: 'Visual hierarchy means the order of attention. Layout, text size, contrast, and spacing work together to create it.',
          },
          'color-contrast': {
            id: 'color-contrast',
            title: 'COLOR AND CONTRAST',
            category: 'ASO Design Component',
            focusQuestion: 'How does color create contrast and brand feeling?',
            whatItIncludes: 'Background palette, text contrast against background, accent colors, and overall visual brightness.',
            whatItHelpsUsersDo: 'Distinguish key elements instantly and feel the intended mood or category tone.',
            supportingNote: 'Strong contrast ensures headlines and proof remain legible against complex backdrops.',
          },
          'setting-background': {
            id: 'setting-background',
            title: 'SETTING AND BACKGROUND',
            category: 'ASO Design Component',
            focusQuestion: 'Where does the screenshot place the user?',
            whatItIncludes: 'Environmental backdrop, gradient, pattern, contextual scene, or solid color field.',
            whatItHelpsUsersDo: 'Understand the context or mood of the app experience without distracting from the UI.',
            supportingNote: 'Background should support the story context without competing with the product demonstration.',
          },
          'graphics-effects': {
            id: 'graphics-effects',
            title: 'GRAPHICS AND EFFECTS',
            category: 'ASO Design Component',
            focusQuestion: 'What visual accents guide the user’s eye?',
            whatItIncludes: 'Arrows, pointers, glow effects, badges, callout stickers, and decorative particles.',
            whatItHelpsUsersDo: 'Direct attention to key UI controls, outputs, or special features.',
            supportingNote: 'Graphics should serve a functional attention-directing purpose rather than ornamental clutter.',
          },
          'visual-style': {
            id: 'visual-style',
            title: 'VISUAL STYLE',
            category: 'ASO Design Component',
            focusQuestion: 'What overall aesthetic impression does the screenshot convey?',
            whatItIncludes: 'Overall aesthetic (photographic, 3D render, flat illustration, clean editorial, or premium dark mode).',
            whatItHelpsUsersDo: 'Form an immediate impression of app quality, genre, and brand maturity.',
            supportingNote: 'Visual style sets initial expectations of app quality before reading any text.',
          },
          'aso-phone-size': {
            id: 'aso-phone-size',
            title: 'CHECK AT REAL PHONE VIEWING SIZE',
            category: 'Testing Requirement',
            focusQuestion: 'Why must screenshots be judged on mobile?',
            explanation:
              'A screenshot that looks spacious on a desktop monitor can become unreadable on a phone screen. Always evaluate at actual store display dimensions.',
            takeaway: 'Never approve ASO artwork viewed only on desktop.',
          },
        },
      },
      {
        id: '2.7',
        chapterNumber: '02',
        chapterTitle: 'Understand the Creative',
        chapterLocationTitle: 'UNDERSTAND THE CREATIVE',
        sectionNumber: '2.7',
        conceptTitle: 'Video Production Components',
        coreQuestion: 'What are the audio, visual, and motion components of video ads?',
        memoryLine: 'PROOF NEEDS TIME ON SCREEN TO BE UNDERSTOOD.',
        pageKey: '2.7',
        details: {
          'character-performance': {
            id: 'character-performance',
            title: 'CHARACTER AND PERFORMANCE',
            category: 'Video Production Component',
            focusQuestion: 'Who is on screen and how do they act?',
            whatItIncludes: 'Actor/character selection, facial expressions, body language, acting delivery, and gestures.',
            whatItHelpsViewersDo: 'Relate to the person on screen and feel their emotional reaction to the problem or app.',
            supportingNote: 'The persona and delivery make the problem or transformation believable.',
          },
          'setting-props': {
            id: 'setting-props',
            title: 'SETTING AND PROPS',
            category: 'Video Production Component',
            focusQuestion: 'Where is the video set and what items are used?',
            whatItIncludes: 'Location, physical environment, background elements, lighting, and objects handled by characters.',
            whatItHelpsViewersDo: 'Ground the story in a believable, relatable real-world or aspirational context.',
            supportingNote: 'Setting establishes context within the first split-second of the hook.',
          },
          'app-proof-footage': {
            id: 'app-proof-footage',
            title: 'APP AND PROOF FOOTAGE',
            category: 'Video Production Component',
            focusQuestion: 'How is the app itself captured on video?',
            whatItIncludes: 'Screen recordings, UI taps, input flow, real generated outputs, and live demonstration of features.',
            whatItHelpsViewersDo: 'Verify that the app works as promised and observe the payoff firsthand.',
            supportingNote: 'Showing real interaction proves capability; simulated or vague mockups reduce credibility.',
          },
          'shots-framing': {
            id: 'shots-framing',
            title: 'SHOTS AND FRAMING',
            category: 'Video Production Component',
            focusQuestion: 'How does camera distance and framing guide attention?',
            whatItIncludes: 'Camera distance (close-up, medium, wide), camera angle, composition, and framing of device and face.',
            whatItHelpsViewersDo: 'Direct focus to critical details, emotional reactions, or app interactions.',
            supportingNote: 'Tight punch-ins amplify facial emotion or UI detail; wide shots set context.',
          },
          'text-graphics': {
            id: 'text-graphics',
            title: 'TEXT AND GRAPHICS',
            category: 'Video Production Component',
            focusQuestion: 'What text overlays ensure sound-off comprehension?',
            whatItIncludes: 'On-screen captions, headline overlays, kinetic typography, arrows, stickers, and badge overlays.',
            whatItHelpsViewersDo: 'Follow the core message with sound off and emphasize key benefits or steps.',
            supportingNote: 'Sound-off comprehension: visuals and on-screen text must carry the message independently.',
          },
          'editing-pacing': {
            id: 'editing-pacing',
            title: 'EDITING AND PACING',
            category: 'Video Production Component',
            focusQuestion: 'What rhythm carries the viewer through the narrative?',
            whatItIncludes: 'Cut timing, scene length, narrative tempo, shot sequence, and rhythm of demonstration.',
            whatItHelpsViewersDo: 'Stay engaged through the hook, absorb information clearly, and give proof enough time to register.',
            supportingNote: 'A result needs enough screen time to be understood; do not rush the payoff with flashy quick-cuts.',
          },
          'motion-transitions': {
            id: 'motion-transitions',
            title: 'MOTION AND TRANSITIONS',
            category: 'Video Production Component',
            focusQuestion: 'How do scenes connect to maintain momentum?',
            whatItIncludes: 'Camera motion, cuts, wipes, zooms, UI animation, and motion graphics transitions.',
            whatItHelpsViewersDo: 'Move smoothly between narrative beats and maintain visual momentum without obscuring proof.',
            supportingNote: 'Transitions should accelerate storytelling, not disguise lack of authentic proof.',
          },
          voice: {
            id: 'voice',
            title: 'VOICE',
            category: 'Video Production Component',
            focusQuestion: 'How does spoken audio deliver the message?',
            whatItIncludes: 'Voiceover actor tone, pacing, emphasis, script delivery, and natural dialogue.',
            whatItHelpsViewersDo: 'Hear the story explained clearly and absorb the persona’s perspective and personality.',
            supportingNote: 'Voice adds warmth and clarity, but visuals must carry the message.',
          },
          'music-sound-effects': {
            id: 'music-sound-effects',
            title: 'MUSIC AND SOUND EFFECTS',
            category: 'Video Production Component',
            focusQuestion: 'What auditory layer creates emotion and feedback?',
            whatItIncludes: 'Background music track, sound effects (SFX) for UI actions, and audio cues for comedic/dramatic beats.',
            whatItHelpsViewersDo: 'Feel emotional energy, anticipate payoffs, and receive audible feedback on app actions.',
            supportingNote: 'Audio cues reinforce visual satisfaction when an app result is generated.',
          },
          'visual-style': {
            id: 'visual-style',
            title: 'VISUAL STYLE',
            category: 'Video Production Component',
            focusQuestion: 'What production aesthetic defines the asset?',
            whatItIncludes: 'Color grading, aspect ratio, camera aesthetic (UGC raw smartphone vs. cinematic polished), and overall visual look.',
            whatItHelpsViewersDo: 'Identify the format (authentic testimonial vs. premium commercial) and gauge app credibility.',
            supportingNote: 'Style determines whether the asset feels like native social content or an overt corporate ad.',
          },
          'pacing-proof': {
            id: 'pacing-proof',
            title: 'PROOF NEEDS TIME TO UNDERSTAND',
            category: 'Core Principle',
            focusQuestion: 'Why does editing rhythm matter for proof?',
            explanation:
              'The scene plan decides what happens; editing decides how that plan unfolds. A result needs enough screen time to be understood; transitions should never hide the evidence.',
            takeaway: 'Do not rush the payoff with flashy quick-cuts.',
          },
          'sound-optional': {
            id: 'sound-optional',
            title: 'SOUND-OFF COMPREHENSION',
            category: 'Delivery Requirement',
            focusQuestion: 'Does the video communicate when muted?',
            explanation:
              'Many mobile video ads play without sound by default. On-screen text, captions, and visual demonstrations must communicate the core benefit independently of audio.',
            takeaway: 'Voice and music enhance the story, but visuals must carry the message.',
          },
        },
      },
    ],
  },
  {
    id: '03',
    number: '03',
    title: 'Define the Change',
    pages: [
      {
        id: '3.1',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.1',
        conceptTitle: 'Review Order',
        coreQuestion: 'Which part do we review first?',
        memoryLine: 'REVIEW ANGLE → CONTENT & STORYTELLING → PRODUCTION.',
        pageKey: '3.1',
        details: {
          'angle-review': {
            id: 'angle-review',
            title: '1. ANGLE REVIEW',
            category: 'Review Order',
            focusQuestion: 'Are we giving these users a relevant reason to care?',
            explanation:
              'Check motivation, situation, and benefit first. If the reason to care is wrong, polishing the headline or video transitions will not save the asset.',
          },
          'content-review': {
            id: 'content-review',
            title: '2. CONTENT & STORYTELLING REVIEW',
            category: 'Review Order',
            focusQuestion: 'Are we choosing a convincing message, story and proof for that reason?',
            explanation:
              'Verify that message, character, situation, and proof connect directly to the chosen Angle and make the promise believable.',
          },
          'production-review': {
            id: 'production-review',
            title: '3. PRODUCTION REVIEW',
            category: 'Review Order',
            focusQuestion: 'Could a different visual or audio treatment communicate that story more effectively?',
            explanation:
              'Inspect focal point, readability, rhythm, and clarity. This is a review order, not a requirement to test every layer.',
          },
          prioritize: {
            id: 'prioritize',
            title: 'PRIORITIZE',
            category: 'Priority Rule',
            focusQuestion: 'What changes deserve immediate testing?',
            explanation:
              'The change offers a meaningfully different reason to care, message, story, proof, or reading path.',
          },
          'test-selectively': {
            id: 'test-selectively',
            title: 'TEST SELECTIVELY',
            category: 'Priority Rule',
            focusQuestion: 'When do we test treatment differences?',
            explanation:
              'The change gives the same idea a different treatment. You must be able to explain why that treatment could matter to this audience.',
          },
          'do-not-test': {
            id: 'do-not-test',
            title: 'DO NOT TEST SEPARATELY',
            category: 'Priority Rule',
            focusQuestion: 'What should NOT be a standalone test?',
            explanation:
              'The change only adds decoration, makes a minor adjustment without clear communication purpose, or fixes a production problem. Fix quality problems directly before testing!',
          },
        },
      },
      {
        id: '3.2',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.2',
        conceptTitle: 'Change the Angle',
        coreQuestion: 'When do we explore a different reason to care?',
        memoryLine: 'REWORDING THE SAME BENEFIT IS NOT A NEW ANGLE.',
        pageKey: '3.2',
        details: {
          'change-motivation': {
            id: 'change-motivation',
            title: 'CHANGE MOTIVATION',
            category: 'Angle Change',
            focusQuestion: 'How does motivation change the creative direction?',
            explanation:
              'Shifting motivation targets a different psychological driver (e.g. anxiety relief vs status aspiration vs social belonging).\n\n• Explore: What new emotional payoff or problem urgency matters to this cohort?\n• Preserve & Check: Verify that the chosen audience segment genuinely experiences this motivation and that the app provides legitimate capabilities to satisfy it.\n• Downstream: Expect to update the character persona, opening problem, and headline claim.',
          },
          'change-situation': {
            id: 'change-situation',
            title: 'CHANGE SITUATION',
            category: 'Angle Change',
            focusQuestion: 'When does a situation test become meaningful?',
            explanation:
              'Placing the app in a different life moment (e.g. public commute vs private bedroom vs family holiday) alters the user’s immediate mindset.\n\n• Explore: When does the need flare up most intensely?\n• Preserve & Check: Check whether the situation genuinely changes the reason to care or merely illustrates the exact same reason with cosmetic background swaps.\n• Downstream: Update setting, props, and initial hook tension.',
          },
          'change-benefit': {
            id: 'change-benefit',
            title: 'CHANGE BENEFIT TO HIGHLIGHT',
            category: 'Angle Change',
            focusQuestion: 'How to isolate a benefit change?',
            explanation:
              'The same underlying feature almost always offers multiple distinct benefits (e.g. speed vs quality vs emotional peace of mind).\n\n• Explore: Which specific value of the feature connects most convincingly to user goals?\n• Preserve & Check: Ensure the product proof and demonstration specifically show that payoff in action.\n• Downstream: Update the payoff demonstration, callout copy, and conversion claim.',
          },
          'angle-change-scope': {
            id: 'angle-change-scope',
            title: 'CHANGING AN ANGLE AFFECTS DOWNSTREAM ASSETS',
            category: 'Supporting Rule',
            focusQuestion: 'Why do Angle changes ripple through the asset?',
            explanation:
              'Because Angle is the fundamental reason to care, changing it alters what the story must prove. Carrying over old visuals or audio from a previous winner is only valid if those exact assets truthfully support the new Angle’s promise.',
          },
        },
      },
      {
        id: '3.3',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.3',
        conceptTitle: 'Change Content',
        coreQuestion: 'How do we make the same benefit more convincing?',
        memoryLine: 'PRIORITIZE A DISTINCT MESSAGE, STORY, OR REASON TO BELIEVE.',
        pageKey: '3.3',
        details: {
          'main-message': {
            id: 'main-message',
            title: 'MAIN MESSAGE',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile message change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Creating a distinct main takeaway or communication focus that tests a different premise.',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Rewording the same message with synonym swaps that carry identical meaning.',
            supportingNote: 'Prioritize when the change creates a distinct message or reason to believe the promise.',
          },
          character: {
            id: 'character',
            title: 'CHARACTER',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile character change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Testing a character that represents a distinct audience cohort or has a different role/relationship in the story.',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Minor cosmetic wardrobe changes, hairstyle tweaks, or slight facial adjustments within the same persona.',
            supportingNote: 'Check the Angle again: if the new character gives users a different reason to care, the change reaches the Angle.',
          },
          'situation-action': {
            id: 'situation-action',
            title: 'SITUATION AND ACTION',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile situation change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Testing a situation that makes the benefit visible in a completely different daily context or problem trigger.',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Swapping background props or minor environment shifts that do not change the understood situation.',
            supportingNote: 'A situation change matters when it makes the app relevant to a different life moment.',
          },
          'product-demonstration-proof': {
            id: 'product-demonstration-proof',
            title: 'PRODUCT DEMONSTRATION OR PROOF',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile proof change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Showing a different app capability, a before-and-after transformation, or stronger visual evidence of the result.',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Minor UI button color tweak or replacing nearly identical app output screens.',
            supportingNote: 'Proof changes directly impact credibility and conversion.',
          },
          'copy-dialogue': {
            id: 'copy-dialogue',
            title: 'COPY AND DIALOGUE',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile copy change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Changing the headline claim to highlight a different benefit word or rewriting the script to alter narrative tone.',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Subtle phrasing adjustments or switching between identical colloquialisms.',
            supportingNote: 'Copy changes warrant a test when they change the core argument.',
          },
          emotion: {
            id: 'emotion',
            title: 'EMOTION',
            category: 'Content Change',
            focusQuestion: 'What is a worthwhile emotional change?',
            priorityLabel: 'PRIORITIZE CHANGES TO...',
            priorityChange: 'Shifting the emotional tone (e.g. urgent problem-relief vs. lighthearted playful discovery).',
            doNotTestLabel: 'DO NOT SPEND A SEPARATE TEST ON...',
            doNotTestSeparately: 'Slight nuances in background music or minor performance mood adjustments.',
            supportingNote: 'Emotional shifts test whether users respond better to pain relief or aspiration.',
          },
        },
      },
      {
        id: '3.4',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.4',
        conceptTitle: 'Change Storytelling',
        coreQuestion: 'How does information unfold to build belief?',
        pageKey: '3.4',
        details: {
          'notice-first': {
            id: 'notice-first',
            title: '1. WHAT DO USERS NOTICE FIRST?',
            category: 'Storytelling Question',
            focusQuestion: 'What to explore in the opening beat?',
            videoAdsContext: 'Test a different hook: visual shock, curiosity question, relatable problem, or instant app transformation.',
            asoContext: 'Test a different first screenshot: leading with emotional character payoff vs. leading with clear UI demonstration.',
          },
          'understand-it': {
            id: 'understand-it',
            title: '2. HOW DO THEY UNDERSTAND IT?',
            category: 'Storytelling Question',
            focusQuestion: 'What to explore in the connection?',
            videoAdsContext: 'Test information sequence: problem-first vs. result-first vs. step-by-step workflow connection.',
            asoContext: 'Test reading flow across the screenshot set: linear feature tour vs. narrative comparison sequence.',
          },
          'promise-believable': {
            id: 'promise-believable',
            title: '3. WHAT MAKES THE PROMISE BELIEVABLE?',
            category: 'Storytelling Question',
            focusQuestion: 'What to explore in the payoff?',
            videoAdsContext: 'Test how and when the payoff delivers: gradual reveal vs. dramatic before/after vs. social verification.',
            asoContext: 'Test evidence presentation: full-screen output gallery vs. UI device showcase with feature callouts.',
          },
        },
      },
      {
        id: '3.5',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.5',
        conceptTitle: 'Change ASO Design',
        coreQuestion: 'What is a meaningful change to an ASO component?',
        memoryLine: 'PRIORITIZE DIFFERENCES IN ATTENTION; LEAVE ROUTINE CRAFT TO PRODUCTION.',
        pageKey: '3.5',
        details: {
          'character-treatment': {
            id: 'character-treatment',
            title: 'CHARACTER TREATMENT',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to character?',
            priorityChange: 'Changing character persona, archetype, gender/age cohort, or prominent emotional state to test a different audience identification.',
            doNotTestSeparately: 'Minor wardrobe color swaps, slight hairstyle tweaks, or micro-expression adjustments within the same persona.',
            supportingNote: 'Character changes are meaningful when they alter who the user imagines themselves to be or the emotion they feel.',
          },
          'layout-visual-hierarchy': {
            id: 'layout-visual-hierarchy',
            title: 'LAYOUT AND VISUAL HIERARCHY',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to layout?',
            priorityChange: 'Restructuring the layout (e.g. phone-first vs. headline-first, single phone vs. duo comparison) or shifting the focal point so the eye travels in a different order.',
            doNotTestSeparately: 'Small alignment or spacing adjustments that preserve the same reading path.',
            supportingNote: 'Layout deserves attention because it shapes visual storytelling. The same words and images can communicate differently when the focal point or reading path changes.',
          },
          'app-result-presentation': {
            id: 'app-result-presentation',
            title: 'APP AND RESULT PRESENTATION',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to app proof?',
            priorityChange: 'Changing the featured output, showing before-and-after vs. final result only, or demonstrating a different transformation capability.',
            doNotTestSeparately: 'Minor mockup frame swaps, subtle drop shadow tweaks, or replacing one nearly identical UI screen.',
            supportingNote: 'Output proof is the primary driver of credibility; changing what the app delivers changes the value proposition.',
          },
          'color-contrast': {
            id: 'color-contrast',
            title: 'COLOR AND CONTRAST',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to color?',
            priorityChange: 'Major palette shift (e.g. dark high-contrast mode vs. bright light pastel) that alters visual pop in the store or transforms headline legibility from low to high contrast.',
            doNotTestSeparately: 'Shifting a background hex shade slightly or adjusting saturation by 5% when overall contrast remains unchanged.',
            supportingNote: 'Contrast is functional before it is aesthetic: it controls whether headlines and proof are readable at a glance.',
          },
          'text-treatment': {
            id: 'text-treatment',
            title: 'TEXT TREATMENT',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to typography?',
            priorityChange: 'Sizing and contrast increase that makes an unreadable headline readable at phone thumbnail size, or changing typographic emphasis to highlight a different benefit word.',
            doNotTestSeparately: 'Swapping between two similar clean sans-serif fonts, or adjusting letter spacing subtly.',
            supportingNote: 'Typography must ensure readability at mobile phone display size, not just in desktop design tools.',
          },
          'background-setting': {
            id: 'background-setting',
            title: 'BACKGROUND AND SETTING',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to background?',
            priorityChange: 'Switching from an abstract gradient to a contextual real-world environment (or vice-versa) that changes the story context of the app.',
            doNotTestSeparately: 'Swapping background textures or shifting gradient angles with unchanged mood and context.',
            supportingNote: 'Background changes matter when they change how the user contextualizes where and when the app is used.',
          },
          'supporting-graphics-effects': {
            id: 'supporting-graphics-effects',
            title: 'SUPPORTING GRAPHICS AND EFFECTS',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to graphics?',
            priorityChange: 'Adding or removing strong visual directional cues (arrows, pointers, badges) that create an entirely new focal guide to the proof.',
            doNotTestSeparately: 'Changing decorative sparkle styles, micro-shadows on badges, or ornamental elements that do not direct attention.',
            supportingNote: 'Graphics are justified in tests only when they actively guide the eye to the key demonstration.',
          },
          'visual-style': {
            id: 'visual-style',
            title: 'VISUAL STYLE',
            category: 'ASO Design Change',
            focusQuestion: 'What is a meaningful change to visual style?',
            priorityChange: 'Switching overall visual genre (e.g. realistic photo-driven aesthetic vs. 3D stylized illustration vs. raw authentic capture).',
            doNotTestSeparately: 'Minor filter overlay adjustments or subtle post-processing tweaks within the same overall style.',
            supportingNote: 'A genre shift tests how different creative executions appeal to distinct user sensibilities.',
          },
          'aso-change-priority': {
            id: 'aso-change-priority',
            title: 'ASO CHANGE CRITERIA',
            category: 'Testing Rule',
            focusQuestion: 'What justifies an ASO design test?',
            explanation:
              'Prioritize layout and visual hierarchy shifts that alter the reading path or focal point. Do not test subtle font swaps or minor alignment tweaks separately.',
            takeaway: 'Focus tests on the order of attention at mobile phone scale.',
          },
        },
      },
      {
        id: '3.6',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.6',
        conceptTitle: 'Change Video Production',
        coreQuestion: 'What is a meaningful change to a video component?',
        memoryLine: 'AN OUTPUT EFFECT IS PRODUCT PROOF, NOT MERE DECORATION.',
        pageKey: '3.6',
        details: {
          'character-treatment-performance': {
            id: 'character-treatment-performance',
            title: 'CHARACTER TREATMENT AND PERFORMANCE',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to cast & performance?',
            priorityChange: 'Switching creator/actor persona (e.g. relatable everyday user vs. passionate expert) or fundamentally changing emotional energy and delivery style in the hook.',
            doNotTestSeparately: 'Minor outfit color swaps, slightly different take of the same delivery, or cosmetic hairstyle tweaks.',
            supportingNote: 'Performance tests are valid when energy and character archetype communicate a different emotional angle.',
          },
          'app-result-presentation': {
            id: 'app-result-presentation',
            title: 'APP AND RESULT PRESENTATION',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to result presentation?',
            priorityChange: 'Changing how the app output is shown (e.g. split-screen live transformation vs. full-screen dramatic reveal vs. step-by-step UI workflow).',
            doNotTestSeparately: 'Minor UI button color tweak, swapping identical mockups, or micro-adjustments to screen scale within the phone frame.',
            supportingNote: 'The payoff demonstration is the core proof; how it is revealed affects believability directly.',
          },
          'shots-framing': {
            id: 'shots-framing',
            title: 'SHOTS AND FRAMING',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to camera framing?',
            priorityChange: 'Changing perspective (e.g. tight punch-in on emotional reaction vs. wide context shot, over-the-shoulder POV holding the phone).',
            doNotTestSeparately: 'Minor pan speed adjustments or framing shifts of a few pixels that do not alter what is emphasized.',
            supportingNote: 'Framing changes what the viewer prioritizes: intimate face emotion versus functional screen interaction.',
          },
          'editing-pacing': {
            id: 'editing-pacing',
            title: 'EDITING AND PACING',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to editing rhythm?',
            priorityChange: 'Changing pacing structure (e.g. rapid 1-second hook cuts vs. slow continuous narrative hold) or giving proof 3 extra seconds of screen time so viewers can understand the result.',
            doNotTestSeparately: 'Trimming a cut by 2 frames when pacing rhythm and narrative flow remain identical.',
            supportingNote: 'Proof duration is a quality requirement; pacing variations are hypothesis tests only when rhythm changes comprehension.',
          },
          'text-graphics': {
            id: 'text-graphics',
            title: 'TEXT AND GRAPHICS',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to text overlays?',
            priorityChange: 'Adding bold, high-contrast captions that enable sound-off comprehension, or highlighting a completely different benefit word on screen.',
            doNotTestSeparately: 'Changing caption font family or minor stroke outline width with the same size and reading path.',
            supportingNote: 'Captions must be tested for sound-off clarity, ensuring the key message is absorbed without audio.',
          },
          'background-setting-props': {
            id: 'background-setting-props',
            title: 'BACKGROUND, SETTING AND PROPS',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to setting & props?',
            priorityChange: 'Shifting setting (e.g. chaotic noisy commute vs. quiet bedroom at night) to test an entirely different usage situation or emotional state.',
            doNotTestSeparately: 'Swapping background props or tweaking lighting warmth that does not alter the understood situation.',
            supportingNote: 'A setting shift works when it validates a distinct audience lifestyle or problem context.',
          },
          'transitions-visual-effects': {
            id: 'transitions-visual-effects',
            title: 'TRANSITIONS AND VISUAL EFFECTS',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to transitions & effects?',
            priorityChange: 'Using a dramatic transformation transition (e.g. snap transition showing instant AI result) that visually communicates the app’s magical capability.',
            doNotTestSeparately: 'Swapping a standard wipe for a standard dissolve, or adding decorative lens flares that do not explain the product.',
            supportingNote: 'Output effect is proof: an effect demonstrating app output is product proof, not merely decoration.',
          },
          'voice-music-sound-effects': {
            id: 'voice-music-sound-effects',
            title: 'VOICE, MUSIC AND SOUND EFFECTS',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to audio?',
            priorityChange: 'Switching audio tone (e.g. upbeat energetic trending audio vs. calm intimate whispered voiceover) or testing voiceover vs. text-only with trending music.',
            doNotTestSeparately: 'Changing background music volume by 2dB or swapping one generic upbeat track for another of identical tempo and mood.',
            supportingNote: 'Audio changes should test distinct mood registers or sound-on engagement hooks.',
          },
          'visual-style': {
            id: 'visual-style',
            title: 'VISUAL STYLE',
            category: 'Video Production Change',
            focusQuestion: 'What is a meaningful change to video visual style?',
            priorityChange: 'Shifting video genre (e.g. authentic raw UGC selfie video vs. cinematic high-production brand commercial).',
            doNotTestSeparately: 'Subtle color grading LUT adjustments that do not change whether the ad feels raw or commercial.',
            supportingNote: 'Format authenticity is a major lever: raw user content vs. polished commercial signals different credibility.',
          },
          'proof-vs-decoration': {
            id: 'proof-vs-decoration',
            title: 'OUTPUT EFFECT IS PROOF, NOT DECORATION',
            category: 'Key Distinction',
            focusQuestion: 'When is a visual effect considered product proof?',
            explanation:
              'An effect that demonstrates an AI app’s output is product proof, not merely decoration. Its role in the creative determines its test priority.',
            takeaway: 'Effects that show what the app generates are proof of capability.',
          },
        },
      },
      {
        id: '3.7',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.7',
        conceptTitle: 'Discover / Iteration / Multiply',
        coreQuestion: 'What mode does the change belong to?',
        memoryLine: 'CLASSIFY THE MEANING OF THE CHANGE, NOT THE NUMBER OF EDITS.',
        pageKey: '3.7',
        details: {
          discover: {
            id: 'discover',
            title: 'DISCOVER',
            category: 'Test Mode',
            focusQuestion: 'When are we in Discover mode?',
            explanation:
              'What changes: A new creative direction built around a different motivation, benefit or product capability to explore.\nWhat stays: The direction must still fit the audience, goal and actual product.',
          },
          iteration: {
            id: 'iteration',
            title: 'ITERATION',
            category: 'Test Mode',
            focusQuestion: 'When are we in Iteration mode?',
            explanation:
              'What changes: The message, storytelling or meaningful production treatment within the same Angle.\nWhat stays: The core reason for users to care, plus the elements needed for the comparison.',
          },
          multiply: {
            id: 'multiply',
            title: 'MULTIPLY',
            category: 'Test Mode',
            focusQuestion: 'When are we in Multiply mode?',
            explanation:
              'What changes: Supporting variations of an approach we have evidence to repeat.\nWhat stays: The winning Angle and the story or presentation elements we believe support its performance.',
          },
          'multiply-caveat': {
            id: 'multiply-caveat',
            title: 'MULTIPLY CAVEAT',
            category: 'Caution',
            focusQuestion: 'What must we state for Multiply tests?',
            explanation:
              'For Multiply, state what must stay and why. A winning asset does not, by itself, prove which individual component caused the result.',
          },
        },
      },
      {
        id: '3.8',
        chapterNumber: '03',
        chapterTitle: 'Define the Change',
        chapterLocationTitle: 'DEFINE THE CHANGE',
        sectionNumber: '3.8',
        conceptTitle: 'Choose the Next Test',
        coreQuestion: 'How do we carry the decision into the brief?',
        memoryLine: 'STATE WHAT CHANGES, WHY IT MATTERS, AND WHAT STAYS.',
        pageKey: '3.8',
        details: {
          'structured-statement': {
            id: 'structured-statement',
            title: 'THE FINAL STRUCTURED STATEMENT',
            category: 'Brief Standard',
            focusQuestion: 'Turn the test decision into a brief-ready statement:',
            explanation:
              '1. AUDIENCE & QUESTION\n“For [audience], we want to learn [question]...”\n\n2. CHANGE & REASON\n“We will change [component and intended difference] because [reason]...”\n\n3. WHAT STAYS\n“We will keep [important elements] consistent...”\n\n4. TEST MODE\n“This is [Discover / Iteration / Multiply].”\n\nThe final structured statement unifies UA strategy and Creative production before work starts. It forces the team to articulate the precise audience, core question, isolated change, and required constants before writing copy or designing frames. Completing this statement ensures Creative understands what to communicate and UA understands how to evaluate the outcome.',
            takeaway: 'State what changes, why it matters, and what stays before briefing creative.',
          },
          'decision-criteria': {
            id: 'decision-criteria',
            title: '4 DECISION CRITERIA',
            category: 'Prioritization Framework',
            focusQuestion: 'How to choose among competing ideas?',
            explanation:
              '1. Most important unanswered question (relevance, message, proof)\n2. Meaningful change (what users notice/feel differently)\n3. Useful learning (changes next brief or repeats win)\n4. Match scope to resources (reliable evaluation)',
          },
          'unanswered-question': {
            id: 'unanswered-question',
            title: '01. MOST UNANSWERED QUESTION',
            category: 'Decision Criterion',
            focusQuestion: 'What uncertainty impacts commercial outcomes most?',
            explanation:
              'Focus tests on the most important unanswered question about user relevance, message clarity, or product proof.\n\nDo not spend testing capacity on questions that do not change business direction or unlock a new audience. A strong test answers what matters next for growth.',
            takeaway: 'Test what you most urgently need to learn, not what is easiest to change.',
          },
          'meaningful-change': {
            id: 'meaningful-change',
            title: '02. MEANINGFUL CHANGE',
            category: 'Decision Criterion',
            focusQuestion: 'Will users notice and feel a real difference?',
            explanation:
              'Prioritize changes where users will noticeably understand, feel, or evaluate the product differently.\n\nSubtle variations that go unnoticed produce noisy, inconclusive data and waste creative iteration cycles. If the user cannot perceive the difference in mobile viewing conditions, it is not a testable hypothesis.',
            takeaway: 'If users do not perceive a difference, the test cannot produce a clear answer.',
          },
          'useful-learning': {
            id: 'useful-learning',
            title: '03. USEFUL LEARNING',
            category: 'Decision Criterion',
            focusQuestion: 'Does the result inform the next brief?',
            explanation:
              'A test is worthwhile if the outcome directly changes what you do in the next brief, eliminates a hypothesis, or unlocks repeatable scaling.\n\nAsk: “If this variation wins, what do we scale? If it loses, what do we eliminate?” If neither answer changes future work, choose a more informative test.',
            takeaway: 'Every test should change the next brief or unlock repeatable scale.',
          },
          'match-scope': {
            id: 'match-scope',
            title: '04. MATCH SCOPE TO RESOURCES',
            category: 'Decision Criterion',
            focusQuestion: 'Can we produce and measure this reliably?',
            explanation:
              'Match the testing scope to available production resources and statistical evaluation windows so the test yields decisive conclusions within practical timelines.\n\nLarge multi-asset bets require adequate budget and sample sizes; fast turnaround tests should isolate tighter variables to ensure conclusive readouts.',
            takeaway: 'Ensure testing ambition matches evaluation feasibility and budget.',
          },
        },
      },
    ],
  },
  {
    id: '04',
    number: '04',
    title: 'How to Brief',
    pages: [
      {
        id: '4.1',
        chapterNumber: '04',
        chapterTitle: 'How to Brief',
        chapterLocationTitle: 'HOW TO BRIEF',
        sectionNumber: '4.1',
        conceptTitle: 'ASO Brief',
        coreQuestion: 'How do we plan screenshots that teach the app?',
        memoryLine: 'PLAN THE SET FIRST, THEN EACH SCREENSHOT.',
        pageKey: '4.1',
        details: {
          'strategic-context': {
            id: 'strategic-context',
            title: '1. STRATEGIC CONTEXT',
            category: 'UA Direction',
            focusQuestion: 'What guides this screenshot test?',
            explanation:
              'State the Goal (commercial outcome), Audience (who will see it, what matters to them, and in what store context), and Hypothesis (what we believe will work better and why).',
          },
          'planned-change': {
            id: 'planned-change',
            title: '2. PLANNED CHANGE',
            category: 'UA Direction',
            focusQuestion: 'What mode does this test belong to?',
            explanation:
              'Specify whether this test is Discover (new angle/direction), Iteration (optimizing winning angle), or Multiply (scaling proven winner), and explicitly name what must stay constant.',
          },
          'angle-product': {
            id: 'angle-product',
            title: '3. ANGLE & PRODUCT',
            category: 'UA Direction',
            focusQuestion: 'What are the reason to care and product truth limits?',
            explanation:
              'Define the Angle (the reason someone cares right now) and Product capabilities (actual screens, UX flows, and proof outputs). Product sets truthful limits of what can be promised.',
          },
          'job-of-set': {
            id: 'job-of-set',
            title: '4. JOB OF THE SET',
            category: 'UA Direction',
            focusQuestion: 'What is the order of benefits across screenshots?',
            explanation:
              'Map out the sequence of takeaways across the screenshot set. The opening screenshot must explain what the app does and why users want it; subsequent screens add distinct supporting proof.',
          },
          'delivery-boundaries': {
            id: 'delivery-boundaries',
            title: '5. DELIVERY & BOUNDARIES',
            category: 'UA Direction',
            focusQuestion: 'What are the deadlines and exploration freedom?',
            explanation:
              'State delivery deadlines, testing markets, technical constraints, and clearly identify where Production has full creative freedom to explore visual craft.',
          },
          'message-place': {
            id: 'message-place',
            title: '1. MESSAGE & PLACE IN SET',
            category: 'CPC Specification',
            focusQuestion: 'What is the single takeaway of this screenshot?',
            explanation:
              'Each screenshot must communicate one single main takeaway. Never crowd multiple competing claims into one frame.',
          },
          words: {
            id: 'words',
            title: '2. WORDS',
            category: 'CPC Specification',
            focusQuestion: 'What do headlines and captions say?',
            explanation:
              'Write the exact headline and short supporting copy. Text must fit cleanly at mobile phone thumbnail scale without obstructing the app demonstration.',
          },
          'visual-content': {
            id: 'visual-content',
            title: '3. VISUAL CONTENT',
            category: 'CPC Specification',
            focusQuestion: 'What appears on screen?',
            explanation:
              'Specify character, situation, action, and product demonstration. Visuals and copy must explain each other within the frame.',
          },
          'first-attention': {
            id: 'first-attention',
            title: '4. FIRST ATTENTION',
            category: 'CPC Specification',
            focusQuestion: 'What does the user notice first at phone size?',
            explanation:
              'Design the layout so the eye is immediately drawn to the focal point—whether that is the character emotion, key headline benefit, or app result transformation.',
          },
          'design-freedom': {
            id: 'design-freedom',
            title: '5. DESIGN FREEDOM',
            category: 'CPC Specification',
            focusQuestion: 'Where does Production craft take the lead?',
            explanation:
              'Leave room for Designers to choose typography layout, color contrast, background depth, and visual effects that best deliver the briefed takeaway.',
          },
          'set-readability': {
            id: 'set-readability',
            title: 'READ THE FULL SET TOGETHER',
            category: 'Supporting Rule',
            focusQuestion: 'How to review the plan before production?',
            explanation:
              'Read opening screenshots together: can users tell what app offers and why they want it? Read full set: does each screenshot add useful info? If copy changes, check visual again.',
          },
          'plan-set-first': {
            id: 'plan-set-first',
            title: 'PLAN THE SET BEFORE INDIVIDUAL SCREENSHOTS',
            category: 'Supporting Rule',
            focusQuestion: 'Why plan the whole set first?',
            explanation:
              'Plan the job of the whole screenshot set before detailing individual frames. Reading the set together ensures the app value unfolds logically and prevents repeating identical feature claims.',
          },
          'not-feature-list': {
            id: 'not-feature-list',
            title: 'A FEATURE LIST IS NOT A SCREENSHOT PLAN',
            category: 'Supporting Rule',
            focusQuestion: 'Why avoid feature lists in briefs?',
            explanation:
              'A list of feature names tells users what buttons exist; a screenshot plan connects each feature to a distinct user benefit, situational context, and emotional payoff.',
          },
        },
      },
      {
        id: '4.2',
        chapterNumber: '04',
        chapterTitle: 'How to Brief',
        chapterLocationTitle: 'HOW TO BRIEF',
        sectionNumber: '4.2',
        conceptTitle: 'Video Ads Brief',
        coreQuestion: 'How do we structure story beats for motion?',
        memoryLine: 'THE APP MUST ANSWER THE HOOK; THE PROOF MUST SUPPORT THE PROMISE.',
        pageKey: '4.2',
        details: {
          'hook-beat': {
            id: 'hook-beat',
            title: 'BEAT 01: HOOK',
            category: 'Story Beat',
            focusQuestion: 'How do we capture initial attention?',
            explanation:
              'Create an immediate expectation or intrigue that viewers want answered. Give them a reason to keep watching. The app must truthfully answer this expectation.',
          },
          'connection-beat': {
            id: 'connection-beat',
            title: 'BEAT 02: CONNECTION TO APP',
            category: 'Story Beat',
            focusQuestion: 'How does the app enter the narrative?',
            explanation:
              'Explain why the app belongs in the story. Connect the hook problem or curiosity naturally to opening the app, avoiding abrupt leaps.',
          },
          'demo-payoff-beat': {
            id: 'demo-payoff-beat',
            title: 'BEAT 03: DEMONSTRATION / PAYOFF',
            category: 'Story Beat',
            focusQuestion: 'How is the promise proven?',
            explanation:
              'Demonstrate the app in action and show real output proof. Give viewers sufficient screen time (2–4 seconds) to understand what happened and verify the promise.',
          },
          'close-beat': {
            id: 'close-beat',
            title: 'BEAT 04: CLOSE / NEXT ACTION',
            category: 'Story Beat',
            focusQuestion: 'What should the viewer do next?',
            explanation:
              'Provide a clear invitation or explicit call-to-action directing the user to install or try the app.',
          },
          'buildable-scenes': {
            id: 'buildable-scenes',
            title: 'MAKE EACH SCENE BUILDABLE',
            category: 'Scene Specification',
            focusQuestion: 'What 3 elements must each scene specify?',
            explanation:
              'SEE: Character, role, action, and app proof footage.\nHEAR OR READ: Dialogue, voice-over, or on-screen text.\nPURPOSE: What viewers should understand or feel.',
          },
          'beat-flexibility': {
            id: 'beat-flexibility',
            title: 'BEATS ARE NOT A RIGID 4-SCENE FORMAT',
            category: 'Supporting Rule',
            focusQuestion: 'Can beats combine or change order?',
            explanation:
              'Beats can combine or appear in different order when the idea calls for it. But the app MUST answer the hook, and proof MUST support the promise.',
          },
        },
      },
      {
        id: '4.3',
        chapterNumber: '04',
        chapterTitle: 'How to Brief',
        chapterLocationTitle: 'HOW TO BRIEF',
        sectionNumber: '4.3',
        conceptTitle: 'Ideas & References',
        coreQuestion: 'How do we find and adapt references?',
        memoryLine: 'BORROW THE STRUCTURE, NOT JUST THE SURFACE LOOK.',
        pageKey: '4.3',
        details: {
          'step-explore': {
            id: 'step-explore',
            title: 'STEP 01: EXPLORE WIDELY',
            category: 'Reference Cycle',
            focusQuestion: 'Where do we look for inspiration?',
            explanation:
              'Collect ads, memes, films, trends, social media formats, and real user behavior across diverse categories. Do not restrict inspiration to direct app competitors.',
          },
          'step-understand': {
            id: 'step-understand',
            title: 'STEP 02: UNDERSTAND WHY',
            category: 'Reference Cycle',
            focusQuestion: 'Why does the reference work?',
            explanation:
              'Deconstruct what makes the reference effective: is it the emotional tension, pacing rhythm, visual contrast, camera viewpoint, or unexpected surprise?',
          },
          'step-create': {
            id: 'step-create',
            title: 'STEP 03: CREATE OPTIONS',
            category: 'Reference Cycle',
            focusQuestion: 'How do we apply the underlying structure?',
            explanation:
              'Translate the structural mechanism to your app, audience, and value proposition. Borrow the storytelling mechanics, not just surface aesthetics.',
          },
          'step-refine': {
            id: 'step-refine',
            title: 'STEP 04: REFINE IDEAS',
            category: 'Reference Cycle',
            focusQuestion: 'How do we test feasibility and truth?',
            explanation:
              'Refine ideas against Section 3 testing criteria, production feasibility, and authentic product truth limits.',
          },
          'search-formula': {
            id: 'search-formula',
            title: 'SEARCH FORMULA',
            category: 'Search Technique',
            focusQuestion: 'How to name the decision before searching?',
            explanation:
              '[component or structure] + [communication job] + [context or style, if useful].\nExamples: "before after comparison layout", "reaction reveal video hook", "step by step product demo".',
          },
          'reference-instruction': {
            id: 'reference-instruction',
            title: 'INSTRUCTION BESIDE THE REFERENCE',
            category: 'Brief Standard',
            focusQuestion: 'What must accompany every reference?',
            explanation:
              'Use this for: [component]\nBorrow: [specific structure or treatment]\nAdapt: [what must change for our audience & app]\nKeep: [elements fixed by hypothesis]. Avoid saying "make something like this" without explaining the choice.',
          },
        },
      },
    ],
  },
  {
    id: '05',
    number: '05',
    title: 'Review & Feedback',
    pages: [
      {
        id: '5.1',
        chapterNumber: '05',
        chapterTitle: 'Review & Feedback',
        chapterLocationTitle: 'REVIEW & FEEDBACK',
        sectionNumber: '5.1',
        conceptTitle: 'Review Against the Brief',
        coreQuestion: 'Does the output deliver what was briefed?',
        memoryLine: 'VIEW AS A USER FIRST, THEN VERIFY THE PROMISE AND PLANNED CHANGE.',
        pageKey: '5.1',
        details: {
          'check-message': {
            id: 'check-message',
            title: 'CHECK MESSAGE',
            category: 'Brief Review',
            focusQuestion: 'Is the reason to care understandable?',
            explanation:
              'Return to: Audience + Angle + main message.\nUA confirms: Character, situation and words support the same takeaway in normal viewing conditions.',
          },
          'check-story-proof': {
            id: 'check-story-proof',
            title: 'CHECK STORY AND PROOF',
            category: 'Brief Review',
            focusQuestion: 'Can viewers follow connection to proof?',
            explanation:
              'Return to: Content & Storytelling + Product.\nUA confirms: The viewer can follow the connection and see evidence for the promise. The app’s role is clear.',
          },
          'check-planned-change': {
            id: 'check-planned-change',
            title: 'CHECK PLANNED CHANGE',
            category: 'Brief Review',
            focusQuestion: 'Is the requested difference visible?',
            explanation:
              'Return to: Hypothesis + change + keep.\nUA confirms: Required constants remain consistent so the comparison still answers the planned question.',
          },
          'viewing-condition': {
            id: 'viewing-condition',
            title: 'REALISTIC MOBILE CONDITIONS',
            category: 'Review Protocol',
            focusQuestion: 'How should creative assets be evaluated?',
            explanation:
              'Always evaluate creative under realistic mobile conditions: on an actual smartphone display, at typical brightness, and in both sound-on and sound-off states. Do not judge mobile legibility exclusively on high-resolution desktop monitors.',
          },
        },
      },
      {
        id: '5.2',
        chapterNumber: '05',
        chapterTitle: 'Review & Feedback',
        chapterLocationTitle: 'REVIEW & FEEDBACK',
        sectionNumber: '5.2',
        conceptTitle: 'Review ASO',
        coreQuestion: 'What do users notice and understand on the store page?',
        memoryLine: 'DO NOT AUDIT EVERY FONT; CHECK IF THE DESIGN DELIVERS THE MESSAGE.',
        pageKey: '5.2',
        details: {
          'first-attention': {
            id: 'first-attention',
            title: 'FIRST ATTENTION',
            category: 'ASO Review Focus',
            focusQuestion: 'What does the user see at glance speed?',
            explanation:
              'Verify whether the headline or main visual immediately communicates the intended benefit under real store browsing conditions. The user should absorb what matters without zooming in, squinting, or reading fine print.',
          },
          'message-evidence': {
            id: 'message-evidence',
            title: 'MESSAGE AND EVIDENCE',
            category: 'ASO Review Focus',
            focusQuestion: 'Do copy and visuals tell the same story?',
            explanation:
              'Check whether copy, character expression, and screenshot evidence reinforce the exact same takeaway. Confirm the product demonstration or transformation is accurate and visually credible.',
          },
          'across-set': {
            id: 'across-set',
            title: 'ACROSS THE SET',
            category: 'ASO Review Focus',
            focusQuestion: 'Does the sequence develop a narrative?',
            explanation:
              'Ensure each screenshot does its assigned job and introduces new, useful information. The order should build a progressive narrative rather than repeat an unstructured feature list.',
          },
          'aso-review-rule': {
            id: 'aso-review-rule',
            title: 'ASO REVIEW PRINCIPLES',
            category: 'Review Guidance',
            focusQuestion: 'How to avoid micromanaging ASO design?',
            explanation:
              'Compare against baseline where relevant. Verify the changed component and ensure elements that were supposed to stay constant did. Do not turn review into an audit of every font, shadow, or micro-spacing detail; focus on whether the design delivers the intended message at glance speed.',
          },
        },
      },
      {
        id: '5.3',
        chapterNumber: '05',
        chapterTitle: 'Review & Feedback',
        chapterLocationTitle: 'REVIEW & FEEDBACK',
        sectionNumber: '5.3',
        conceptTitle: 'Review Video Ads',
        coreQuestion: 'Does the video connect the hook to the product proof?',
        memoryLine: 'CHECK HOOK → APP AND PROMISE → PROOF AT NORMAL SPEED.',
        pageKey: '5.3',
        details: {
          'hook-to-app': {
            id: 'hook-to-app',
            title: 'HOOK → APP',
            category: 'Video Connection',
            focusQuestion: 'Does the opening create an expectation the app answers?',
            explanation:
              'Verify whether the opening expectation connects naturally to the featured app capability rather than feeling like arbitrary clickbait. If disconnected, revisit: Hook, main message, character, situation and story connection.',
          },
          'promise-to-proof': {
            id: 'promise-to-proof',
            title: 'PROMISE → PROOF',
            category: 'Video Connection',
            focusQuestion: 'Is the benefit actually proven?',
            explanation:
              'Explain how to verify whether the demonstrated action and app result provide enough evidence for the promised benefit at normal playback speed. If the proof is rushed or difficult to comprehend, revisit: Product demonstration, scene order, framing, and time to understand.',
          },
          'words-picture-sound': {
            id: 'words-picture-sound',
            title: 'WORDS + PICTURE + SOUND',
            category: 'Video Connection',
            focusQuestion: 'Do all three tracks support the same meaning?',
            explanation:
              'Verify that dialogue, on-screen text, visual action, and audio design communicate the same emotion and message. Check whether critical information is preserved when viewing muted under mobile conditions. If unclear, revisit: Copy, character performance, text readability, pacing and audio balance.',
          },
        },
      },
      {
        id: '5.4',
        chapterNumber: '05',
        chapterTitle: 'Review & Feedback',
        chapterLocationTitle: 'REVIEW & FEEDBACK',
        sectionNumber: '5.4',
        conceptTitle: 'Give Feedback',
        coreQuestion: 'How do we give feedback that leads to a useful revision?',
        memoryLine: 'POINT TO THE GAP, EXPLAIN ITS IMPACT, KEEP THE SOLUTION OPEN.',
        pageKey: '5.4',
        details: {
          'feedback-gap': {
            id: 'feedback-gap',
            title: 'PART 01: POINT TO THE GAP',
            category: 'Feedback Step',
            focusQuestion: 'Where specifically is the issue?',
            explanation:
              'Name the exact timestamp, visual element, or screenshot number so the creative team knows precisely where the concern lies.',
          },
          'feedback-impact': {
            id: 'feedback-impact',
            title: 'PART 02: EXPLAIN THE IMPACT',
            category: 'Feedback Step',
            focusQuestion: 'What communication fails?',
            explanation:
              'Explain what communication breakdown occurs (e.g., the proof is unreadable at normal speed, the hook fails to connect to the app, or the core benefit is lost).',
          },
          'feedback-solution': {
            id: 'feedback-solution',
            title: 'PART 03: KEEP THE SOLUTION OPEN',
            category: 'Feedback Step',
            focusQuestion: 'Who determines the fix?',
            explanation:
              'Describe the required outcome and keep the technical solution open. Let Designers and Editors use their visual and editing craft to propose the most effective execution.',
          },
          'feedback-template': {
            id: 'feedback-template',
            title: 'FEEDBACK TEMPLATE',
            category: 'Feedback Formula',
            focusQuestion: 'How to write structured feedback?',
            explanation:
              '“I notice [specific detail / screenshot / timestamp]. The brief needs [intended understanding or test condition]. Right now, [gap]. Please make [required outcome] clear while keeping [fixed elements].”',
          },
          'required-fix': {
            id: 'required-fix',
            title: 'REQUIRED FIX',
            category: 'Issue Triage',
            focusQuestion: 'When is a change mandatory?',
            explanation:
              'The creative misses the agreed message, fails product truth, violates test conditions, or has unreadable text. Mandatory fix before launching the test.',
          },
          'discuss-first': {
            id: 'discuss-first',
            title: 'DISCUSS FIRST',
            category: 'Issue Triage',
            focusQuestion: 'When must the team realign?',
            explanation:
              'The creative suggests a change to the Angle, core story, or test scope. Requires returning to the brief together before modifying assets.',
          },
          'personal-preference': {
            id: 'personal-preference',
            title: 'PERSONAL PREFERENCE',
            category: 'Issue Triage',
            focusQuestion: 'How to handle subjective taste?',
            explanation:
              'Subjective aesthetic opinion. Explicitly label it as personal taste; do not make it mandatory or block delivery.',
          },
        },
      },
    ],
  },
  {
    id: '06',
    number: '06',
    title: 'Aesthetics',
    pages: [
      {
        id: '6.1',
        chapterNumber: '06',
        chapterTitle: 'Aesthetics',
        chapterLocationTitle: 'AESTHETICS',
        sectionNumber: '6.1',
        conceptTitle: 'Same Image, Different Eyes',
        coreQuestion: 'Why do different eyes see the same image differently?',
        memoryLine: 'OUR TASTE HAS A HISTORY: FAMILIARITY, EXPERIENCE, ASSOCIATION.',
        pageKey: '6.1',
        details: {
          familiarity: {
            id: 'familiarity',
            title: 'FAMILIARITY',
            category: 'Aesthetic Perception',
            focusQuestion: 'What we see meets what we know',
            explanation:
              'A style we have seen and enjoyed before may feel comfortable. Someone else may find it predictable. What feels fresh to one cohort can feel generic to another.',
          },
          experience: {
            id: 'experience',
            title: 'EXPERIENCE',
            category: 'Aesthetic Perception',
            focusQuestion: 'Trained sensitivity to composition',
            explanation:
              'A designer may notice awkward spacing, conflicting light sources, or an unusual crop that another viewer does not consciously notice but unconsciously feels.',
          },
          association: {
            id: 'association',
            title: 'ASSOCIATION',
            category: 'Aesthetic Perception',
            focusQuestion: 'Personal memories and cultural triggers',
            explanation:
              'Colors, clothes, places, and visual styles remind people of different personal experiences. The exact same image can feel nostalgic to one person and dated to another.',
          },
          'taste-history': {
            id: 'taste-history',
            title: 'OUR TASTE HAS A HISTORY',
            category: 'Aesthetic Principle',
            focusQuestion: 'Why is creative reaction never purely objective?',
            explanation:
              'Every person views creative through their past exposure, craft training, and personal memories. When critiquing work, separate personal taste from whether the asset communicates the intended benefit to the target audience.',
          },
        },
      },
      {
        id: '6.2',
        chapterNumber: '06',
        chapterTitle: 'Aesthetics',
        chapterLocationTitle: 'AESTHETICS',
        sectionNumber: '6.2',
        conceptTitle: 'Novelty & Discovery',
        coreQuestion: 'How does an everyday subject become fresh?',
        memoryLine: 'FRESHNESS COMES FROM HOW WE LOOK, NOT ONLY WHAT WE LOOK AT.',
        pageKey: '6.2',
        details: {
          'seeing-principle': {
            id: 'seeing-principle',
            title: 'UNFAMILIAR WAYS OF SEEING',
            category: 'Visual Technique',
            focusQuestion: 'How does fresh visual interest emerge?',
            explanation:
              'Freshness does not require exotic subjects. Looking at familiar objects from an unfamiliar viewpoint transforms shape, scale, depth, and curiosity.',
          },
          'eye-level': {
            id: 'eye-level',
            title: '01. EYE LEVEL',
            category: 'Framing Technique',
            focusQuestion: 'Baseline human familiarity',
            explanation:
              'The standard human viewpoint. Establishes immediate relatability, natural connection, and unforced authenticity.',
          },
          overhead: {
            id: 'overhead',
            title: '02. OVERHEAD',
            category: 'Framing Technique',
            focusQuestion: 'Bird’s-eye / geometric pattern',
            explanation:
              'Looking straight down flattens 3D depth into striking 2D geometry, revealing layout order, tabletop arrangements, and clean patterns.',
          },
          'low-angle': {
            id: 'low-angle',
            title: '03. LOW ANGLE',
            category: 'Framing Technique',
            focusQuestion: 'Monumental stature / heroic presence',
            explanation:
              'Looking upward gives the subject heroic scale, dynamic power, and towering visual importance against the background.',
          },
          'extreme-close-up': {
            id: 'extreme-close-up',
            title: '04. EXTREME CLOSE-UP',
            category: 'Framing Technique',
            focusQuestion: 'Tactile intimacy and texture',
            explanation:
              'Punching into tight details reveals tactile textures, subtle eye emotion, and fine product craftsmanship that normally go unnoticed.',
          },
          'unexpected-scale': {
            id: 'unexpected-scale',
            title: '05. UNEXPECTED SCALE',
            category: 'Framing Technique',
            focusQuestion: 'Surprising proportion differences',
            explanation:
              'Placing very large and very small objects in close proximity sparks immediate curiosity and invites second-look engagement.',
          },
          reflection: {
            id: 'reflection',
            title: '06. REFLECTION',
            category: 'Framing Technique',
            focusQuestion: 'Layered dual surfaces',
            explanation:
              'Using glass, water, or polished surfaces introduces layered reflections, depth ambiguity, and poetic atmosphere.',
          },
          'surprising-crop': {
            id: 'surprising-crop',
            title: '07. SURPRISING CROP',
            category: 'Framing Technique',
            focusQuestion: 'Deliberate tension and curiosity',
            explanation:
              'Cropping off part of a familiar face or object forces the viewer’s brain to actively complete the image, creating visual tension.',
          },
        },
      },
      {
        id: '6.3',
        chapterNumber: '06',
        chapterTitle: 'Aesthetics',
        chapterLocationTitle: 'AESTHETICS',
        sectionNumber: '6.3',
        conceptTitle: 'Clarity & Intention',
        coreQuestion: 'What makes an arrangement feel resolved?',
        memoryLine: 'DEFINITE CHOICES REMOVE HESITATION: PLACEMENT, EDGES, CUTS.',
        pageKey: '6.3',
        details: {
          placement: {
            id: 'placement',
            title: 'PLACEMENT',
            category: 'Clarity Principle',
            focusQuestion: 'Centered, off-center, or deliberately cropped',
            explanation:
              'A clearly centered subject feels settled. An intentional rule-of-thirds placement creates dynamic off-center balance. A deliberate bleed creates closeness. Accidental almost-centered placement creates hesitation.',
          },
          edges: {
            id: 'edges',
            title: 'EDGES',
            category: 'Clarity Principle',
            focusQuestion: 'Separate clearly or overlap clearly',
            explanation:
              'When two shapes barely touch (tangent), they look awkwardly stuck together. A visible gap or a deliberate overlap makes their relationship unmistakable to the eye.',
          },
          cuts: {
            id: 'cuts',
            title: 'CUTS',
            category: 'Clarity Principle',
            focusQuestion: 'Clear change or convincing continuation',
            explanation:
              'Two shots with only a slight shift feel like a visual glitch. Clearly change the framing (decisive cut) or carry movement/shape cleanly across the cut (continuous flow). Smoothness does not require soft transition effects.',
          },
          'smoothness-rule': {
            id: 'smoothness-rule',
            title: 'SMOOTHNESS IS FEELING OF FLOW',
            category: 'Editing Principle',
            focusQuestion: 'Does smooth editing require soft transitions?',
            explanation:
              'Smoothness refers to the cognitive feeling of uninterrupted flow, not soft dissolve effects. Clear, decisive cuts with continuous motion or eye-trace feel cleaner and more confident than hesitant cross-fades.',
          },
        },
      },
      {
        id: '6.4',
        chapterNumber: '06',
        chapterTitle: 'Aesthetics',
        chapterLocationTitle: 'AESTHETICS',
        sectionNumber: '6.4',
        conceptTitle: 'Balance / Harmony / Rhythm',
        coreQuestion: 'What makes components feel like they belong together?',
        memoryLine: 'THE FEELING COMES FROM THE WHOLE ARRANGEMENT, NOT EQUAL OBJECT COUNTS.',
        pageKey: '6.4',
        details: {
          balance: {
            id: 'balance',
            title: 'BALANCE: THE FRAME FEELS SUPPORTED',
            category: 'Aesthetic Quality',
            focusQuestion: 'How does visual weight distribute?',
            explanation:
              'A large, bright object on one side makes the composition heavy. Space, a smaller contrasting object, or another focal point balances that weight. Asymmetry can be just as balanced as symmetry.',
          },
          harmony: {
            id: 'harmony',
            title: 'HARMONY: THE PIECES SHARE SOMETHING',
            category: 'Aesthetic Quality',
            focusQuestion: 'Do elements look like they come from the same world?',
            explanation:
              'A photo, headline, and graphic shape may look good alone, but disconnect if lighting, color, or texture conflict. Repeating selected qualities creates unity for contrast to stand out against.',
          },
          rhythm: {
            id: 'rhythm',
            title: 'RHYTHM: REPETITION GIVES THE EYE A PATTERN',
            category: 'Aesthetic Quality',
            focusQuestion: 'How do spacing, motion, and sound flow?',
            explanation:
              'Repeated spacing, shapes, or camera movements create satisfying flow. A well-placed variation adds delightful surprise. In video, movement and sound arriving synchronously feels deeply satisfying.',
          },
          'breathing-room': {
            id: 'breathing-room',
            title: 'BREATHING ROOM: DETAIL HAS SPACE AROUND IT',
            category: 'Aesthetic Quality',
            focusQuestion: 'Why does negative space matter?',
            explanation:
              'When every area is busy, the image feels crowded. Quieter areas give detailed areas room to be appreciated. Organization requires clear groups, rhythm, and pauses.',
          },
        },
      },
      {
        id: '6.5',
        chapterNumber: '06',
        chapterTitle: 'Aesthetics',
        chapterLocationTitle: 'AESTHETICS',
        sectionNumber: '6.5',
        conceptTitle: 'Why Correct Can Still Feel Ordinary',
        coreQuestion: 'What transforms technical accuracy into memorable creative?',
        memoryLine: 'CRAFT MAKES CHOICES WORK; CREATIVE JUDGMENT GIVES THEM PERSONALITY.',
        pageKey: '6.5',
        details: {
          'craft-vs-judgment': {
            id: 'craft-vs-judgment',
            title: 'CRAFT VS. CREATIVE JUDGMENT',
            category: 'Aesthetic Foundation',
            focusQuestion: 'Why can technically correct work still feel ordinary?',
            explanation:
              'Clean edges, readable type, and balanced spacing remove distractions. But what transforms work from merely technically correct into memorable creative is an unexpected viewpoint, expressive pose, striking proportion, or surprising combination.\n\nCraft makes choices work; judgment gives them personality. When reviewing aesthetic quality, verify both layers: Did craft remove accidental awkwardness? And did creative judgment provide emotional resonance and distinction?',
            takeaway: 'Craft makes choices work; creative judgment gives them personality.',
          },
          'feeling-fresh': {
            id: 'feeling-fresh',
            title: 'NOVELTY & DISCOVERY',
            category: 'Aesthetic Diagnostic',
            focusQuestion: '“There is something fresh here.”',
            explanation:
              'An unexpected viewpoint, striking proportion, or fresh association captures immediate curiosity and breaks scroll fatigue.\n\n• What to check: Does the image or scene show the subject from an unfamiliar perspective (e.g. overhead, low-angle, extreme close-up, surprising crop)?\n• Diagnostic question: Would someone stop scrolling because they haven’t seen this exact framing a thousand times before?',
            takeaway: 'Freshness comes from how we look, not only what we look at.',
          },
          'feeling-awkward': {
            id: 'feeling-awkward',
            title: 'CLARITY & INTENTION',
            category: 'Aesthetic Diagnostic',
            focusQuestion: '“Nothing feels accidentally awkward.”',
            explanation:
              'Decisive placement, clean edges, and intentional cuts remove hesitation and project professional confidence.\n\n• What to check: Are placements either centered or boldly off-center? Do edges either separate clearly with breathing room or overlap decisively? Do video cuts change angle and scale decisively?\n• Diagnostic question: Is every visual relationship clearly intended, or does something look like an accident?',
            takeaway: 'Decisive visual choices remove hesitation.',
          },
          'feeling-together': {
            id: 'feeling-together',
            title: 'BALANCE, HARMONY & RHYTHM',
            category: 'Aesthetic Diagnostic',
            focusQuestion: '“The parts feel good together.”',
            explanation:
              'Visual weight feels supported, elements share lighting and palette, and rhythmic repetition creates a cohesive world.\n\n• What to check: Is visual weight balanced across the frame? Do characters, background, and typography share the same lighting and color temperature? Does audio and visual pacing flow with natural cadence?\n• Diagnostic question: Does everything look and sound like it belongs to the same world?',
            takeaway: 'Cohesive composition makes diverse elements feel unified.',
          },
        },
      },
    ],
  },
];

export const ALL_PAGES: PlaybookPage[] = PLAYBOOK_CHAPTERS.flatMap(
  (c) => c.pages
);
