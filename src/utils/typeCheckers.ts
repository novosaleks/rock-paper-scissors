import { gameItems } from './types';

export const isGameItems = (value: any): value is gameItems => {
    return value === 'rock' || value === 'paper' || value === 'scissors' || value === 'lizard' || value === 'spock';
};