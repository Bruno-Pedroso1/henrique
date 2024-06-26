import { sequelize } from "../config/config";
import Country from "./Country";
import State from "./State";
import City from "./City";
import Addresses from "./Addresses";
import Company from "./Company";
import Integrations from "./Integrations";
import Branch from "./Branch";
import PaymentMethod from "./PaymentMethod";
import Users from "./Users";
import UserBranch from "./UserBranch";
import Schedules from "./Schedules";
import Schedule from "./Schedule";
import Payment from "./Payment";
import Scheduling from "./Scheduling";
import Services from "./Services";
import voucher from "./Voucher";
import paymentvoucher from "./PaymentVoucher";
import { sign } from "crypto";

export const modelos = {
  Country,
  State,
  City,
  Addresses,
  Company,
  Branch,
  Integrations,
  Services,
  PaymentMethod,
  Users,
  UserBranch,
  Schedule,
  Payment,
  Schedules,
  voucher,
  Scheduling,
  paymentvoucher,
};

// sequelize.sync({ alter: true }).then(() => {
//   console.log('Tables created (full synchronization).');
// }).catch((error) => {
//   console.error('Error synchronizing tables:', error);
// });
