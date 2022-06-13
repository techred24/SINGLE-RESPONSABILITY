var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Person = /** @class */ (function () {
        function Person(name, gender, birthdate) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(email, role, name, gender, birthdate) {
            var _this = _super.call(this, name, gender, birthdate) || this;
            _this.email = email;
            _this.role = role;
            _this.lastAccess = new Date();
            return _this;
        }
        User.prototype.checkCredentials = function () {
            return true;
        };
        return User;
    }(Person));
    var UserSettings = /** @class */ (function (_super) {
        __extends(UserSettings, _super);
        function UserSettings(workingDirectory, lastOpenFolder, email, role, name, gender, birthdate) {
            return _super.call(this, email, role, name, gender, birthdate) || this;
        }
        return UserSettings;
    }(User));
})();
