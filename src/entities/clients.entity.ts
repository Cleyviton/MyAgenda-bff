import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Contact from "./contacts.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 55 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  registrationDate?: Date | string;

  @OneToMany(() => Contact, (Contact) => Contact.client)
  contact: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  transformPasswordHash() {
    const encrypted = getRounds(this.password);

    if (!encrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default Client;
