import { Column, Entity } from "typeorm";

@Entity()
export class CoreEntity {
  @Column({
    type: "datetime",
    name: "created_at",
    nullable: false,
  })
  createdAt: Date;

  @Column({
    type: "datetime",
    name: "updated_at",
    nullable: true,
  })
  updatedAt: Date | null;

  @Column({
    type: "datetime",
    name: "deleted_at",
    nullable: true,
  })
  deletedAt: Date | null;
}
