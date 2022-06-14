(function () {
    // Single-responsability principle
    // Prioritize composition over inheritance.
    var Person = /** @class */ (function () {
        function Person(_a) {
            var name = _a.name, gender = _a.gender, birthdate = _a.birthdate;
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
        return Person;
    }());
    var User = /** @class */ (function () {
        function User(_a) {
            var email = _a.email, role = _a.role;
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
        User.prototype.checkCredentials = function () {
            return true;
        };
        return User;
    }());
    var Settings = /** @class */ (function () {
        function Settings(_a) {
            var workingDirectory = _a.workingDirectory, lastOpenFolder = _a.lastOpenFolder;
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
        return Settings;
    }());
    var UserSettings = /** @class */ (function () {
        function UserSettings(_a) {
            var workingDirectory = _a.workingDirectory, lastOpenFolder = _a.lastOpenFolder, email = _a.email, role = _a.role, name = _a.name, gender = _a.gender, birthdate = _a.birthdate;
            this.person = new Person({ name: name, gender: gender, birthdate: birthdate });
            this.user = new User({ email: email, role: role });
            this.settings = new Settings({ workingDirectory: workingDirectory, lastOpenFolder: lastOpenFolder });
        }
        return UserSettings;
    }());
    var userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'flubber@google.com',
        role: 'Admin',
        name: 'Flubber',
        gender: 'M',
        birthdate: new Date('1996-11-30')
    });
    // console.log({userSettings, areCredentialValid: userSettings.checkCredentials()});
    console.log({ userSettings: userSettings });
})();
