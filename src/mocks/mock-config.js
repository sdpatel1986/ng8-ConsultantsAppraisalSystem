
var consultant = {
    id: {
        faker: 'random.number({"min": 1, "max": 100})'
    },
    name: {
        faker: 'name.findName'
    },
    email: {
        faker: 'internet.email'
    }
};
var questionType = {
    id: {
        function: function () {
            return this.db.questionType.length + 1;
        }
    },
    name:
    {
        function: function () {
            const values = ['rating', 'freeText']
            return values[this.db.questionType.length];
        }
    }
};
var question = {
    id: {
        faker: 'random.number({"min": 1, "max": 100})'
    },
    type: {
        hasOne: 'questionType',
        get: 'id'
    },
    text: {
        faker: 'lorem.words'
    },
};
var evaluation = {
    consultantId: {
        hasOne: 'consultant',
        get: 'id'
    }
}
mocker()
    .schema('consultant', consultant, 5)
    .schema('questionType', questionType, 2)
    .schema('question', question, 10)
    .schema('evaluation', evaluation, 1)
