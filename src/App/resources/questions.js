import uuid from 'random-uuid-v4';

export const QUESTIONS = [
  {
    id: uuid(),
    prompt: 'Describe in your own words the emotions you are feeling. Think about any other emotions that you may be feeling.',
    response: '',
    placeholder: 'I hate everyone!',
    set: 1
  },
  {
    id: uuid(),
    prompt: 'Did you have any physical reactions when you felt these emotions?',
    response: '',
    placeholder: 'I stubbed my toe',
    set: 1
  },
  {
    id: uuid(),
    prompt: 'Why do you think you are feeling this way?',
    response: '',
    placeholder: '',
    set: 2
  },
  {
    id: uuid(),
    prompt: 'What were the events that led up to you feeling this way?',
    response: '',
    placeholder: '',
    set: 2
  },
  {
    id: uuid(),
    prompt: 'What did you do when you felt this way?',
    response: '',
    placeholder: '',
    set: 2
  },
  {
    id: uuid(),
    prompt: 'Write more about the situation, your actions and your emotions. Think of the sequence of events and your reaction to them. ',
    response: '',
    placeholder: '',
    set: 3
  },
  {
    id: uuid(),
    prompt: 'Is there more than one event that could have caused you to feel this way? What else could it be?',
    response: '',
    placeholder: '',
    set: 4
  },
  {
    id: uuid(),
    prompt: 'When was the last time you felt this way? What is similar between then and now. ',
    response: '',
    placeholder: '',
    set: 4
  }
]