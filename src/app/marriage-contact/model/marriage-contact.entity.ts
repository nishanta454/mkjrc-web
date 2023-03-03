import { Contact } from 'src/app/contact/model/contact.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class MarriageContact {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Contact, (contact) => contact.id)
  @JoinColumn()
  contact: Contact;

  @Column()
  dob: string;

  @Column()
  pob: string;

  @Column()
  tob: string;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;
}
