import { MigrationInterface, QueryRunner } from "typeorm";

export class allTables1671466470436 implements MigrationInterface {
    name = 'allTables1671466470436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe_production" ("recipeProductionId" uuid NOT NULL DEFAULT uuid_generate_v4(), "recipeQuantity" integer NOT NULL, CONSTRAINT "PK_a4b4200771ef9964cd2cca0fb61" PRIMARY KEY ("recipeProductionId"))`);
        await queryRunner.query(`CREATE TABLE "productions" ("productionId" uuid NOT NULL DEFAULT uuid_generate_v4(), "productionDate" TIMESTAMP NOT NULL DEFAULT now(), "productionQuantity" integer NOT NULL, CONSTRAINT "PK_012d82ad33c5233667ce7cad911" PRIMARY KEY ("productionId"))`);
        await queryRunner.query(`CREATE TABLE "recipes" ("recipeId" uuid NOT NULL DEFAULT uuid_generate_v4(), "recipeName" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_739eb9215614dc41efacb026614" PRIMARY KEY ("recipeId"))`);
        await queryRunner.query(`CREATE TABLE "recipe_ingredients" ("recipeIngredientId" uuid NOT NULL DEFAULT uuid_generate_v4(), "ingredientQuantity" integer NOT NULL, CONSTRAINT "PK_41a70e05257378f450fb13bf1fa" PRIMARY KEY ("recipeIngredientId"))`);
        await queryRunner.query(`CREATE TABLE "ingredients" ("ingredientId" uuid NOT NULL DEFAULT uuid_generate_v4(), "ingredientName" character varying NOT NULL, "description" character varying, "measurementUnit" character varying NOT NULL, CONSTRAINT "PK_ea762d9f387ef1c0be08ac990eb" PRIMARY KEY ("ingredientId"))`);
        await queryRunner.query(`CREATE TABLE "purchase_ingredient" ("purchaseIngredientId" uuid NOT NULL DEFAULT uuid_generate_v4(), "ingredientQuantity" integer NOT NULL, "ingredientPrice" double precision NOT NULL, "purchasePurchaseId" uuid, CONSTRAINT "PK_75cd1a1e92f48ea34afc534f4e6" PRIMARY KEY ("purchaseIngredientId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "purchases" ("purchaseId" uuid NOT NULL DEFAULT uuid_generate_v4(), "purchaseDate" TIMESTAMP NOT NULL DEFAULT now(), "purchaseTotal" double precision NOT NULL, "userUserId" uuid, CONSTRAINT "PK_611866f7af176a877f97cbb76a4" PRIMARY KEY ("purchaseId"))`);
        await queryRunner.query(`ALTER TABLE "purchase_ingredient" ADD CONSTRAINT "FK_85d0ad93aed7ac2c839b49c51bb" FOREIGN KEY ("purchasePurchaseId") REFERENCES "purchases"("purchaseId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_10425358dc00f0d355feb7b11a4" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_10425358dc00f0d355feb7b11a4"`);
        await queryRunner.query(`ALTER TABLE "purchase_ingredient" DROP CONSTRAINT "FK_85d0ad93aed7ac2c839b49c51bb"`);
        await queryRunner.query(`DROP TABLE "purchases"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "purchase_ingredient"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
        await queryRunner.query(`DROP TABLE "recipe_ingredients"`);
        await queryRunner.query(`DROP TABLE "recipes"`);
        await queryRunner.query(`DROP TABLE "productions"`);
        await queryRunner.query(`DROP TABLE "recipe_production"`);
    }

}
