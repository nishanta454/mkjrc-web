import { Contact } from './contact.entity';

describe('Contact', () => {
  it('should be defined', () => {
    expect(new Contact()).toBeDefined();
  });
});
