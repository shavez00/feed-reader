$(function() {
    var entriesStart;
    var entriesEnd;

    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        it('names are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });

   describe('The Menu', function() {
        
        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        
        it('menu works when clicked', function() {
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done(0);
            });
        });
        
        it('are there any entries', function() {
           expect($('.entry .feed')).toBeDefined(); 
        });
    });

    describe('New Feed Selection', function() {
        beforeEach(function(done) {
           $('.feed').empty();
           loadFeed(0, function() {
               entriesStart = $('.feed').find(allFeeds.url);
               done();
           });
           loadFeed(1, function() {
               entriesEnd = $('.feed').find(allFeeds.url);
               done();
           });
        });
        
        it('new feed is new content', function() {
           expect(entriesStart).not.toBe(entriesEnd);
        });
    });
}());
