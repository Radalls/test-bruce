import { verify } from '../src';
import { Mission, TitreDeSejour } from '../src/frame';

const mission1: Mission = {
	dateEnd: new Date('2022-12-05T00:00:00.000Z'),
	dateStart: new Date('2022-12-01T00:00:00.000Z'),
};
const mission2: Mission = {
	dateEnd: new Date('2022-12-10T00:00:00.000Z'),
	dateStart: new Date('2022-12-01T00:00:00.000Z'),
};

const titre1: TitreDeSejour = {
	dateEnd: new Date('2022-12-04T00:00:00.000Z'),
	dateStart: new Date('2022-12-01T00:00:00.000Z'),
};
const titre2: TitreDeSejour = {
	dateEnd: new Date('2022-12-10T00:00:00.000Z'),
	dateStart: new Date('2022-12-05T00:00:00.000Z'),
};
const titre3: TitreDeSejour = {
	dateEnd: new Date('2022-12-12T00:00:00.000Z'),
	dateStart: new Date('2022-11-01T00:00:00.000Z'),
};
const titre4: TitreDeSejour = {
	dateEnd: new Date('2022-12-10T00:00:00.000Z'),
	dateStart: new Date('2022-12-06T00:00:00.000Z'),
};

describe('check that function verify work as expected', () => {
	test('scenario', () => {
		expect(verify(mission1, [titre1])).toBe(false);
		expect(verify(mission1, [titre1, titre2])).toBe(true);
		expect(verify(mission1, [titre3])).toBe(true);
		expect(verify(mission1, [titre1, titre4])).toBe(false);
		expect(verify(mission1, [titre1, titre2, titre3, titre4])).toBe(true);
		expect(verify(mission2, [titre1])).toBe(false);
		expect(verify(mission2, [titre3])).toBe(true);
		expect(verify(mission1, [titre3])).toBe(true);
	});
});