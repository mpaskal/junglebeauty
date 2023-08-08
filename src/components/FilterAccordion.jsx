import { Accordion, Button } from 'react-bootstrap';
import { capitalize } from './Functions';
import Checkbox from './Checkbox';
import './../App.css';

const FilterAccordion = ({ handleChange, toggleAll, filters, options }) => {
    const colours = options.colours;
    const statuses = options.statuses;
    const sexes = options.sexes;
    const parents = options.parents;

    return (
        <Accordion className='filter-accordion' defaultActiveKey='1'>
            <Accordion.Item className='accordion-item' eventKey='0'>
                <Accordion.Header className='accordion-header'>
                <p className='accordion-header-text'>
                    Filter kittens
                </p>
                </Accordion.Header>
                <Accordion.Body>
                {statuses.map((status) => {
                    return (
                    <Checkbox key={status} label={capitalize(status)} name='status' value={status} handleChange={handleChange} checked={filters['status'].includes(status)} />
                    )
                })}
                <br/>
                {colours.map((colour) => {
                    return (
                    <Checkbox key={colour} label={capitalize(colour)} name='colour' value={colour} handleChange={handleChange} checked={filters['colour'].includes(colour)} />
                    )
                })}
                <br/>
                {sexes.map((sex) => {
                    return (
                    <Checkbox key={sex} label={capitalize(sex)} name='sex' value={sex} handleChange={handleChange} checked={filters['sex'].includes(sex)} />
                    )
                })}
    
                <div className='parent-accordions-container'>
                    <Accordion className='parent-accordion'>
                    <Accordion.Item eventKey={0}>
                        <Accordion.Header className='accordion-header'>
                            <p className='accordion-header-text'>Father</p>
                            <p className='accordion-selection-count'>Selected: {filters['father'].length}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                        {parents.filter((cat) => cat.sex === 'male').map((cat) => {
                            return (
                            <Checkbox key={cat.id} label={cat.name} name='father' value={cat.name} handleChange={handleChange} checked={filters['father'].includes(cat.name)} />
                            )
                        })}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    <Accordion className='parent-accordion'>
                    <Accordion.Item eventKey={0}>
                        <Accordion.Header className='accordion-header'>
                            <p className='accordion-header-text'>Mother</p>
                            <p className='accordion-selection-count'>Selected: {filters['mother'].length}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                        {parents.filter((cat) => cat.sex === 'female').map((cat) => {
                            return (
                            <Checkbox key={cat.id} label={cat.name} name='mother' value={cat.name} handleChange={handleChange} checked={filters['mother'].includes(cat.name)} />
                            )
                        })}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>

                <div className='buttons-container'>
                    <Button className='form-button' onClick={toggleAll}>Check/Uncheck All</Button>
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FilterAccordion;