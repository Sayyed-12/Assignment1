const rawData = [
  "  Alice Johnson  ", "bob@email.com", "", "Charlie Brown", null, "diana.smith@test.co",
  "   ", "Eve Wilson", undefined, "frank.miller@domain.org", "Grace Lee"
];



//a) Remove all empty, null, or undefined values:
 
function cleanData(data) {
  var filtered = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i] !== null && data[i] !== undefined && data[i].trim() !== "") {
      filtered.push(data[i]);
    }
  }

  return filtered;
}

var cleaned = cleanData(rawData);
console.log("Cleaned Data:", cleaned);



//b) Trim whitespace from all remaining strings:
 
function trimData(data) {
  var trimmed = [];

  for (var i = 0; i < data.length; i++) {
    trimmed.push(data[i].trim());
  }

  return trimmed;
}

var trimmedData = trimData(cleaned);
console.log("Trimmed Data:", trimmedData);



//c) Separate email addresses from regular names:
 
function separateEmails(data) {
  var emails = [];
  var names = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].includes("@")) {
      emails.push(data[i]);
    } else {
      names.push(data[i]);
    }
  }

  return {
    emails: emails,
    names: names
  };
}

var separated = separateEmails(trimmedData);
console.log("Emails:", separated.emails);
console.log("Names:", separated.names);



// Sort names alphabetically (excluding emails):
 
function sortNames(names) {
  return names.sort();
}

var sortedNames = sortNames(separated.names);
console.log("Sorted Names:", sortedNames);


// e) Validate that all emails contain '@' and '.':
 
function validateEmails(emails) {
  var valid = [];
  var invalid = [];

  for (var i = 0; i < emails.length; i++) {
    if (emails[i].includes("@") && emails[i].includes(".")) {
      valid.push(emails[i]);
    } else {
      invalid.push(emails[i]);
    }
  }

  return {
    validEmails: valid,
    invalidEmails: invalid
  };
}

var validated = validateEmails(separated.emails);
console.log("Valid Emails:", validated.validEmails);
console.log("Invalid Emails:", validated.invalidEmails);