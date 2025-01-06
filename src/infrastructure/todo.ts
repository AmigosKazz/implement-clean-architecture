import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn({type: 'integer'})
    id: number;

    @Column('varchar', { length: 255, nullable: true })
    content: string

    @Column('boolean', { default: false })
    isDone: boolean

    @CreateDateColumn({name: 'createdate'})
    createdate: Date

    @UpdateDateColumn({name: 'updatedate'})
    updatedate: Date
}