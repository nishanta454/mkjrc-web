import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @Column()
  countryCode: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;
}
