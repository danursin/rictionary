import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "RictionaryNg"
})
export class Rictionary {
    @PrimaryGeneratedColumn({ type: "int" })
    RictionaryID: number;

    @Column({ type: "varchar" })
    RictionaryName: string;

    @Column({ type: "datetime2", precision: 0 })
    CreatedDate: Date;

    @Column({ type: "datetime2", precision: 0 })
    LastModifiedDate: Date;

    @Column({ type: "varchar" })
    CreatedBy: string;

    @Column({ type: "varchar" })
    LastModifiedBy: string;

    @Column({ type: "varchar" })
    AValue: string;

    @Column({ type: "varchar" })
    BValue: string;

    @Column({ type: "varchar" })
    CValue: string;

    @Column({ type: "varchar" })
    DValue: string;

    @Column({ type: "varchar" })
    EValue: string;

    @Column({ type: "varchar" })
    FValue: string;

    @Column({ type: "varchar" })
    GValue: string;

    @Column({ type: "varchar" })
    HValue: string;

    @Column({ type: "varchar" })
    IValue: string;

    @Column({ type: "varchar" })
    JValue: string;

    @Column({ type: "varchar" })
    KValue: string;

    @Column({ type: "varchar" })
    LValue: string;

    @Column({ type: "varchar" })
    MValue: string;

    @Column({ type: "varchar" })
    NValue: string;

    @Column({ type: "varchar" })
    OValue: string;

    @Column({ type: "varchar" })
    PValue: string;

    @Column({ type: "varchar" })
    QValue: string;

    @Column({ type: "varchar" })
    RValue: string;

    @Column({ type: "varchar" })
    SValue: string;

    @Column({ type: "varchar" })
    TValue: string;

    @Column({ type: "varchar" })
    UValue: string;

    @Column({ type: "varchar" })
    VValue: string;

    @Column({ type: "varchar" })
    WValue: string;

    @Column({ type: "varchar" })
    XValue: string;

    @Column({ type: "varchar" })
    YValue: string;

    @Column({ type: "varchar" })
    ZValue: string;
}
