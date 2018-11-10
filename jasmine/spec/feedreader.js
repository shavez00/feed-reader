$(function() {
    describe('RSS Feeds', () => {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls are defined', () => {
            for (var feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });

        it('names are defined', () => {
            for (var feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });

   describe('The Menu', () => {
        
        it('menu element is hidden', () => {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        
        it('menu works when clicked', () => {
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', () => {
        beforeEach((done) => {
            loadFeed(0, done);
        });
        
        it('are there any entries', () => {
           expect($('.entry').length > 0  && $('.feed').length > 0).toBe(true); 
        });
    });

    describe('New Feed Selection', () => {
        var entriesStart;
        var entriesEnd;
        
        beforeEach((done) => {
           $('.feed').empty();
           loadFeed(0, () => {
               entriesStart = $('.feed').html();
               loadFeed(1, () => {
                   entriesEnd = $('.feed').html();
                   done();
           });
           });
           
        });
        
        it('new feed is new content', () => {
           expect(entriesStart).not.toBe(entriesEnd);
        });
    });
}());
