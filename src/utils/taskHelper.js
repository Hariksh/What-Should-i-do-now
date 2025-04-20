const tasks = {
  Happy: {
    Low: {
      Quick: [
        "Watch some funny cat videos to lighten up your mood.",
        "Send a sincere compliment to someone and make their day.",
        "Take a short dance break and feel the joy."
      ],
      Moderate: [
        "Bake some cookies to indulge in a sweet treat.",
        "Call a friend and have a good chat to brighten your day.",
        "Create a happy playlist filled with your favorite upbeat tunes."
      ],
      Plenty: [
        "Plan a picnic to enjoy the outdoors and good company.",
        "Host a game night with friends for some fun and laughter.",
        "Start a vlog to share your thoughts and experiences."
      ]
    },
    Medium: {
      Quick: [
        "Go for a walk while listening to music and unwind.",
        "Water your plants and give them some love.",
        "Whistle your favorite tune to bring out some joy."
      ],
      Moderate: [
        "Cook a new recipe to challenge your cooking skills.",
        "Watch a comedy to get some good laughs.",
        "Write a letter to your future self and reflect on your journey."
      ],
      Plenty: [
        "Organize an event for your friends and make lasting memories.",
        "Plan a getaway to recharge and experience something new.",
        "Start a blog to share your thoughts, ideas, and experiences."
      ]
    },
    High: {
      Quick: [
        "Do some jumping jacks to get your blood pumping.",
        "Jump on a trampoline and feel the excitement.",
        "Give someone a group hug and spread some positive energy."
      ],
      Moderate: [
        "Host a karaoke night and sing your heart out.",
        "Attend a sports game and cheer on your team.",
        "Organize a flash mob for some spontaneous fun."
      ],
      Plenty: [
        "Host a themed party and let everyone get creative with their outfits.",
        "Buy concert tickets and enjoy live music with friends.",
        "Plan a road trip to explore new places and make lasting memories."
      ]
    }
  },
  Sad: {
    Low: {
      Quick: [
        "Sit down for a warm tea ritual and relax.",
        "Wrap yourself in a weighted blanket to feel comforted.",
        "Light a candle and meditate to calm your mind."
      ],
      Moderate: [
        "Create a memory scrapbook and reminisce about happy times.",
        "Treat yourself to a relaxing bath with bath bombs.",
        "Watch nostalgic movies that bring back fond memories."
      ],
      Plenty: [
        "Take a nature retreat to relax and recharge.",
        "Schedule a therapy session to work through your emotions.",
        "Start an art journal to express your feelings through creativity."
      ]
    },
    Medium: {
      Quick: [
        "Use affirmation cards to boost your mood and self-confidence.",
        "Try light therapy to brighten your environment and your mood.",
        "Diffuse herbal aromatherapy to create a calming atmosphere."
      ],
      Moderate: [
        "Bake something therapeutic like bread or cookies.",
        "Tend to your garden and connect with nature.",
        "Take a pottery class and learn something new and soothing."
      ],
      Plenty: [
        "Book a spa weekend to pamper yourself and unwind.",
        "Start creative writing as an outlet for your emotions.",
        "Volunteer for a cause that resonates with you."
      ]
    },
    High: {
      Quick: [
        "Try a power workout to release any built-up tension.",
        "Take a cold shower to invigorate yourself and reset.",
        "Hit a punching bag to release frustration."
      ],
      Moderate: [
        "Give your room a makeover to refresh your space and energy.",
        "Evaluate your life and make changes for personal growth.",
        "Consider a career change if you're feeling unfulfilled."
      ],
      Plenty: [
        "Attend a transformative retreat to focus on personal development.",
        "Create a bucket list and start working toward your dreams.",
        "Work on your identity through self-reflection and growth."
      ]
    }
  },
  Bored: {
    Low: {
      Quick: [
        "Watch a funny YouTube video to lighten your mood.",
        "Organize your desk or workspace for a fresh start.",
        "Take a quick power nap to recharge your energy."
      ],
      Moderate: [
        "Call a friend and talk about something fun to break the boredom.",
        "Start a jigsaw puzzle to engage your mind.",
        "Try a new hobby like knitting or origami."
      ],
      Plenty: [
        "Learn a new skill online like photography or coding.",
        "Organize a DIY home improvement project to boost creativity.",
        "Join an online community to explore new interests."
      ]
    },
    Medium: {
      Quick: [
        "Do a crossword puzzle or a Sudoku to stimulate your mind.",
        "Try making a playlist with your favorite songs.",
        "Catch up on a show or movie you've been meaning to watch."
      ],
      Moderate: [
        "Read a book or audiobook that you’ve been meaning to explore.",
        "Write in a journal to explore your thoughts and ideas.",
        "Take a walk and explore a new part of your neighborhood."
      ],
      Plenty: [
        "Enroll in an online course to learn something new and useful.",
        "Join a local book club to read and discuss books with others.",
        "Start a garden or home planting project to relax and connect with nature."
      ]
    }
  },
  Stressed: {
    Low: {
      Quick: [
        "Take a few deep breaths to calm your mind.",
        "Listen to calming music for a few minutes.",
        "Close your eyes for a few moments to reset."
      ],
      Moderate: [
        "Watch a guided meditation video to relax your mind.",
        "Read a self-help article on stress management.",
        "Do a gentle yoga session to release stress."
      ],
      Plenty: [
        "Take a weekend getaway to disconnect and recharge.",
        "Attend a mindfulness workshop to learn stress-relieving techniques.",
        "Try aromatherapy with essential oils to relax."
      ]
    },
    Medium: {
      Quick: [
        "Take a 5-minute walk to clear your head.",
        "Try progressive muscle relaxation techniques.",
        "Hydrate and drink some water to boost your energy."
      ],
      Moderate: [
        "Declutter your workspace to reduce feelings of chaos.",
        "Call a friend to talk and get your mind off things.",
        "Try journaling about your thoughts and feelings."
      ],
      Plenty: [
        "Join a stress management group to share and learn strategies.",
        "Take a break from social media to reduce information overload.",
        "Create a personal stress-relief toolkit with activities that help you."
      ]
    },
    High: {
      Quick: [
        "Do a quick workout to release built-up stress.",
        "Try a burst of high-intensity interval training (HIIT).",
        "Go for a brisk walk or run to shake off tension."
      ],
      Moderate: [
        "Do some intense cardio to release stress hormones.",
        "Try a dance routine to get your body moving and clear your head.",
        "Go for a jog and use the time to process your thoughts."
      ],
      Plenty: [
        "Take a day off for self-care to recharge both physically and mentally.",
        "Start a stress-reduction habit like yoga or mindfulness.",
        "Get outside and spend time in nature to clear your mind."
      ]
    }
  },
  Lazy: {
    Low: {
      Quick: [
        "Listen to a podcast while relaxing.",
        "Watch a short video to entertain yourself.",
        "Sit back and enjoy a cup of tea or coffee."
      ],
      Moderate: [
        "Watch a series of short episodes from a TV show.",
        "Call a friend for a light chat.",
        "Read an article or book chapter that interests you."
      ],
      Plenty: [
        "Indulge in a long movie marathon with your favorite snacks.",
        "Try out a new hobby like knitting or crocheting.",
        "Catch up on your favorite shows or movies on streaming platforms."
      ]
    },
    Medium: {
      Quick: [
        "Take a quick nap to recharge your energy.",
        "Organize a small area of your room or desk.",
        "Do some light stretching to ease your body."
      ],
      Moderate: [
        "Do some light reading to relax your mind.",
        "Write a short to-do list to motivate yourself.",
        "Try out a new simple recipe for lunch or dinner."
      ],
      Plenty: [
        "Reorganize your living space to create a more pleasant environment.",
        "Set goals for the next week or month and break them down into smaller tasks.",
        "Start a creative project like painting, journaling, or crafting."
      ]
    },
    High: {
      Quick: [
        "Get active with some jumping jacks or burpees.",
        "Take a brisk walk around the block to get moving.",
        "Dance to your favorite song for 5 minutes."
      ],
      Moderate: [
        "Complete a full workout session to increase energy.",
        "Start a home project like organizing or decluttering.",
        "Take a dance or fitness class to learn something new."
      ],
      Plenty: [
        "Sign up for a fitness class and work on your endurance.",
        "Take up a new sport or physical activity like rock climbing.",
        "Plan a physical activity day with friends or family."
      ]
    }
  },
  Productive: {
    Low: {
      Quick: [
        "Read a motivational quote to get started.",
        "Plan your next task in a to-do list.",
        "Clear up your email inbox."
      ],
      Moderate: [
        "Tackle a small but important task on your to-do list.",
        "Rearrange your work area to create a productive atmosphere.",
        "Watch a productivity YouTube video to get inspired.",
      ],
      Plenty: [
        "Start a major project you've been putting off.",
        "Take a deep dive into a new skill or topic.",
        "Write a detailed plan for your personal development.",
      ]
    },
    Medium: {
      Quick: [
        "Complete a quick, small task that you've been avoiding.",
        "Break down a big task into smaller, manageable steps.",
        "Send a follow-up email to someone.",
      ],
      Moderate: [
        "Set aside 30 minutes to work on a specific task.",
        "Do a focused work session with no distractions.",
        "Make progress on a long-term project.",
      ],
      Plenty: [
        "Spend a few hours working on a personal project.",
        "Analyze your current productivity and optimize your routine.",
        "Plan for the next month and set long-term goals.",
      ]
    },
    High: {
      Quick: [
        "Do a 10-minute focused work sprint.",
        "Create a quick task list and knock out the top priorities.",
        "Organize your thoughts and quickly review your project."
      ],
      Moderate: [
        "Work for a solid 30-minute period without distractions.",
        "Create an in-depth plan for your next project.",
        "Take action on your most important task today.",
      ],
      Plenty: [
        "Start a big project that requires a lot of focus and effort.",
        "Engage in a strategic planning session for long-term goals.",
        "Work through several steps of your project to make significant progress.",
      ]
    }
  },
  Excited: {
    Low: {
      Quick: [
        "Watch an exciting trailer or teaser of an upcoming movie.",
        "Listen to an upbeat song to match your excitement.",
        "Read a funny article or meme to get in the mood.",
      ],
      Moderate: [
        "Make plans with a friend for an exciting weekend outing.",
        "Look up new hobbies or activities to try.",
        "Read about exciting new trends or technologies.",
      ],
      Plenty: [
        "Plan a fun weekend trip to an exciting location.",
        "Book tickets for an event you’re looking forward to.",
        "Organize an adventure activity with friends like hiking or skydiving.",
      ]
    },
    Medium: {
      Quick: [
        "Do something that excites you right away, like playing a game.",
        "Listen to a playlist of your favorite upbeat songs.",
        "Engage in a fun chat with a friend about your favorite topics.",
      ],
      Moderate: [
        "Start a creative project that excites you.",
        "Join an online community for a topic you’re excited about.",
        "Work on a hobby you’re passionate about.",
      ],
      Plenty: [
        "Plan an exciting event, like a party or trip.",
        "Learn a new skill or hobby that you’re excited about.",
        "Take on a fun challenge, like a 30-day creative challenge.",

      ]
    },
    High: {
      Quick: [
        "Jump into an exciting hobby or activity immediately.",
        "Start a dance session or exercise to channel your excitement.",
        "Reach out to someone and share your excitement.",

      ],
      Moderate: [
        "Engage in a challenging yet exciting physical activity.",
        "Take on a creative task that requires energy and focus.",
        "Sign up for an exciting workshop or class to learn something new.",
      ],
      Plenty: [
        "Embark on a full-day adventure to explore new activities.",
        "Take an exciting trip to a new place you've been wanting to visit.",
        "Host a gathering with friends for a fun-filled day.",
      ]
    }
  },
  Anxious: {
    Low: {
      Quick: [
        "Practice deep breathing exercises to calm your mind.",
        "Take a short walk to relieve nervous energy.",
        "Listen to calming music for a few minutes.",

      ],
      Moderate: [
        "Try a guided meditation session to reduce anxiety.",
        "Jot down your thoughts in a journal to get them out of your head.",
        "Talk to a friend or family member for support.",

      ],
      Plenty: [
        "Start therapy or counseling sessions to address anxiety.",
        "Set up a structured daily routine to reduce overwhelm.",
        "Engage in a relaxing activity like yoga or tai chi.",
      ]
    },
    Medium: {
      Quick: [
        "Take a break and step outside for a change of scenery.",
        "Practice progressive muscle relaxation to release tension.",
        "Sip some herbal tea to soothe your nerves.",
      ],
      Moderate: [
        "Focus on a small, easy task to regain a sense of control.",
        "Journal about your anxious thoughts to understand them better.",
        "Listen to a podcast on managing anxiety.",

      ],
      Plenty: [
        "Learn more about managing anxiety through a course or workshop.",
        "Develop an anxiety management plan that includes daily strategies.",
        "Commit to a daily mindfulness or meditation practice.",

      ]
    },
    High: {
      Quick: [
        "Do some quick physical activity to release nervous energy.",
        "Practice a breathing technique like 4-7-8 to calm yourself.",
        "Step away from stressful situations for a few minutes.",
      ],
      Moderate: [
        "Engage in a more intense workout to release tension.",
        "Talk to someone close about your feelings.",
        "Work on a task that requires full focus to distract yourself.",

      ],
      Plenty: [
        "Attend a workshop or seminar on anxiety management.",
        "Try a comprehensive mental health program for long-term relief.",
        "Take a day off to focus solely on relaxation and self-care.",
      ]
    }
  },
  Relaxed: {
    Low: {
      Quick: [
        "Sit back and relax with a cup of tea or coffee.",
        "Do some light stretching to relax your body.",
        "Listen to calm music or nature sounds.",

      ],
      Moderate: [
        "Do a short meditation or breathing exercise.",
        "Take a walk in nature to enjoy the surroundings.",
        "Listen to a relaxing podcast or audiobook.",

      ],
      Plenty: [
        "Take a spa day at home with a bath, face mask, and relaxation.",
        "Schedule a massage or spa appointment for relaxation.",
        "Take a leisurely stroll in the park or around the beach.",
      ]
    },
    Medium: {
      Quick: [
        "Take a few minutes to just sit and enjoy some quiet time.",
        "Enjoy a hot beverage while looking out the window.",
        "Take a deep breath and center yourself.",

      ],
      Moderate: [
        "Spend time practicing mindfulness through simple exercises.",
        "Take a slow, mindful walk to focus on the present moment.",
        "Watch a peaceful video or nature footage to calm your mind.",

      ],
      Plenty: [
        "Plan a weekend getaway for complete relaxation.",
        "Create a peaceful evening routine to help you unwind.",
        "Start a daily meditation or mindfulness practice.",
      ]
    },
    High: {
      Quick: [
        "Do a quick but relaxing activity like light stretching.",
        "Listen to your favorite calming music to help you unwind.",
        "Try a short guided meditation to relax.",

      ],
      Moderate: [
        "Do a longer session of yoga or tai chi to relax.",
        "Engage in light and simple creative hobbies like drawing.",
        "Read something inspirational or calming to soothe your mind.",

      ],
      Plenty: [
        "Spend an entire day focused on rest and self-care.",
        "Indulge in a calm activity like journaling or knitting.",
        "Take a mini-vacation or staycation to rejuvenate your mind.",

      ]
    }
  },
  Motivated: {
    Low: {
      Quick: [
        "Write down your goals for the day.",
        "Read a motivational quote or article.",
        "Make a to-do list to give you direction.",

      ],
      Moderate: [
        "Break down a larger task into smaller, achievable steps.",
        "Watch an inspiring TED Talk to fuel your motivation.",
        "Set small goals for the next hour or day.",

      ],
      Plenty: [
        "Create a detailed plan for your long-term goals.",
        "Work on a personal project that excites you.",
        "Focus on an area of personal growth and take action.",

      ]
    },
    Medium: {
      Quick: [
        "Do a small task to boost your productivity.",
        "Set a timer for a focused work session.",
        "Do a quick activity to push yourself outside your comfort zone.",

      ],
      Moderate: [
        "Set a challenge for yourself and track your progress.",
        "Collaborate with others on a meaningful task.",
        "Push yourself to try something new and exciting.",

      ],
      Plenty: [
        "Set long-term goals and create a step-by-step action plan.",
        "Plan an ambitious project and work towards completing it.",
        "Enroll in an online course to develop a new skill.",

      ]
    },
    High: {
      Quick: [
        "Jump into a task with full focus and energy.",
        "Set a clear objective for the next 30 minutes and tackle it.",
        "Complete a quick goal to give yourself a sense of accomplishment.",

      ],
      Moderate: [
        "Work for a few hours on a challenging but achievable task.",
        "Push your limits and complete a project you've been working on.",
        "Take on an important task that requires your full attention.",

      ],
      Plenty: [
        "Tackle a big project that aligns with your long-term goals.",
        "Devote an entire day to working towards a major goal.",
        "Develop a comprehensive plan for future success.",

      ]
    }
  },
  Curious: {
    Low: {
      Quick: [
        "Read a fun fact or did-you-know article.",
        "Watch a short documentary or explainer video.",
        "Explore a random Wikipedia page.",

      ],
      Moderate: [
        "Take an online quiz to learn something new.",
        "Listen to a podcast on a topic you know little about.",
        "Explore a new topic on YouTube or Coursera.",
      ],
      Plenty: [
        "Dive deep into a subject you've always wondered about.",
        "Start a mini research project on a random topic.",
        "Enroll in a short online course.",
      ]
    },
    Medium: {
      Quick: [
        "Ask ChatGPT or Google a burning question you’ve had.",
        "Read a science or history tidbit online.",
        "Try a puzzle game that challenges your thinking.",
      ],
      Moderate: [
        "Watch a documentary on a topic you've never explored.",
        "Learn basic words from a new language.",
        "Start a curiosity journal to track what you're learning.",
      ],
      Plenty: [
        "Build a small project around a curious idea (like a web scraper or quiz).",
        "Interview someone about a topic you’re unfamiliar with.",
        "Start a blog on your curiosity adventures.",

      ]
    },
    High: {
      Quick: [
        "Experiment with a new creative tool (e.g., Canva, Figma).",
        "Create a short video or visual about something you’ve learned.",
        "Write a list of questions you’d love to explore.",

      ],
      Moderate: [
        "Start a passion project based on something you want to understand.",
        "Explore a data visualization on a topic of interest.",
        "Try building a basic app or interactive page from scratch.",

      ],
      Plenty: [
        "Work on an open-source or research-based curiosity project.",
        "Take on a creative challenge like 30 Days of Curiosity.",
        "Build a knowledge base of your explorations.",

      ]
    }
  },
  Tired: {
  Low: {
    Quick: [
      "Close your eyes and take 5 deep breaths.",
      "Listen to a calming song or ambient sounds.",
      "Stretch gently or do a bit of chair yoga.",

    ],
    Moderate: [
      "Take a 15-20 minute power nap.",
      "Lie down and do a guided meditation.",
      "Cuddle up with a soft blanket and relax.",

    ],
    Plenty: [
      "Get some restful sleep or a longer nap.",
      "Unplug from screens and give your mind a break.",
      "Spend quiet time in nature or in a calm space.",

    ]
  },
  Medium: {
    Quick: [
      "Walk around slowly to gently wake yourself up.",
      "Splash cold water on your face.",
      "Do a 1-minute energizing breathing technique.",

    ],
    Moderate: [
      "Listen to a calming podcast or slow-paced video.",
      "Do some light stretching or yoga.",
      "Eat a nourishing meal or fruit for energy.",

    ],
    Plenty: [
      "Take a long rest or nap in a peaceful setting.",
      "Have a slow, relaxing day with no obligations.",
      "Do gentle movement like a nature walk or light yoga.",

    ]
  },
  High: {
    Quick: [
      "Channel your energy into something chill but fulfilling.",
      "Tidy up your room or workspace for mental clarity.",
      "Put on energizing music and move a bit.",
    ],
    Moderate: [
      "Do a slow, creative task like doodling or journaling.",
      "Cook a comforting meal while enjoying music.",
      "Watch a feel-good movie or series to recharge.",
    ],
    Plenty: [
      "Create a cozy self-care ritual for the day.",
      "Spend time doing low-stress creative work (art, music, writing).",
      "Have a wellness day—light movement, nutritious food, and calm.",
    ]
  }
}

};

export const getTaskSuggestions = (mood, energy, time) => {
  if (tasks[mood]?.[energy]?.[time]) return tasks[mood][energy][time];
  return ["Take a deep breath and relax!"];
};