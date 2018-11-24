import uuid from 'random-uuid-v4';

export const QUESTIONS = [
  {
    id: uuid(),
    prompt: 'Describe in your own words the emotions you are feeling. Think about any other emotions that you may be feeling.',
    response: '',
    placeholder: "I’m feeling frustrated right now. I feel like I’m putting in so much effort and it isn’t recognized. I’m also feeling demoralized and defeated.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Did you have any physical reactions when you felt these emotions?',
    response: '',
    placeholder: "My hands clenched up initially and it felt like my heart was racing a bit.",
    set: 1,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Why do you think you are feeling this way?',
    response: '',
    placeholder: "This is the second time I haven’t gotten a promotion, despite being told I’m doing really well.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What were the events that led up to you feeling this way?',
    response: '',
    placeholder: "I had a meeting with my manager and he told me I wasn’t going to get a raise or promotion.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What did you do when you felt this way?',
    response: '',
    placeholder: "I kept my composure and asked all the right questions but I was super frustrated.",
    set: 2,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Write more about the situation, your actions and your emotions. Think of the sequence of events and your reaction to them. ',
    response: '',
    placeholder: "I’ve been waiting for this meeting since my performance review a few weeks ago. My review went really well and my manager had nothing but good things to say. When I asked for areas of improvement, he said I was doing really well and didn’t offer any suggestions. That’s why I was so frustrated sitting in my meeting with him today. He basically told me that John was getting the promotion and when I asked why he wouldn’t give me any feedback. I stayed calm during the meeting but I was frustrated and confused as well.",
    set: 3,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'Is there more than one event that could have caused you to feel this way? What else could it be?',
    response: '',
    placeholder: "I was late for work this morning because the trains were all late so I was already frustrated and in a bad mood.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'When was the last time you felt this way? What is similar between then and now. ',
    response: '',
    placeholder: "The last time I felt like this was last week when my boyfriend was upset with me but said nothing was wrong/couldn’t explain why he was upset. I also felt like this the last time I didn’t get the promotion.",
    set: 4,
    phase: 1
  },
  {
    id: uuid(),
    prompt: 'What was in your control? What was not in your control?',
    response: '',
    placeholder: "",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If a friend had the same problem, what advice would you give them?',
    response: '',
    placeholder: "",
    set: 5,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If other people were involved, how do you think they saw the situation from their perspective?',
    response: '',
    placeholder: "",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'What assumptions are you making about the situation?',
    response: '',
    placeholder: "",
    set: 6,
    phase: 2
  },
  {
    id: uuid(),
    prompt: 'If this happens again, how would you like to react and feel?',
    response: '',
    placeholder: "",
    set: 7,
    phase: 3
  },
  {
    id: uuid(),
    prompt: 'What steps are you going to take now or later to resolve how you are feeling?',
    response: '',
    placeholder: "",
    set: 7,
    phase: 3
  },
]