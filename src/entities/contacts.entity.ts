import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 55 })
  name: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  registrationDate?: Date | string;

  @ManyToOne(() => User, (user) => user.contact)
  user: User;
}

export default Contact;
