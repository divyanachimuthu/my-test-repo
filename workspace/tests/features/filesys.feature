@readandwritexml

Feature: Read and write XML



  Scenario Outline: Read an XML file, modify that and write it into another XML file



    Given I read and write my XML file <name>

    And I wait 2 seconds

    And I read and write my JSON file <filename>

    And I make a SOAP call

    Examples:

      |name |filename |

      |myxml |myFile |