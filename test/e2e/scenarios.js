describe('Paste App', function() {

    describe('New paste', function() {

        beforeEach(function() {
            browser().navigateTo('/');
        });

        it('Shows an empty textarea by default, and save button is disabled', function() {
            expect(element('textarea#newCode').val()).toBe("");
            expect(element('input#submitNewCode').attr('disabled')).toBe("disabled");
        });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });

        it('Save button is enabled when textarea not empty', function() {
            element('textarea#newCode').val("i'm not empty");

            expect(element('input#submitNewCode').attr('disabled')).not.toBe("disabled");
        });

    });
});