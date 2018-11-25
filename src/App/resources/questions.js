import uuid from 'random-uuid-v4';

export const QUESTIONS = [
  {
    id: uuid(),
    prompt: 'Describe in your own words the emotions you are feeling. Think about any other emotions that you may be feeling.',
    response: "",
    placeholder: "I’m feeling frustrated right now. I feel like I’m putting in so much effort and it isn’t recognized. I’m also feeling demoralized and defeated.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Did you have any physical reactions when you felt these emotions?',
    response: "",
    placeholder: "My hands clenched up initially and it felt like my heart was racing a bit.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Why do you think you are feeling this way?',
    response: "",
    placeholder: "This is the second time I haven’t gotten a promotion, despite being told I’m doing really well.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What were the events that led up to you feeling this way?',
    response: "",
    placeholder: "I had a meeting with my manager and he told me I wasn’t going to get a raise or promotion.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What did you do when you felt this way?',
    response: "",
    placeholder: "I kept my composure and asked all the right questions but I was super frustrated.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Write more about the situation, your actions and your emotions. Think of the sequence of events and your reaction to them. ',
    response: "",
    placeholder: "I’ve been waiting for this meeting since my performance review a few weeks ago. My review went really well and my manager had nothing but good things to say. When I asked for areas of improvement, he said I was doing really well and didn’t offer any suggestions. That’s why I was so frustrated sitting in my meeting with him today. He basically told me that John was getting the promotion and when I asked why he wouldn’t give me any feedback. I stayed calm during the meeting but I was frustrated and confused as well.",
    set: 3,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Is there more than one event that could have caused you to feel this way? What else could it be?',
    response: "",
    placeholder: "I was late for work this morning because the trains were all late so I was already frustrated and in a bad mood.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'When was the last time you felt this way? What is similar between then and now. ',
    response: "",
    placeholder: "The last time I felt like this was last week when my boyfriend was upset with me but said nothing was wrong/couldn’t explain why he was upset. I also felt like this the last time I didn’t get the promotion.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What was in your control? What was not in your control?',
    response: "",
    placeholder: "The promotion wasn’t in my control. What was in my control was the way I reacted and the follow-up questions I asked my manager.",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If a friend had the same problem, what advice would you give them?',
    response: "",
    placeholder: "I would probably tell them to setup a meeting with their manager to ask more questions to better understand the situation. I would also tell them that there were other business decisions that prompted the promotion decision.",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If other people were involved, how do you think they saw the situation from their perspective?',
    response: "",
    placeholder: "As I look back on the situation, it was pretty clear that my boss felt bad about the decision as well and definitely that he had to tell me. I wonder what he wasn’t saying though.",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'What assumptions are you making about the situation?',
    response: "",
    placeholder: "I’m assuming that there is something about my performance that means I didn’t get the job. I don’t actually know that though.",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If this happens again, how would you like to react and feel?',
    response: "",
    placeholder: "I think I would like to feel less discouraged and more empowered. I would like to react by asking the right questions to get the clarity I need.",
    set: 7,
    phase: 3
  },
  {
    id: uuid(),
    prompt: 'What steps are you going to take now or later to resolve how you are feeling?',
    response: "",
    placeholder: "I’m going to setup a meeting with my manager to better understand why I didn’t get the promotion. Right now I’d like to write out my accomplishments from the year to feel less defeated and to recognize my successes.",
    set: 7,
    phase: 3
  },
]

export const POPULATED_QUESTIONS = [
  {
    id: uuid(),
    prompt: 'Describe in your own words the emotions you are feeling. Think about any other emotions that you may be feeling.',
    response: "I am not feeling very good. I hate how everything is and I can't seem to get over it. My girfriend keeps really getting on my nerves and I just want her to stop and think for a moment about how her action affect me.",
    placeholder: "I’m feeling frustrated right now. I feel like I’m putting in so much effort and it isn’t recognized. I’m also feeling demoralized and defeated.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Did you have any physical reactions when you felt these emotions?',
    response: "My hands clenched up initially and it felt like my heart was racing a bit.",
    placeholder: "My hands clenched up initially and it felt like my heart was racing a bit.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Why do you think you are feeling this way?',
    response: "This is the second time I haven’t gotten a promotion, despite being told I’m doing really well.",
    placeholder: "This is the second time I haven’t gotten a promotion, despite being told I’m doing really well.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What were the events that led up to you feeling this way?',
    response: "I had a meeting with my manager and he told me I wasn’t going to get a raise or promotion.",
    placeholder: "I had a meeting with my manager and he told me I wasn’t going to get a raise or promotion.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What did you do when you felt this way?',
    response: "I kept my composure and asked all the right questions but I was super frustrated.",
    placeholder: "I kept my composure and asked all the right questions but I was super frustrated.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Write more about the situation, your actions and your emotions. Think of the sequence of events and your reaction to them. ',
    response: "I was at the grocery store and I was picking up a two liter container of milk. As I was trying to put it in my cart, it slipped out of my hands and fell to the ground. It exploded everywhere. It got all over this one lady next to me and she just started yelling at me. I didn't know what to do, so I just dropped all of my groceries and ran away. I'm worried that I can never go back to my favorite grocery store again.",
    placeholder: "I’ve been waiting for this meeting since my performance review a few weeks ago. My review went really well and my manager had nothing but good things to say. When I asked for areas of improvement, he said I was doing really well and didn’t offer any suggestions. That’s why I was so frustrated sitting in my meeting with him today. He basically told me that John was getting the promotion and when I asked why he wouldn’t give me any feedback. I stayed calm during the meeting but I was frustrated and confused as well.",
    set: 3,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Is there more than one event that could have caused you to feel this way? What else could it be?',
    response: "I was late for work this morning because the trains were all late so I was already frustrated and in a bad mood.",
    placeholder: "I was late for work this morning because the trains were all late so I was already frustrated and in a bad mood.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'When was the last time you felt this way? What is similar between then and now. ',
    response: "The last time I felt like this was last week when my boyfriend was upset with me but said nothing was wrong/couldn’t explain why he was upset. I also felt like this the last time I didn’t get the promotion.",
    placeholder: "The last time I felt like this was last week when my boyfriend was upset with me but said nothing was wrong/couldn’t explain why he was upset. I also felt like this the last time I didn’t get the promotion.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What was in your control? What was not in your control?',
    response: "I couldn't control how she acted towards me, but I can control my own actions",
    placeholder: "",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If a friend had the same problem, what advice would you give them?',
    response: "I would tell them that she isn't the boss of you and you can make up your own mind. Be who you want to be and shine bright like a star.",
    placeholder: "",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If other people were involved, how do you think they saw the situation from their perspective?',
    response: "They probably thought I was crazy",
    placeholder: "",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'What assumptions are you making about the situation?',
    response: "That everyone is annoyed by me",
    placeholder: "",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If this happens again, how would you like to react and feel?',
    response: "If this happens again, I will be sure to take a few moments to calm down before I respond. I don't want to let my emotions guide my behaior when I am so mad.",
    placeholder: "",
    set: 7,
    phase: 3
  },
  {
    id: uuid(),
    prompt: 'What steps are you going to take now or later to resolve how you are feeling?',
    response: "Now I am going to go to work and make sure that I speak up during the next meeting so I won't feel regret like I did last time.",
    placeholder: "",
    set: 7,
    phase: 3
  },
]