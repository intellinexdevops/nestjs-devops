import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fa_books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  author: string;

  @Column({ type: 'varchar' })
  realYears: string;

  @Column({ type: 'varchar' })
  year: string;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  language: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  pages: number;

  @Column({ type: 'text', nullable: true })
  wikipediaLink: string;

  @Column({ type: 'text', nullable: true })
  imageUrl: string;

  @Column({ type: 'int', default: 1 })
  status: number; // 1: available, 0: unavailable,

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
