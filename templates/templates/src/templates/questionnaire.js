import React from 'react';
import SimpleCheckbox from '../components/checkbox';
import { Row, Col } from 'reactstrap';

const mapQuestionsToCheckboxes = (
    questions,
) =>
    questions.map(question => (
        <SimpleCheckbox
            label={question.label}
            name={question.name}
            key={question.name}
        />
    ));

const investorAccreditedQuestionnaire = {
    investor: [
        {
            label: `I have earned an individual income of more than $200,000 per year,
                or a joint spousal income of more than $300,000 per year, in each of the 
                last two years, and expect to maintain the same level of income.`,
            name: 'q1',
        },
        {
            label: `I have a current net worth exceeding $1,000,000, either individually or 
          jointly with my spouse (excluding my primary residence).`,
            name: 'q2',
        },
        {
            label: `I am a general partner, executive officer, director, or a related 
          combination thereof for the issuer of a security being offered.`,
            name: 'q3',
        },
    ],
    business: [
        {
            label: `The entity is a bank, insurance company, registered investment 
                            company, business development company, or small business 
                            investment company.`,
            name: 'q1',
        },
        {
            label: `The entity is a business in which all the equity owners 
        are accredited investors.`,
            name: 'q2',
        },
        {
            label: `The entity is an employee benefit plan, a trust, charitable 
        organization, partnership, or company with total assets 
        in excess of $5,000,000.`,
            name: 'q3',
        },
    ],
    nonAccreditedInvestor: [
        {
            label: 'None of the categories above are applicable.',
            name: 'q1',
        },
    ],
};

const Questionnaire = () => (
    <Row style={{ maxWidth: '1000px' }}>
        <Col className="questionnaire-body">
            <div className="mb-4 ml-3">
                <span>
                    Investing Entity:
                </span>
            </div>
            <div className="mb-4 ml-3">
                By checking the box(es) below and signing your name,
                you declare that all your statements in this form are
                true and complete.
                        </div>
            <Col className="pl-5">
                <h6>Accredited Investor - Individual</h6>

                {mapQuestionsToCheckboxes(
                    investorAccreditedQuestionnaire.investor
                )}
                <h6>
                    Accredited Investor - Business Entity
                    (corporations, LLC's, trusts, etc.)
                            </h6>

                {mapQuestionsToCheckboxes(
                    investorAccreditedQuestionnaire.business
                )}
                <h6>Non-Accredited Investor</h6>
                {mapQuestionsToCheckboxes(
                    investorAccreditedQuestionnaire.nonAccreditedInvestor
                )}
            </Col>
        </Col>
    </Row>
)

export default Questionnaire;