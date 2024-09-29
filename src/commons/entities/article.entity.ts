import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  writer: string;

  @Column()
  content: string;

  @Column()
  title: string;

  @Column({ default: 'general' })
  tag: string;

  @Column({ default: new Date().toISOString() })
  createdAt: Date;

  @Column({ default: new Date().toISOString() })
  updatedAt: Date;
}
