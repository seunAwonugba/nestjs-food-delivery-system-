"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const UserModel_1 = require("../models/UserModel");
let UserService = class UserService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async createUser(createUserDto) {
        const knex = this.databaseService.getKnexInstance();
        const query = `
      INSERT INTO ${UserModel_1.UserModel.tableName} (first_name, last_name, email)
      VALUES (:firstName, :lastName, :email)
      RETURNING *
    `;
        const params = {
            firstName: createUserDto.first_name,
            lastName: createUserDto.last_name,
            email: createUserDto.email,
        };
        const result = await knex.raw(query, params);
        const [user] = result.rows;
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map