import ConcertItem from './ConcertItem';

it('formats dates correctly', () => {
    let item = new ConcertItem();
    let date = new Date(2019, 0, 18, 12, 0, 0);
    expect(item.prettyDate(date)).toEqual("January 18, 2019, 12:00 PM");
});